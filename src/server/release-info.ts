import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

type VersionFile = {
  version?: unknown;
};

function readVersion(filePath: string) {
  if (!existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as VersionFile;
    return typeof parsed.version === "string" ? parsed.version : null;
  } catch {
    return null;
  }
}

function displayVersion(value: string) {
  return value.startsWith("v") ? value : "v" + value;
}

export function applicationVersion() {
  const version =
    readVersion(join(import.meta.dir, "release.json")) ??
    readVersion(join(import.meta.dir, "..", "..", "package.json")) ??
    readVersion(join(process.cwd(), "package.json"));
  return version ? displayVersion(version) : "dev";
}
