import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute } from "node:path";
import { AppError } from "../domain/types";

export type EnvironmentVariableKey =
  | "WORKFLOW_MANAGER_NAME"
  | "WORKFLOW_MANAGER_TAGLINE"
  | "WORKFLOW_MANAGER_TITLE"
  | "WORKFLOW_MANAGER_DESCRIPTION"
  | "WORKFLOW_MANAGER_ACCESS_MODE"
  | "WORKFLOW_MANAGER_DATA_DIR";

export type EnvironmentValues = Record<EnvironmentVariableKey, string>;

type EnvironmentVariableDefinition = {
  key: EnvironmentVariableKey;
  label: string;
  description: string;
  apply: "immediate" | "restart";
  control: "text" | "number" | "textarea" | "select";
  options?: { value: string; label: string }[];
};

const DEFINITIONS: EnvironmentVariableDefinition[] = [
  {
    key: "WORKFLOW_MANAGER_NAME",
    label: "서비스 이름",
    description: "헤더 브랜드와 브라우저 제목에 표시됩니다.",
    apply: "immediate",
    control: "text",
  },
  {
    key: "WORKFLOW_MANAGER_TAGLINE",
    label: "헤더 보조 문구",
    description: "서비스 이름 옆에서 제품의 용도를 짧게 설명합니다.",
    apply: "immediate",
    control: "text",
  },
  {
    key: "WORKFLOW_MANAGER_TITLE",
    label: "홈 제목",
    description: "프로젝트 목록 화면의 가장 큰 제목입니다.",
    apply: "immediate",
    control: "text",
  },
  {
    key: "WORKFLOW_MANAGER_DESCRIPTION",
    label: "홈 설명",
    description: "홈 제목 아래와 페이지 설명 메타 정보에 사용됩니다.",
    apply: "immediate",
    control: "textarea",
  },
  {
    key: "WORKFLOW_MANAGER_ACCESS_MODE",
    label: "접근 범위",
    description: "private은 내부망, local은 같은 서버에서만 접근을 허용합니다.",
    apply: "restart",
    control: "select",
    options: [
      { value: "private", label: "내부 네트워크 (private)" },
      { value: "local", label: "이 서버에서만 (local)" },
    ],
  },
  {
    key: "WORKFLOW_MANAGER_DATA_DIR",
    label: "데이터 디렉터리",
    description: "데이터베이스와 런타임 데이터를 보관하는 절대 경로입니다.",
    apply: "restart",
    control: "text",
  },
];

const DEFINITION_BY_KEY = new Map(
  DEFINITIONS.map((definition) => [definition.key, definition]),
);

const IMMEDIATE_KEYS = new Set<EnvironmentVariableKey>([
  "WORKFLOW_MANAGER_NAME",
  "WORKFLOW_MANAGER_TAGLINE",
  "WORKFLOW_MANAGER_TITLE",
  "WORKFLOW_MANAGER_DESCRIPTION",
]);

function envLines(content: string) {
  return content ? content.replace(/\r\n/g, "\n").split("\n") : [];
}

function keyFromLine(line: string) {
  return line.match(/^\s*(?:export\s+)?([A-Z][A-Z0-9_]*)\s*=/)?.[1] ?? null;
}

function decodeValue(raw: string) {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  return value;
}

function parsedValues(content: string) {
  const values: Record<string, string> = {};
  for (const line of envLines(content)) {
    const key = keyFromLine(line);
    if (!key) continue;
    values[key] = decodeValue(line.slice(line.indexOf("=") + 1));
  }
  return values;
}

export function readEnvironmentFile(filePath: string) {
  if (!existsSync(filePath)) return {};
  return parsedValues(readFileSync(filePath, "utf8"));
}

function managedValues(content: string) {
  const values = new Map<EnvironmentVariableKey, string>();
  for (const [rawKey, value] of Object.entries(parsedValues(content))) {
    const key = rawKey as EnvironmentVariableKey;
    if (!key || !DEFINITION_BY_KEY.has(key)) continue;
    values.set(key, value);
  }
  return values;
}

function textValue(
  value: unknown,
  label: string,
  options: { required?: boolean; maxLength: number },
) {
  if (typeof value !== "string") {
    throw new AppError(`${label}은(는) 문자열이어야 합니다.`);
  }
  const result = value.trim();
  if (options.required !== false && !result) {
    throw new AppError(`${label}을(를) 입력해 주세요.`);
  }
  if (/[\r\n]/.test(result)) {
    throw new AppError(`${label}에는 줄바꿈을 사용할 수 없습니다.`);
  }
  if (result.length > options.maxLength) {
    throw new AppError(`${label}은(는) ${options.maxLength}자 이하여야 합니다.`);
  }
  return result;
}

function validateValue(key: EnvironmentVariableKey, value: unknown) {
  switch (key) {
    case "WORKFLOW_MANAGER_NAME":
      return textValue(value, "서비스 이름", { maxLength: 80 });
    case "WORKFLOW_MANAGER_TAGLINE":
      return textValue(value, "헤더 보조 문구", { maxLength: 120 });
    case "WORKFLOW_MANAGER_TITLE":
      return textValue(value, "홈 제목", { maxLength: 200 });
    case "WORKFLOW_MANAGER_DESCRIPTION":
      return textValue(value, "홈 설명", {
        required: false,
        maxLength: 500,
      });
    case "WORKFLOW_MANAGER_ACCESS_MODE":
      if (value !== "private" && value !== "local") {
        throw new AppError("접근 범위는 private 또는 local이어야 합니다.");
      }
      return value;
    case "WORKFLOW_MANAGER_DATA_DIR": {
      const label = "데이터 디렉터리";
      const path = textValue(value, label, { maxLength: 4096 });
      if (!isAbsolute(path)) {
        throw new AppError(`${label}은(는) 절대 경로여야 합니다.`);
      }
      return path;
    }
  }
}

export class EnvironmentSettings {
  private readonly currentValues: EnvironmentValues;

  constructor(
    private readonly options: {
      filePath: string;
      currentValues: EnvironmentValues;
      defaultValues: EnvironmentValues;
    },
  ) {
    this.currentValues = { ...options.currentValues };
  }

  private readFile() {
    return existsSync(this.options.filePath)
      ? readFileSync(this.options.filePath, "utf8")
      : "";
  }

  applicationSettings() {
    return {
      name: this.currentValues.WORKFLOW_MANAGER_NAME,
      tagline: this.currentValues.WORKFLOW_MANAGER_TAGLINE,
      title: this.currentValues.WORKFLOW_MANAGER_TITLE,
      description: this.currentValues.WORKFLOW_MANAGER_DESCRIPTION,
    };
  }

  list() {
    const configured = managedValues(this.readFile());
    return DEFINITIONS.map((definition) => ({
      ...definition,
      currentValue: this.currentValues[definition.key],
      defaultValue: this.options.defaultValues[definition.key],
      value:
        configured.get(definition.key) ?? this.currentValues[definition.key],
    }));
  }

  update(input: Record<string, unknown>) {
    const entries = Object.entries(input);
    if (!entries.length) {
      throw new AppError("변경할 환경 변수값이 필요합니다.");
    }

    const updates = new Map<EnvironmentVariableKey, string>();
    for (const [rawKey, rawValue] of entries) {
      const key = rawKey as EnvironmentVariableKey;
      if (!DEFINITION_BY_KEY.has(key)) {
        throw new AppError(`수정할 수 없는 환경 변수입니다: ${rawKey}`);
      }
      updates.set(key, validateValue(key, rawValue));
    }

    const lines = envLines(this.readFile());
    const output: string[] = [];
    const written = new Set<EnvironmentVariableKey>();
    for (const line of lines) {
      const key = keyFromLine(line) as EnvironmentVariableKey | null;
      if (!key || !updates.has(key)) {
        output.push(line);
        continue;
      }
      if (!written.has(key)) {
        output.push(`${key}=${JSON.stringify(updates.get(key))}`);
        written.add(key);
      }
    }
    for (const [key, value] of updates) {
      if (!written.has(key)) output.push(`${key}=${JSON.stringify(value)}`);
    }

    const content = `${output.filter((line, index) => line || index < output.length - 1).join("\n")}\n`;
    const temporaryPath = `${this.options.filePath}.tmp-${process.pid}-${Date.now()}`;
    try {
      mkdirSync(dirname(this.options.filePath), { recursive: true });
      writeFileSync(temporaryPath, content, { encoding: "utf8", mode: 0o600 });
      renameSync(temporaryPath, this.options.filePath);
    } catch {
      throw new AppError(
        "환경 설정 파일을 저장할 수 없습니다.",
        500,
        "settings_write_failed",
      );
    }

    for (const [key, value] of updates) {
      if (IMMEDIATE_KEYS.has(key)) this.currentValues[key] = value;
    }

    const restartRequired = [...updates].some(
      ([key, value]) =>
        DEFINITION_BY_KEY.get(key)?.apply === "restart" &&
        value !== this.currentValues[key],
    );
    return {
      settings: this.applicationSettings(),
      environment: this.list(),
      restartRequired,
    };
  }
}
