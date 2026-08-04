import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { AppDatabase } from "../src/db/database";
import { WorkflowRunner } from "../src/runner/runner";
import { createApp } from "../src/server/app";
import {
  EnvironmentSettings,
  type EnvironmentValues,
} from "../src/server/environment-settings";
import { PasskeyAuth } from "../src/server/passkey-auth";

async function payload(response: Response) {
  return (await response.json()) as Record<string, any>;
}

describe("HTTP API", () => {
  let directory: string;
  let root: string;
  let db: AppDatabase;
  let app: ReturnType<typeof createApp>;
  let runner: WorkflowRunner;
  let sessionCookie: string;
  let csrfToken: string;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "workflow-manager-api-"));
    root = join(directory, "project");
    mkdirSync(root);
    db = new AppDatabase(join(directory, "test.sqlite"));
    const dataDirectory = join(directory, "data");
    const defaultValues: EnvironmentValues = {
      WORKFLOW_MANAGER_NAME: "FlowManager",
      WORKFLOW_MANAGER_TAGLINE: "Self-hosted workflow manager",
      WORKFLOW_MANAGER_TITLE: "서버의 반복 작업을 한 흐름으로.",
      WORKFLOW_MANAGER_DESCRIPTION: "기본 설명",
      WORKFLOW_MANAGER_ACCESS_MODE: "private",
      WORKFLOW_MANAGER_DATA_DIR: dataDirectory,
    };
    const environmentSettings = new EnvironmentSettings({
      filePath: join(directory, ".env"),
      currentValues: defaultValues,
      defaultValues,
    });
    const { user } = db.createAuthUserWithPasskey(
      {
        username: "admin",
        displayName: "테스트 관리자",
        webauthnUserId: "dGVzdC11c2Vy",
      },
      {
        id: "test-credential",
        publicKey: new Uint8Array([1, 2, 3]),
        counter: 0,
        deviceType: "singleDevice",
        backedUp: false,
        transports: ["internal"],
        name: "테스트 패스키",
      },
    );
    const auth = new PasskeyAuth(db, {
      rpID: "localhost",
      rpName: "FlowManager",
      expectedOrigin: "http://localhost",
    });
    const session = auth.issueSession(user.id);
    sessionCookie = session.cookie.split(";", 1)[0];
    csrfToken = session.csrfToken;
    runner = new WorkflowRunner(db);
    app = createApp({
      db,
      runner,
      environmentSettings,
      auth,
    });
  });

  afterEach(async () => {
    await runner.shutdown();
    db.close();
    rmSync(directory, { recursive: true, force: true });
  });

  function request(
    path: string,
    options: {
      method?: string;
      body?: unknown;
      authenticated?: boolean;
      csrf?: boolean;
      origin?: string;
    } = {},
  ) {
    const method = options.method ?? "GET";
    const headers = new Headers();
    if (options.body !== undefined) {
      headers.set("content-type", "application/json");
    }
    if (options.authenticated !== false) {
      headers.set("cookie", sessionCookie);
    }
    if (!["GET", "HEAD", "OPTIONS"].includes(method)) {
      headers.set("origin", options.origin ?? "http://localhost");
      if (options.authenticated !== false && options.csrf !== false) {
        headers.set("x-csrf-token", csrfToken);
      }
    }
    return app(
      new Request(`http://localhost${path}`, {
        method,
        headers,
        body:
          options.body === undefined ? undefined : JSON.stringify(options.body),
      }),
    );
  }

  test("프로젝트부터 단계까지 API로 구성한다", async () => {
    const projectResponse = await request("/api/projects", {
      method: "POST",
      body: {
        name: "API 프로젝트",
        description: "통합 테스트",
        rootDirectory: root,
      },
    });
    const project = (await payload(projectResponse)).project;
    expect(projectResponse.status).toBe(201);

    const workflowResponse = await request(
      `/api/projects/${project.id}/workflows`,
      {
        method: "POST",
        body: { name: "빌드" },
      },
    );
    const workflow = (await payload(workflowResponse)).workflow;
    expect(workflowResponse.status).toBe(201);

    const stepResponse = await request(`/api/workflows/${workflow.id}/steps`, {
      method: "POST",
      body: { name: "출력", command: "printf 'api test\\n'" },
    });
    const step = (await payload(stepResponse)).step;
    expect(stepResponse.status).toBe(201);

    const updateStepResponse = await request(`/api/steps/${step.id}`, {
      method: "PATCH",
      body: {
        name: "자동 저장 출력",
        command: "printf 'autosaved\\n'",
        workingDirectory: "",
        timeoutSeconds: null,
        enabled: true,
      },
    });
    expect(updateStepResponse.status).toBe(200);

    const detailResponse = await request(`/api/workflows/${workflow.id}`);
    const detail = (await payload(detailResponse)).workflow;
    expect(detail.steps).toHaveLength(1);
    expect(detail.steps[0].name).toBe("자동 저장 출력");
    expect(detail.steps[0].command).toBe("printf 'autosaved\\n'");
  });

  test("유효하지 않은 프로젝트 경로에 이해하기 쉬운 오류를 반환한다", async () => {
    const response = await request("/api/projects", {
      method: "POST",
      body: {
        name: "잘못된 프로젝트",
        rootDirectory: "relative/path",
      },
    });
    const result = await payload(response);

    expect(response.status).toBe(400);
    expect(result.error.message).toContain("절대 경로");
  });

  test("허용된 환경설정을 저장하고 화면 정보를 즉시 반영한다", async () => {
    const response = await request("/api/settings", {
      method: "PATCH",
      body: {
        values: {
          WORKFLOW_MANAGER_NAME: "내부 자동화",
          WORKFLOW_MANAGER_TAGLINE: "팀 워크플로우 센터",
          WORKFLOW_MANAGER_TITLE: "운영 작업을 한곳에서",
          WORKFLOW_MANAGER_DESCRIPTION: "팀 워크플로우 설명",
          WORKFLOW_MANAGER_ACCESS_MODE: "local",
        },
      },
    });
    const result = await payload(response);

    expect(response.status).toBe(200);
    expect(result.settings.name).toBe("내부 자동화");
    expect(result.settings.tagline).toBe("팀 워크플로우 센터");
    expect(result.settings.title).toBe("운영 작업을 한곳에서");
    expect(result.restartRequired).toBe(true);

    const settingsResponse = await request("/api/settings");
    const settings = await payload(settingsResponse);
    expect(settings.settings.description).toBe("팀 워크플로우 설명");
    const visibleKeys = settings.environment.map(
      (variable: { key: string }) => variable.key,
    );
    expect(visibleKeys).not.toContain("HOST");
    expect(visibleKeys).not.toContain("PORT");
    expect(visibleKeys).not.toContain("WORKFLOW_MANAGER_DB");
    expect(
      settings.environment.find(
        (variable: { key: string }) =>
          variable.key === "WORKFLOW_MANAGER_ACCESS_MODE",
      ).value,
    ).toBe("local");

    const manifestResponse = await request("/manifest.webmanifest", {
      authenticated: false,
    });
    const manifest = await payload(manifestResponse);
    expect(manifestResponse.status).toBe(200);
    expect(manifestResponse.headers.get("content-type")).toContain(
      "application/manifest+json",
    );
    expect(manifestResponse.headers.get("cache-control")).toBe("no-cache");
    expect(manifest.name).toBe("내부 자동화");
    expect(manifest.short_name).toBe("내부 자동화");
    expect(manifest.description).toContain("운영 작업을 한곳에서");
    expect(manifest.description).toContain("팀 워크플로우 설명");
    expect(manifest.theme_color).toBe("#14776d");
  });

  test("실행 시작 API가 완료된 실행과 영속 로그를 남긴다", async () => {
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    const workflow = db.createWorkflow(project.id, { name: "실행" });
    db.createStep(workflow.id, { name: "출력", command: "printf 'from api\\n'" });

    const response = await request(`/api/workflows/${workflow.id}/runs`, {
      method: "POST",
    });
    const run = (await payload(response)).run;
    expect(response.status).toBe(202);

    const deadline = Date.now() + 3000;
    while (
      ["queued", "running"].includes(db.getRun(run.id)!.status) &&
      Date.now() < deadline
    ) {
      await Bun.sleep(20);
    }

    const detailResponse = await request(`/api/runs/${run.id}`);
    const detail = (await payload(detailResponse)).run;
    const logsResponse = await request(`/api/runs/${run.id}/logs`);
    const logs = (await payload(logsResponse)).logs;

    expect(detail.status).toBe("succeeded");
    expect(logs.some((log: { content: string }) => log.content.includes("from api"))).toBe(
      true,
    );
  });

  test("실행 중 입력을 받아 재개하고 비밀값을 응답과 로그에 남기지 않는다", async () => {
    const project = db.createProject({ name: "프로젝트", rootDirectory: root });
    const workflow = db.createWorkflow(project.id, { name: "입력 실행" });
    db.createStep(workflow.id, {
      name: "입력",
      command: "IFS= read -r answer; printf 'received:%s\\n' \"$answer\"",
      inputPrompt: "관리자 비밀번호",
      inputSensitive: true,
    });

    const startResponse = await request(`/api/workflows/${workflow.id}/runs`, {
      method: "POST",
    });
    const started = (await payload(startResponse)).run;
    const deadline = Date.now() + 3000;
    while (
      db.getRun(started.id)!.status !== "waiting_input" &&
      Date.now() < deadline
    ) {
      await Bun.sleep(20);
    }
    const waiting = db.getRun(started.id)!;

    const response = await request(`/api/runs/${started.id}/input`, {
      method: "POST",
      body: {
        requestId: waiting.pendingInput!.id,
        value: "api-super-secret",
      },
    });
    const responseText = await response.text();
    expect(response.status).toBe(202);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(responseText).not.toContain("api-super-secret");

    while (
      ["queued", "running", "waiting_input"].includes(db.getRun(started.id)!.status) &&
      Date.now() < deadline
    ) {
      await Bun.sleep(20);
    }
    const finished = db.getRun(started.id)!;
    const logs = db.getLogs(started.id).map((log) => log.content).join("");
    expect(finished.status).toBe("succeeded");
    expect(logs).toContain("received:[민감한 입력 숨김]");
    expect(logs).not.toContain("api-super-secret");
  });

  test("정적 웹 화면과 헬스 체크를 제공한다", async () => {
    const health = await request("/api/health");
    const index = await request("/");
    const clientScript = await request("/app.js");
    const favicon = await request("/favicon-32.png");
    const appIcon = await request("/icon-192.png");
    const manifest = await request("/manifest.webmanifest");

    expect(health.status).toBe(200);
    expect((await payload(health)).ok).toBe(true);
    const authStatus = await request("/api/auth/status");
    expect((await payload(authStatus)).version).toMatch(/^v\d+\.\d+\.\d+$/);
    expect(index.status).toBe(200);
    const indexHtml = await index.text();
    expect(indexHtml).toContain("FlowManager");
    expect(indexHtml).toContain('id="topbar-version"');
    expect(indexHtml).toContain('rel="manifest"');
    expect(indexHtml).toContain('rel="apple-touch-icon"');
    expect(clientScript.status).toBe(200);
    const clientJavaScript = await clientScript.text();
    expect(clientJavaScript).toContain("STEP_AUTOSAVE_DELAY = 700");
    expect(clientJavaScript).toContain("data-save-status");
    expect(clientJavaScript).toContain("navigator.credentials.create");
    expect(clientJavaScript).toContain("navigator.credentials.get");
    expect(clientJavaScript).toContain("waiting_input");
    expect(clientJavaScript).toContain("canceling");
    expect(clientJavaScript).toContain("inputSensitive");
    expect(clientJavaScript).toContain("/input");
    expect(clientJavaScript).toContain('data-action="run-workflow"');
    expect(clientJavaScript).toContain("workflow-sidebar");
    expect(clientJavaScript).toContain("workflow-run-panel");
    expect(clientJavaScript).toContain("/manifest.webmanifest?revision=");
    expect(clientJavaScript).not.toContain(">단계 저장</button>");
    expect(favicon.status).toBe(200);
    expect(favicon.headers.get("content-type")).toContain("image/png");
    expect(appIcon.status).toBe(200);
    expect(appIcon.headers.get("content-type")).toContain("image/png");
    expect(manifest.status).toBe(200);
    expect((await payload(manifest)).icons).toHaveLength(2);
  });

  test("로그인하지 않은 사용자의 API 접근을 차단한다", async () => {
    const statusResponse = await request("/api/auth/status", {
      authenticated: false,
    });
    const status = await payload(statusResponse);
    const projects = await request("/api/projects", {
      authenticated: false,
    });
    const health = await request("/api/health", { authenticated: false });

    expect(status.configured).toBe(true);
    expect(status.authenticated).toBe(false);
    expect(status.settings.name).toBe("FlowManager");
    expect(projects.status).toBe(401);
    expect((await payload(projects)).error.code).toBe("unauthorized");
    expect(health.status).toBe(200);
  });

  test("상태 변경 API에 CSRF 토큰과 정확한 origin을 요구한다", async () => {
    const withoutCsrf = await request("/api/projects", {
      method: "POST",
      body: { name: "차단", rootDirectory: root },
      csrf: false,
    });
    const wrongOrigin = await request("/api/projects", {
      method: "POST",
      body: { name: "차단", rootDirectory: root },
      origin: "http://evil.example",
    });

    expect(withoutCsrf.status).toBe(403);
    expect((await payload(withoutCsrf)).error.code).toBe("csrf_forbidden");
    expect(wrongOrigin.status).toBe(403);
    expect((await payload(wrongOrigin)).error.code).toBe("origin_forbidden");
  });
});
