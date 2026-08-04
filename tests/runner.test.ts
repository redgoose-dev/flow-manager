import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { existsSync, mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { AppDatabase } from "../src/db/database";
import { AppError } from "../src/domain/types";
import { WorkflowRunner } from "../src/runner/runner";

const TEST_TIMEOUT_MS = 10_000;

async function waitForFinished(
  db: AppDatabase,
  runId: string,
  timeoutMs = TEST_TIMEOUT_MS,
) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const run = db.getRun(runId)!;
    if (!["queued", "running", "canceling", "waiting_input"].includes(run.status)) return run;
    await Bun.sleep(20);
  }
  throw new Error("실행 완료를 기다리는 중 타임아웃이 발생했습니다.");
}

async function waitForStatus(
  db: AppDatabase,
  runId: string,
  status: string,
  timeoutMs = TEST_TIMEOUT_MS,
) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const run = db.getRun(runId)!;
    if (run.status === status) return run;
    await Bun.sleep(20);
  }
  throw new Error(`${status} 상태를 기다리는 중 타임아웃이 발생했습니다.`);
}

describe("WorkflowRunner", () => {
  let directory: string;
  let root: string;
  let db: AppDatabase;
  let runner: WorkflowRunner;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "workflow-manager-runner-"));
    root = join(directory, "project");
    mkdirSync(root);
    db = new AppDatabase(join(directory, "test.sqlite"));
    runner = new WorkflowRunner(db);
  });

  afterEach(async () => {
    await runner.shutdown();
    db.close();
    rmSync(directory, { recursive: true, force: true });
  });

  function workflow(name = "테스트 워크플로우") {
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    return db.createWorkflow(project.id, { name });
  }

  test("활성화된 단계를 순서대로 실행하고 로그를 저장한다", async () => {
    const item = workflow();
    db.createStep(item.id, { name: "첫째", command: "printf 'first\\n'" });
    db.createStep(item.id, { name: "둘째", command: "printf 'second\\n'" });
    db.createStep(item.id, {
      name: "비활성",
      command: "printf 'disabled\\n'",
      enabled: false,
    });

    const started = runner.start(item.id);
    const finished = await waitForFinished(db, started.id);
    const logs = db.getLogs(started.id).map((log) => log.content).join("");

    expect(finished.status).toBe("succeeded");
    expect(finished.steps.map((step) => step.status)).toEqual([
      "succeeded",
      "succeeded",
    ]);
    expect(logs.indexOf("first")).toBeLessThan(logs.indexOf("second"));
    expect(logs).not.toContain("disabled");
  });

  test("진행률 출력을 묶어서 저장하고 실행을 완료한다", async () => {
    const item = workflow();
    const progressOutputCount = 120;
    db.createStep(item.id, {
      name: "진행률 출력",
      command: `i=0; while [ $i -lt ${progressOutputCount} ]; do printf '\\rprogress=%s' \"$i\"; i=$((i + 1)); sleep 0.01; done; printf '\\ncomplete\\n'`,
    });

    const started = runner.start(item.id);
    const finished = await waitForFinished(db, started.id);
    const logs = db
      .getLogs(started.id)
      .filter((log) => log.stream === "stdout");

    expect(finished.status).toBe("succeeded");
    expect(logs.map((log) => log.content).join("")).toContain("progress=119");
    expect(logs.length).toBeLessThan(progressOutputCount);
  });

  test("실패하면 이후 단계를 실행하지 않는다", async () => {
    const item = workflow();
    db.createStep(item.id, {
      name: "실패",
      command: "printf 'error output\\n' >&2; exit 7",
    });
    db.createStep(item.id, {
      name: "실행 금지",
      command: "touch should-not-exist",
    });

    const started = runner.start(item.id);
    const finished = await waitForFinished(db, started.id);

    expect(finished.status).toBe("failed");
    expect(finished.exitCode).toBe(7);
    expect(finished.steps.map((step) => step.status)).toEqual([
      "failed",
      "skipped",
    ]);
    expect(existsSync(join(root, "should-not-exist"))).toBe(false);
    expect(db.getLogs(started.id).some((log) => log.stream === "stderr")).toBe(
      true,
    );
  });

  test("한 프로젝트의 중복 실행을 차단한다", async () => {
    const item = workflow();
    db.createStep(item.id, { name: "대기", command: "sleep 0.3" });
    const started = runner.start(item.id);

    let error: unknown;
    try {
      runner.start(item.id);
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(AppError);
    expect((error as AppError).code).toBe("project_busy");
    await waitForFinished(db, started.id);
  });

  test("활성 단계 없는 워크플로우 실행을 차단한다", () => {
    const item = workflow();
    const step = db.createStep(item.id, { name: "비활성", command: "echo never" });
    db.updateStep(step.id, { enabled: false });

    let error: unknown;
    try {
      runner.start(item.id);
    } catch (caught) {
      error = caught;
    }

    expect(error).toBeInstanceOf(AppError);
    expect((error as AppError).code).toBe("no_active_steps");
  });

  test("실행 중인 명령을 취소하고 이후 단계를 취소 상태로 남긴다", async () => {
    const item = workflow();
    db.createStep(item.id, { name: "긴 작업", command: "sleep 5" });
    db.createStep(item.id, { name: "후속 작업", command: "touch canceled-marker" });
    const started = runner.start(item.id);

    await Bun.sleep(80);
    runner.cancel(started.id);
    const finished = await waitForFinished(db, started.id);

    expect(finished.status).toBe("canceled");
    expect(finished.steps.map((step) => step.status)).toEqual([
      "canceled",
      "canceled",
    ]);
    expect(existsSync(join(root, "canceled-marker"))).toBe(false);
  });

  test("종료한 셸의 하위 프로세스가 pipe를 붙잡아도 취소 후 재실행할 수 있다", async () => {
    const item = workflow();
    db.createStep(item.id, {
      name: "출력 pipe를 붙잡는 작업",
      command: "sleep 10 & exit 0",
    });
    const started = runner.start(item.id);
    await waitForStatus(db, started.id, "running");

    const requested = runner.cancel(started.id);
    expect(requested.status).toBe("canceling");
    const canceled = await waitForFinished(db, started.id);
    expect(canceled.status).toBe("canceled");

    const retry = runner.start(item.id);
    await waitForStatus(db, retry.id, "running");
    runner.cancel(retry.id);
    expect((await waitForFinished(db, retry.id)).status).toBe("canceled");
  });

  test("단계 타임아웃을 실패로 처리한다", async () => {
    const item = workflow();
    db.createStep(item.id, {
      name: "제한 시간 초과",
      command: "sleep 3",
      timeoutSeconds: 1,
    });
    const started = runner.start(item.id);
    const finished = await waitForFinished(db, started.id);
    const logs = db.getLogs(started.id).map((log) => log.content).join("");

    expect(finished.status).toBe("failed");
    expect(finished.exitCode).toBe(124);
    expect(finished.steps[0].status).toBe("failed");
    expect(logs).toContain("타임아웃");
  });

  test("입력값을 기다렸다가 stdin으로 전달하고 민감한 출력을 가린다", async () => {
    const item = workflow();
    db.createStep(item.id, {
      name: "비밀 입력",
      command: "IFS= read -r answer; printf 'answer=%s\\n' \"$answer\"",
      inputPrompt: "비밀값을 입력하세요",
      inputSensitive: true,
    });
    const started = runner.start(item.id);
    const waiting = await waitForStatus(db, started.id, "waiting_input");

    expect(waiting.steps[0].status).toBe("waiting_input");
    expect(waiting.pendingInput?.prompt).toBe("비밀값을 입력하세요");
    expect(waiting.pendingInput?.sensitive).toBe(true);

    runner.respond(
      started.id,
      waiting.pendingInput!.id,
      "super-secret-value",
    );
    const finished = await waitForFinished(db, started.id);
    const logs = db.getLogs(started.id).map((log) => log.content).join("");

    expect(finished.status).toBe("succeeded");
    expect(finished.pendingInput).toBeNull();
    expect(logs).toContain("answer=[민감한 입력 숨김]");
    expect(logs).not.toContain("super-secret-value");
    expect(
      db.sqlite.query("PRAGMA table_info(input_requests)").all()
        .some((column: any) => column.name === "value"),
    ).toBe(false);
  });

  test("입력 대기 중인 실행을 취소할 수 있다", async () => {
    const item = workflow();
    db.createStep(item.id, {
      name: "입력 대기",
      command: "read answer",
      inputPrompt: "계속할까요?",
    });
    const started = runner.start(item.id);
    await waitForStatus(db, started.id, "waiting_input");

    runner.cancel(started.id);
    const canceled = db.getRun(started.id)!;

    expect(canceled.status).toBe("canceled");
    expect(canceled.steps[0].status).toBe("canceled");
    expect(canceled.pendingInput).toBeNull();
  });

  test("SSE 연결에 현재 상태와 저장된 로그를 전달한다", async () => {
    const item = workflow();
    db.createStep(item.id, { name: "출력", command: "printf 'streamed\\n'" });
    const started = runner.start(item.id);
    await waitForFinished(db, started.id);

    const response = runner.events(started.id);
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let content = "";
    for (let index = 0; index < 20 && !content.includes("event: log"); index++) {
      const chunk = await reader.read();
      if (chunk.done) break;
      content += decoder.decode(chunk.value, { stream: true });
    }
    await reader.cancel();

    expect(response.headers.get("content-type")).toContain("text/event-stream");
    expect(content).toContain("event: run");
    expect(content).toContain("event: log");
    expect(content).toContain("streamed");
  });
});
