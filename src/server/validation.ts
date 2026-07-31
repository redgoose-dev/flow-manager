import { statSync } from "node:fs";
import { isAbsolute, normalize, relative, resolve, sep } from "node:path";
import { AppError } from "../domain/types";

export function objectBody(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new AppError("JSON 객체 형식의 요청 본문이 필요합니다.");
  }
  return value as Record<string, unknown>;
}

export function requiredString(
  value: unknown,
  label: string,
  maxLength = 200,
) {
  if (typeof value !== "string" || !value.trim()) {
    throw new AppError(`${label}을(를) 입력해 주세요.`);
  }
  const result = value.trim();
  if (result.length > maxLength) {
    throw new AppError(`${label}은(는) ${maxLength}자 이하여야 합니다.`);
  }
  return result;
}

export function optionalString(
  value: unknown,
  label: string,
  maxLength = 2000,
) {
  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    throw new AppError(`${label}은(는) 문자열이어야 합니다.`);
  }
  if (value.length > maxLength) {
    throw new AppError(`${label}은(는) ${maxLength}자 이하여야 합니다.`);
  }
  return value.trim();
}

export function optionalBoolean(value: unknown, label: string) {
  if (value === undefined) return undefined;
  if (typeof value !== "boolean") {
    throw new AppError(`${label}은(는) 참 또는 거짓이어야 합니다.`);
  }
  return value;
}

export function optionalTimeout(value: unknown) {
  if (value === undefined || value === null || value === "") {
    return value === undefined ? undefined : null;
  }
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < 1 ||
    value > 86_400
  ) {
    throw new AppError("타임아웃은 1~86400 사이의 정수여야 합니다.");
  }
  return value;
}

export function oneLineInput(value: unknown) {
  if (typeof value !== "string" || value.length === 0) {
    throw new AppError("입력값을 입력해 주세요.");
  }
  if (value.length > 10_000) {
    throw new AppError("입력값은 10000자 이하여야 합니다.");
  }
  if (value.includes("\n") || value.includes("\r")) {
    throw new AppError("입력값은 한 줄이어야 합니다.");
  }
  return value;
}

export function rootDirectory(value: unknown) {
  const path = requiredString(value, "기본 작업 경로", 4096);
  if (!isAbsolute(path)) {
    throw new AppError("기본 작업 경로는 절대 경로여야 합니다.");
  }
  try {
    if (!statSync(path).isDirectory()) {
      throw new Error("not-directory");
    }
  } catch {
    throw new AppError("기본 작업 경로가 존재하는 디렉터리가 아닙니다.");
  }
  return normalize(path);
}

export function workingDirectory(value: unknown) {
  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    throw new AppError("하위 작업 경로는 문자열이어야 합니다.");
  }
  const path = value.trim();
  if (!path) return "";
  if (isAbsolute(path)) {
    throw new AppError("하위 작업 경로에는 프로젝트 기준 상대 경로를 입력해 주세요.");
  }
  const normalized = normalize(path);
  if (
    normalized === ".." ||
    normalized.startsWith(`..${sep}`) ||
    normalized.includes(`%2e${sep}`)
  ) {
    throw new AppError("하위 작업 경로는 프로젝트 밖을 가리킬 수 없습니다.");
  }
  return normalized === "." ? "" : normalized;
}

export function resolveWorkingDirectory(root: string, child: string) {
  const target = resolve(root, child || ".");
  const relation = relative(root, target);
  if (relation === ".." || relation.startsWith(`..${sep}`) || isAbsolute(relation)) {
    throw new AppError("작업 경로가 프로젝트 밖을 가리킵니다.");
  }
  try {
    if (!statSync(target).isDirectory()) throw new Error("not-directory");
  } catch {
    throw new AppError(`작업 경로가 존재하지 않습니다: ${target}`);
  }
  return target;
}
