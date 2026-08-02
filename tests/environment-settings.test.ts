import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import {
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  EnvironmentSettings,
  readEnvironmentFile,
  type EnvironmentValues,
} from "../src/server/environment-settings";

describe("EnvironmentSettings", () => {
  let directory: string;
  let filePath: string;
  let defaultValues: EnvironmentValues;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "workflow-manager-settings-"));
    filePath = join(directory, ".env");
    const dataDirectory = join(directory, "data");
    defaultValues = {
      WORKFLOW_MANAGER_NAME: "FlowManager",
      WORKFLOW_MANAGER_TAGLINE: "Self-hosted workflow manager",
      WORKFLOW_MANAGER_TITLE: "서버의 반복 작업을 한 흐름으로.",
      WORKFLOW_MANAGER_DESCRIPTION: "기본 설명",
      WORKFLOW_MANAGER_ACCESS_MODE: "private",
      WORKFLOW_MANAGER_DATA_DIR: dataDirectory,
    };
  });

  afterEach(() => {
    rmSync(directory, { recursive: true, force: true });
  });

  test("허용된 변수만 갱신하고 기존의 다른 환경 변수는 보존한다", () => {
    writeFileSync(filePath, 'UNRELATED_SECRET="keep-me"\nPORT="3000"\n');
    const settings = new EnvironmentSettings({
      filePath,
      currentValues: defaultValues,
      defaultValues,
    });

    const result = settings.update({
      WORKFLOW_MANAGER_NAME: "사내 플로우",
      WORKFLOW_MANAGER_TAGLINE: "사내 작업 자동화",
      WORKFLOW_MANAGER_ACCESS_MODE: "local",
    });
    const saved = readFileSync(filePath, "utf8");

    expect(saved).toContain('UNRELATED_SECRET="keep-me"');
    expect(saved).toContain('WORKFLOW_MANAGER_NAME="사내 플로우"');
    expect(saved).toContain('WORKFLOW_MANAGER_TAGLINE="사내 작업 자동화"');
    expect(saved).toContain('WORKFLOW_MANAGER_ACCESS_MODE="local"');
    expect(saved).toContain('PORT="3000"');
    expect(result.settings.name).toBe("사내 플로우");
    expect(result.restartRequired).toBe(true);
  });

  test("화면에서 관리하지 않는 변수와 잘못된 접근 범위를 거부한다", () => {
    const settings = new EnvironmentSettings({
      filePath,
      currentValues: defaultValues,
      defaultValues,
    });

    expect(() => settings.update({ PORT: "4500" })).toThrow(
      "수정할 수 없는 환경 변수",
    );
    expect(() =>
      settings.update({ WORKFLOW_MANAGER_ACCESS_MODE: "public" }),
    ).toThrow(
      "private 또는 local",
    );
  });

  test("환경 파일의 인용값과 export 형식을 읽는다", () => {
    writeFileSync(
      filePath,
      'export WORKFLOW_MANAGER_ACCESS_MODE="private"\nPORT=3000\n# comment\n',
    );

    expect(readEnvironmentFile(filePath)).toEqual({
      WORKFLOW_MANAGER_ACCESS_MODE: "private",
      PORT: "3000",
    });
  });
});
