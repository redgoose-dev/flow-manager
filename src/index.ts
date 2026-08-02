import { join, resolve } from "node:path";
import { AppDatabase } from "./db/database";
import { WorkflowRunner } from "./runner/runner";
import { createApp } from "./server/app";
import {
  EnvironmentSettings,
  type EnvironmentValues,
} from "./server/environment-settings";
import {
  isAllowedClientAddress,
  parseAccessMode,
  privateNetworkUrls,
} from "./server/network-access";
import { PasskeyAuth } from "./server/passkey-auth";

const defaultDataDirectory = join(process.cwd(), "data");
const defaultEnvironment: EnvironmentValues = {
  WORKFLOW_MANAGER_NAME: "FlowManager",
  WORKFLOW_MANAGER_TAGLINE: "Self-hosted workflow manager",
  WORKFLOW_MANAGER_TITLE: "서버의 반복 작업을 한 흐름으로.",
  WORKFLOW_MANAGER_DESCRIPTION:
    "프로젝트별 셸 워크플로우를 구성하고 실행 상태와 로그를 한곳에서 추적하세요.",
  WORKFLOW_MANAGER_ACCESS_MODE: "private",
  WORKFLOW_MANAGER_DATA_DIR: defaultDataDirectory,
};

const port = Number(Bun.env.PORT ?? 3000);
const hostname = Bun.env.HOST ?? "0.0.0.0";
const accessMode = parseAccessMode(Bun.env.WORKFLOW_MANAGER_ACCESS_MODE);
const dataDirectory = resolve(
  Bun.env.WORKFLOW_MANAGER_DATA_DIR ??
    defaultEnvironment.WORKFLOW_MANAGER_DATA_DIR,
);
const publicDirectory = resolve(
  Bun.env.WORKFLOW_MANAGER_PUBLIC_DIR ?? join(import.meta.dir, "web"),
);
const databasePath = resolve(
  Bun.env.WORKFLOW_MANAGER_DB ?? join(dataDirectory, "workflow-manager.sqlite"),
);
const environmentSettings = new EnvironmentSettings({
  filePath: join(process.cwd(), ".env"),
  currentValues: {
    WORKFLOW_MANAGER_NAME:
      Bun.env.WORKFLOW_MANAGER_NAME ?? defaultEnvironment.WORKFLOW_MANAGER_NAME,
    WORKFLOW_MANAGER_TAGLINE:
      Bun.env.WORKFLOW_MANAGER_TAGLINE ??
      defaultEnvironment.WORKFLOW_MANAGER_TAGLINE,
    WORKFLOW_MANAGER_TITLE:
      Bun.env.WORKFLOW_MANAGER_TITLE ?? defaultEnvironment.WORKFLOW_MANAGER_TITLE,
    WORKFLOW_MANAGER_DESCRIPTION:
      Bun.env.WORKFLOW_MANAGER_DESCRIPTION ??
      defaultEnvironment.WORKFLOW_MANAGER_DESCRIPTION,
    WORKFLOW_MANAGER_ACCESS_MODE: accessMode,
    WORKFLOW_MANAGER_DATA_DIR: dataDirectory,
  },
  defaultValues: defaultEnvironment,
});

const db = new AppDatabase(databasePath);
const interruptedCount = db.recoverInterruptedRuns();
const runner = new WorkflowRunner(db);
const passkeyOrigin =
  Bun.env.WORKFLOW_MANAGER_ORIGIN ?? `http://localhost:${port}`;
const passkeyAuth = new PasskeyAuth(db, {
  rpID: Bun.env.WORKFLOW_MANAGER_RP_ID ?? "localhost",
  rpName:
    Bun.env.WORKFLOW_MANAGER_RP_NAME ??
    environmentSettings.applicationSettings().name,
  expectedOrigin: passkeyOrigin,
});
const app = createApp({
  db,
  runner,
  environmentSettings,
  auth: passkeyAuth,
  publicDirectory,
});

const server = Bun.serve({
  port,
  hostname,
  fetch(request, server) {
    const clientAddress = server.requestIP(request)?.address;
    if (!isAllowedClientAddress(clientAddress, accessMode)) {
      return Response.json(
        {
          error: {
            code: "network_forbidden",
            message: "이 서비스는 내부 네트워크에서만 접근할 수 있습니다.",
          },
        },
        { status: 403 },
      );
    }
    return app(request);
  },
  error(error) {
    console.error(error);
    return Response.json(
      { error: { code: "internal_error", message: "서버 오류가 발생했습니다." } },
      { status: 500 },
    );
  },
});

console.log("Workflow Manager:");
console.log(`  Local: http://localhost:${server.port}/`);
for (const url of privateNetworkUrls(server.port)) {
  console.log(`  Network: ${url}`);
}
console.log(`Access mode: ${accessMode}`);
console.log(`Data: ${databasePath}`);
console.log(`Passkey origin: ${passkeyAuth.config.expectedOrigin}`);
if (passkeyAuth.setupToken) {
  const setupUrl = new URL(passkeyAuth.config.expectedOrigin);
  setupUrl.hash = `/setup?token=${passkeyAuth.setupToken}`;
  console.log("");
  console.log("First-time passkey setup (valid for 15 minutes):");
  console.log(`  ${setupUrl.toString()}`);
}
if (interruptedCount) {
  console.log(`Recovered ${interruptedCount} interrupted run(s).`);
}
