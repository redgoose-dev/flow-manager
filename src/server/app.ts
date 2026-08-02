import { join } from "node:path";
import type { AppDatabase } from "../db/database";
import { AppError } from "../domain/types";
import type { WorkflowRunner } from "../runner/runner";
import type { EnvironmentSettings } from "./environment-settings";
import type { PasskeyAuth } from "./passkey-auth";
import {
  objectBody,
  oneLineInput,
  optionalBoolean,
  optionalString,
  optionalTimeout,
  requiredString,
  rootDirectory,
  workingDirectory,
} from "./validation";
import { applicationVersion } from "./release-info";

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };

function json(data: unknown, status = 200, headers: HeadersInit = {}) {
  return Response.json(data, {
    status,
    headers: { ...JSON_HEADERS, ...headers },
  });
}

function authJson(data: unknown, status = 200, headers: HeadersInit = {}) {
  return json(data, status, {
    "cache-control": "no-store",
    ...headers,
  });
}

function empty(status = 204) {
  return new Response(null, { status });
}

async function body(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 1_000_000) {
    throw new AppError("요청 본문이 너무 큽니다.", 413, "payload_too_large");
  }
  try {
    return objectBody(await request.json());
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError("올바른 JSON 요청 본문이 필요합니다.");
  }
}

function idFrom(pathname: string, pattern: RegExp) {
  const match = pathname.match(pattern);
  return match ? decodeURIComponent(match[1]) : null;
}

function requireProject(db: AppDatabase, projectId: string) {
  const project = db.getProject(projectId);
  if (!project) throw new AppError("프로젝트를 찾을 수 없습니다.", 404, "not_found");
  return project;
}

function requireWorkflow(db: AppDatabase, workflowId: string) {
  const workflow = db.getWorkflow(workflowId);
  if (!workflow) {
    throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
  }
  return workflow;
}

function securityHeaders(response: Response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "same-origin");
  headers.set("x-frame-options", "DENY");
  headers.set(
    "content-security-policy",
    "default-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'; connect-src 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'",
  );
  headers.set(
    "permissions-policy",
    "publickey-credentials-create=(self), publickey-credentials-get=(self)",
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function createApp(options: {
  db: AppDatabase;
  runner: WorkflowRunner;
  environmentSettings: EnvironmentSettings;
  auth: PasskeyAuth;
  publicDirectory?: string;
}) {
  const { db, runner, environmentSettings, auth } = options;
  const publicDirectory =
    options.publicDirectory ?? join(import.meta.dir, "..", "web");
  const version = applicationVersion();

  return async function fetch(request: Request): Promise<Response> {
    try {
      const url = new URL(request.url);
      const { pathname } = url;
      const method = request.method;

      if (pathname === "/api/health" && method === "GET") {
        return json({ ok: true });
      }

      if (pathname === "/manifest.webmanifest" && method === "GET") {
        const settings = environmentSettings.applicationSettings();
        return securityHeaders(
          json(
            {
              id: "/",
              name: settings.name,
              short_name: settings.name,
              description: [settings.title, settings.description]
                .filter(Boolean)
                .join(" "),
              start_url: "/",
              scope: "/",
              display: "standalone",
              background_color: "#f4f3ee",
              theme_color: "#14776d",
              icons: [
                {
                  src: "/icon-192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "any maskable",
                },
                {
                  src: "/icon-512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable",
                },
              ],
            },
            200,
            {
              "cache-control": "no-cache",
              "content-type": "application/manifest+json; charset=utf-8",
            },
          ),
        );
      }

      if (pathname === "/api/auth/status" && method === "GET") {
        return authJson({
          ...auth.status(request),
          settings: environmentSettings.applicationSettings(),
          version,
        });
      }
      if (pathname === "/api/auth/setup/options" && method === "POST") {
        auth.assertTrustedOrigin(request);
        return authJson(await auth.beginSetup(await body(request)));
      }
      if (pathname === "/api/auth/setup/verify" && method === "POST") {
        auth.assertTrustedOrigin(request);
        const result = await auth.finishSetup(await body(request));
        return authJson(
          {
            user: result.user,
            csrfToken: result.session.csrfToken,
            expiresAt: result.session.expiresAt,
          },
          201,
          { "set-cookie": result.session.cookie },
        );
      }
      if (pathname === "/api/auth/login/options" && method === "POST") {
        auth.assertTrustedOrigin(request);
        return authJson(await auth.beginLogin());
      }
      if (pathname === "/api/auth/login/verify" && method === "POST") {
        auth.assertTrustedOrigin(request);
        const result = await auth.finishLogin(await body(request));
        return authJson(
          {
            user: result.user,
            csrfToken: result.session.csrfToken,
            expiresAt: result.session.expiresAt,
          },
          200,
          { "set-cookie": result.session.cookie },
        );
      }

      const authContext = pathname.startsWith("/api/")
        ? auth.requireSession(request)
        : null;
      if (
        authContext &&
        !["GET", "HEAD", "OPTIONS"].includes(method)
      ) {
        auth.assertCsrf(request, authContext);
      }

      if (pathname === "/api/auth/logout" && method === "POST") {
        return authJson(
          { authenticated: false },
          200,
          { "set-cookie": auth.logout(request) },
        );
      }
      if (pathname === "/api/auth/passkeys" && method === "GET") {
        return authJson(auth.listPasskeys(authContext!));
      }
      if (pathname === "/api/auth/passkeys/options" && method === "POST") {
        return authJson(
          await auth.beginAddPasskey(authContext!, await body(request)),
        );
      }
      if (pathname === "/api/auth/passkeys/verify" && method === "POST") {
        return authJson(
          await auth.finishAddPasskey(authContext!, await body(request)),
          201,
        );
      }
      const passkeyId = idFrom(
        pathname,
        /^\/api\/auth\/passkeys\/([^/]+)$/,
      );
      if (passkeyId && method === "DELETE") {
        auth.deletePasskey(authContext!, passkeyId);
        return empty();
      }

      if (pathname === "/api/settings" && method === "GET") {
        return json({
          settings: environmentSettings.applicationSettings(),
          environment: environmentSettings.list(),
          version,
        });
      }
      if (pathname === "/api/settings" && method === "PATCH") {
        const input = await body(request);
        return json({
          ...environmentSettings.update(objectBody(input.values)),
          version,
        });
      }

      if (pathname === "/api/projects" && method === "GET") {
        return json({ projects: db.listProjects() });
      }
      if (pathname === "/api/projects" && method === "POST") {
        const input = await body(request);
        const project = db.createProject({
          name: requiredString(input.name, "프로젝트 이름"),
          description: optionalString(input.description, "설명") ?? "",
          rootDirectory: rootDirectory(input.rootDirectory),
        });
        return json({ project }, 201);
      }

      const projectId = idFrom(pathname, /^\/api\/projects\/([^/]+)$/);
      if (projectId && method === "GET") {
        const project = requireProject(db, projectId);
        return json({
          project,
          workflows: db.listWorkflows(projectId),
          runs: db.listRuns({ projectId, limit: 30 }),
        });
      }
      if (projectId && method === "PATCH") {
        const current = requireProject(db, projectId);
        const input = await body(request);
        const nextRootDirectory =
          input.rootDirectory === undefined
            ? undefined
            : rootDirectory(input.rootDirectory);
        if (
          nextRootDirectory !== undefined &&
          current.rootDirectory !== nextRootDirectory &&
          db.hasActiveProjectRun(projectId)
        ) {
          throw new AppError(
            "실행 중에는 프로젝트 작업 경로를 변경할 수 없습니다.",
            409,
            "project_busy",
          );
        }
        const project = db.updateProject(projectId, {
          name:
            input.name === undefined
              ? undefined
              : requiredString(input.name, "프로젝트 이름"),
          description: optionalString(input.description, "설명"),
          rootDirectory: nextRootDirectory,
        });
        return json({ project });
      }
      if (projectId && method === "DELETE") {
        requireProject(db, projectId);
        if (db.hasActiveProjectRun(projectId)) {
          throw new AppError(
            "실행 중인 프로젝트는 삭제할 수 없습니다.",
            409,
            "project_busy",
          );
        }
        db.deleteProject(projectId);
        return empty();
      }

      const projectWorkflowsId = idFrom(
        pathname,
        /^\/api\/projects\/([^/]+)\/workflows$/,
      );
      if (projectWorkflowsId && method === "GET") {
        requireProject(db, projectWorkflowsId);
        return json({ workflows: db.listWorkflows(projectWorkflowsId) });
      }
      if (projectWorkflowsId && method === "POST") {
        const input = await body(request);
        const workflow = db.createWorkflow(projectWorkflowsId, {
          name: requiredString(input.name, "워크플로우 이름"),
          description: optionalString(input.description, "설명") ?? "",
        });
        return json({ workflow }, 201);
      }

      const workflowId = idFrom(pathname, /^\/api\/workflows\/([^/]+)$/);
      if (workflowId && method === "GET") {
        return json({ workflow: requireWorkflow(db, workflowId) });
      }
      if (workflowId && method === "PATCH") {
        requireWorkflow(db, workflowId);
        const input = await body(request);
        const workflow = db.updateWorkflow(workflowId, {
          name:
            input.name === undefined
              ? undefined
              : requiredString(input.name, "워크플로우 이름"),
          description: optionalString(input.description, "설명"),
        });
        return json({ workflow });
      }
      if (workflowId && method === "DELETE") {
        requireWorkflow(db, workflowId);
        db.deleteWorkflow(workflowId);
        return empty();
      }

      const workflowStepsId = idFrom(
        pathname,
        /^\/api\/workflows\/([^/]+)\/steps$/,
      );
      if (workflowStepsId && method === "POST") {
        const input = await body(request);
        const step = db.createStep(workflowStepsId, {
          name: requiredString(input.name, "단계 이름"),
          command: requiredString(input.command, "명령", 20_000),
          workingDirectory: workingDirectory(input.workingDirectory),
          timeoutSeconds: optionalTimeout(input.timeoutSeconds),
          inputPrompt: optionalString(input.inputPrompt, "입력 안내", 500),
          inputSensitive: optionalBoolean(input.inputSensitive, "민감한 입력"),
          enabled: optionalBoolean(input.enabled, "활성화 상태"),
        });
        return json({ step }, 201);
      }

      const reorderWorkflowId = idFrom(
        pathname,
        /^\/api\/workflows\/([^/]+)\/steps\/reorder$/,
      );
      if (reorderWorkflowId && method === "POST") {
        const input = await body(request);
        if (
          !Array.isArray(input.stepIds) ||
          !input.stepIds.every((stepId) => typeof stepId === "string")
        ) {
          throw new AppError("stepIds 문자열 배열이 필요합니다.");
        }
        const workflow = db.reorderSteps(
          reorderWorkflowId,
          input.stepIds as string[],
        );
        return json({ workflow });
      }

      const stepId = idFrom(pathname, /^\/api\/steps\/([^/]+)$/);
      if (stepId && method === "PATCH") {
        const input = await body(request);
        const step = db.updateStep(stepId, {
          name:
            input.name === undefined
              ? undefined
              : requiredString(input.name, "단계 이름"),
          command:
            input.command === undefined
              ? undefined
              : requiredString(input.command, "명령", 20_000),
          workingDirectory: workingDirectory(input.workingDirectory),
          timeoutSeconds: optionalTimeout(input.timeoutSeconds),
          inputPrompt: optionalString(input.inputPrompt, "입력 안내", 500),
          inputSensitive: optionalBoolean(input.inputSensitive, "민감한 입력"),
          enabled: optionalBoolean(input.enabled, "활성화 상태"),
        });
        return json({ step });
      }
      if (stepId && method === "DELETE") {
        db.deleteStep(stepId);
        return empty();
      }

      const runWorkflowId = idFrom(
        pathname,
        /^\/api\/workflows\/([^/]+)\/runs$/,
      );
      if (runWorkflowId && method === "POST") {
        const run = runner.start(runWorkflowId);
        return json({ run }, 202);
      }

      if (pathname === "/api/runs" && method === "GET") {
        const projectIdFilter = url.searchParams.get("projectId") ?? undefined;
        const limit = Number(url.searchParams.get("limit") ?? 30);
        return json({
          runs: db.listRuns({
            projectId: projectIdFilter,
            limit: Number.isFinite(limit) ? limit : 30,
          }),
        });
      }

      const runId = idFrom(pathname, /^\/api\/runs\/([^/]+)$/);
      if (runId && method === "GET") {
        const run = db.getRun(runId);
        if (!run) throw new AppError("실행을 찾을 수 없습니다.", 404, "not_found");
        return json({ run });
      }

      const cancelRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/cancel$/);
      if (cancelRunId && method === "POST") {
        const run = runner.cancel(cancelRunId);
        return json({ run }, 202);
      }

      const inputRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/input$/);
      if (inputRunId && method === "POST") {
        const input = await body(request);
        const run = runner.respond(
          inputRunId,
          requiredString(input.requestId, "입력 요청 ID"),
          oneLineInput(input.value),
        );
        return authJson({ run }, 202);
      }

      const logRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/logs$/);
      if (logRunId && method === "GET") {
        if (!db.getRun(logRunId)) {
          throw new AppError("실행을 찾을 수 없습니다.", 404, "not_found");
        }
        const after = Number(url.searchParams.get("after") ?? 0);
        return json({
          logs: db.getLogs(logRunId, Number.isFinite(after) ? after : 0),
        });
      }

      const eventRunId = idFrom(pathname, /^\/api\/runs\/([^/]+)\/events$/);
      if (eventRunId && method === "GET") {
        const after = Number(url.searchParams.get("after") ?? 0);
        return runner.events(eventRunId, Number.isFinite(after) ? after : 0);
      }

      if (pathname.startsWith("/api/")) {
        throw new AppError("API 경로를 찾을 수 없습니다.", 404, "not_found");
      }

      const staticFiles: Record<string, string> = {
        "/": "index.html",
        "/index.html": "index.html",
        "/app.js": "app.js",
        "/styles.css": "styles.css",
        "/favicon-32.png": "assets/favicon-32.png",
        "/apple-touch-icon.png": "assets/apple-touch-icon.png",
        "/icon-192.png": "assets/icon-192.png",
        "/icon-512.png": "assets/icon-512.png",
      };
      const fileName = staticFiles[pathname];
      if (!fileName) return new Response("Not found", { status: 404 });
      const file = Bun.file(join(publicDirectory, fileName));
      if (!(await file.exists())) return new Response("Not found", { status: 404 });
      return securityHeaders(new Response(file));
    } catch (error) {
      if (error instanceof AppError) {
        return json(
          { error: { code: error.code, message: error.message } },
          error.status,
        );
      }
      console.error(error);
      return json(
        { error: { code: "internal_error", message: "서버 오류가 발생했습니다." } },
        500,
      );
    }
  };
}
