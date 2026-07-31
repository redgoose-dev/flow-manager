import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { Database } from "bun:sqlite";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { AppDatabase } from "../src/db/database";

describe("AppDatabase CRUD", () => {
  let directory: string;
  let db: AppDatabase;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "workflow-manager-db-"));
    db = new AppDatabase(join(directory, "test.sqlite"));
  });

  afterEach(() => {
    db.close();
    rmSync(directory, { recursive: true, force: true });
  });

  test("프로젝트, 워크플로우, 단계를 생성하고 순서를 변경한다", () => {
    const root = join(directory, "project");
    mkdirSync(root);
    const project = db.createProject({
      name: "테스트 프로젝트",
      rootDirectory: root,
    });
    const workflow = db.createWorkflow(project.id, { name: "배포" });
    const first = db.createStep(workflow.id, {
      name: "첫 단계",
      command: "echo first",
    });
    const second = db.createStep(workflow.id, {
      name: "둘째 단계",
      command: "echo second",
    });

    db.reorderSteps(workflow.id, [second.id, first.id]);
    const result = db.getWorkflow(workflow.id)!;

    expect(result.steps.map((step) => step.name)).toEqual(["둘째 단계", "첫 단계"]);
    expect(db.listWorkflows(project.id)[0].stepCount).toBe(2);
  });

  test("기존 데이터베이스에 입력 단계 컬럼을 추가한다", () => {
    db.close();
    const path = join(directory, "legacy.sqlite");
    const legacy = new Database(path, { create: true });
    legacy.exec(`
      CREATE TABLE steps (
        id TEXT PRIMARY KEY,
        workflow_id TEXT NOT NULL,
        name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        enabled INTEGER NOT NULL DEFAULT 1
      );
      CREATE TABLE step_runs (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL,
        step_id TEXT,
        step_name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        status TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        exit_code INTEGER
      );
    `);
    legacy.close();

    db = new AppDatabase(path);
    const stepColumns = db.sqlite
      .query("PRAGMA table_info(steps)")
      .all() as Array<{ name: string }>;
    const stepRunColumns = db.sqlite
      .query("PRAGMA table_info(step_runs)")
      .all() as Array<{ name: string }>;

    expect(stepColumns.map((column) => column.name)).toContain("input_prompt");
    expect(stepColumns.map((column) => column.name)).toContain("input_sensitive");
    expect(stepRunColumns.map((column) => column.name)).toContain("input_prompt");
    expect(stepRunColumns.map((column) => column.name)).toContain("input_sensitive");
  });

  test("실행은 단계 정보를 스냅샷으로 보관한다", () => {
    const root = join(directory, "project");
    mkdirSync(root);
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    const workflow = db.createWorkflow(project.id, { name: "빌드" });
    const step = db.createStep(workflow.id, {
      name: "원래 이름",
      command: "echo original",
    });

    const run = db.createRun(workflow.id);
    db.updateStep(step.id, { name: "수정된 이름", command: "echo changed" });

    const stored = db.getRun(run.id)!;
    expect(stored.steps[0].stepName).toBe("원래 이름");
    expect(stored.steps[0].command).toBe("echo original");
  });

  test("서버 시작 시 미완료 실행을 interrupted로 복구한다", () => {
    const root = join(directory, "project");
    mkdirSync(root);
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    const workflow = db.createWorkflow(project.id, { name: "실행" });
    db.createStep(workflow.id, { name: "단계", command: "sleep 10" });
    const run = db.createRun(workflow.id);
    db.updateRun(run.id, {
      status: "running",
      startedAt: new Date().toISOString(),
    });
    db.updateStepRun(run.steps[0].id, {
      status: "running",
      startedAt: new Date().toISOString(),
    });

    expect(db.recoverInterruptedRuns()).toBe(1);

    const recovered = db.getRun(run.id)!;
    expect(recovered.status).toBe("interrupted");
    expect(recovered.steps[0].status).toBe("interrupted");
    expect(recovered.finishedAt).not.toBeNull();
  });

  test("서버 재시작 복구에서 입력 대기 실행은 그대로 보존한다", () => {
    const root = join(directory, "project");
    mkdirSync(root);
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    const workflow = db.createWorkflow(project.id, { name: "입력 실행" });
    db.createStep(workflow.id, {
      name: "입력",
      command: "read answer",
      inputPrompt: "값을 입력하세요",
    });
    db.createStep(workflow.id, { name: "후속", command: "echo done" });
    const run = db.createRun(workflow.id);
    db.updateRun(run.id, { status: "waiting_input", startedAt: new Date().toISOString() });
    db.updateStepRun(run.steps[0].id, {
      status: "waiting_input",
      startedAt: new Date().toISOString(),
    });
    db.createInputRequest(run.id, run.steps[0].id, "값을 입력하세요", true);

    expect(db.recoverInterruptedRuns()).toBe(0);

    const recovered = db.getRun(run.id)!;
    expect(recovered.status).toBe("waiting_input");
    expect(recovered.steps.map((step) => step.status)).toEqual([
      "waiting_input",
      "queued",
    ]);
    expect(recovered.pendingInput?.prompt).toBe("값을 입력하세요");
  });
});
