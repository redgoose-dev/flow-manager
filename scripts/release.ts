import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

type PackageManifest = {
  version?: unknown;
};

type ReleaseMetadata = {
  version: string;
  buildNumber: number;
  sourceCommit: string;
  sourceBranch: string;
  builtAt: string;
};

const RELEASE_BRANCH = "release";

function commandOutput(command: string[], cwd: string) {
  const result = Bun.spawnSync({
    cmd: command,
    cwd,
    stdout: "pipe",
    stderr: "pipe",
  });
  const stdout = result.stdout.toString().trim();
  const stderr = result.stderr.toString().trim();
  if (result.exitCode !== 0) {
    throw new Error(
      `${command.join(" ")} 실행에 실패했습니다.${stderr ? `\n${stderr}` : ""}`,
    );
  }
  return stdout;
}

function run(command: string[], cwd: string) {
  const result = Bun.spawnSync({
    cmd: command,
    cwd,
    stdout: "inherit",
    stderr: "inherit",
  });
  if (result.exitCode !== 0) {
    throw new Error(`${command.join(" ")} 실행에 실패했습니다.`);
  }
}

function gitOutput(args: string[], cwd: string) {
  return commandOutput(["git", ...args], cwd);
}

function git(args: string[], cwd: string) {
  run(["git", ...args], cwd);
}

function gitSucceeds(args: string[], cwd: string) {
  const result = Bun.spawnSync({
    cmd: ["git", ...args],
    cwd,
    stdout: "ignore",
    stderr: "ignore",
  });
  return result.exitCode === 0;
}

function repositoryRoot() {
  return gitOutput(["rev-parse", "--show-toplevel"], process.cwd());
}

function versionPrefix(repoRoot: string) {
  const manifest = JSON.parse(
    readFileSync(join(repoRoot, "package.json"), "utf8"),
  ) as PackageManifest;
  if (typeof manifest.version !== "string") {
    throw new Error("package.json의 version이 필요합니다.");
  }
  const match = manifest.version.match(/^(\d+)\.(\d+)\./);
  if (!match) {
    throw new Error(
      "package.json의 version은 major.minor.patch 형식이어야 합니다.",
    );
  }
  return `v${match[1]}.${match[2]}`;
}

function nextBuildNumber(repoRoot: string, prefix: string) {
  const tags = gitOutput(["tag", "--list", `${prefix}.*`], repoRoot)
    .split("\n")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const numbers = tags.flatMap((tag) => {
    const escapedPrefix = prefix.replace(".", "\\.");
    const match = tag.match(new RegExp(`^${escapedPrefix}\\.(\\d+)$`));
    return match ? [Number(match[1])] : [];
  });
  return numbers.length ? Math.max(...numbers) + 1 : 0;
}

function clearDirectory(directory: string) {
  for (const entry of readdirSync(directory)) {
    if (entry === ".git") continue;
    rmSync(join(directory, entry), { recursive: true, force: true });
  }
}

function copyDirectoryContents(source: string, destination: string) {
  mkdirSync(destination, { recursive: true });
  for (const entry of readdirSync(source, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") continue;
    cpSync(
      join(source, entry.name),
      join(destination, entry.name),
      { recursive: entry.isDirectory() },
    );
  }
}

function buildArtifact(
  repoRoot: string,
  outputDirectory: string,
  metadata?: ReleaseMetadata,
) {
  rmSync(outputDirectory, { recursive: true, force: true });
  mkdirSync(outputDirectory, { recursive: true });
  run(
    [
      process.execPath,
      "build",
      join(repoRoot, "src/index.ts"),
      "--target",
      "bun",
      "--outfile",
      join(outputDirectory, "index.js"),
    ],
    repoRoot,
  );
  copyDirectoryContents(join(repoRoot, "src/web"), join(outputDirectory, "web"));
  if (metadata) {
    writeFileSync(
      join(outputDirectory, "release.json"),
      `${JSON.stringify(metadata, null, 2)}\n`,
      { encoding: "utf8", mode: 0o644 },
    );
  }
}

function createReleaseWorktree(repoRoot: string, worktree: string) {
  if (
    gitSucceeds(
      ["show-ref", "--verify", "--quiet", `refs/heads/${RELEASE_BRANCH}`],
      repoRoot,
    )
  ) {
    git(["worktree", "add", worktree, RELEASE_BRANCH], repoRoot);
    return;
  }
  git(["worktree", "add", "--detach", worktree, "HEAD"], repoRoot);
  git(["switch", "--orphan", RELEASE_BRANCH], worktree);
}

function main() {
  const args = new Set(process.argv.slice(2));
  const buildOnly = args.has("--build-only");
  const push = args.has("--push");
  for (const arg of args) {
    if (arg !== "--build-only" && arg !== "--push") {
      throw new Error(`알 수 없는 옵션입니다: ${arg}`);
    }
  }

  const repoRoot = repositoryRoot();
  if (buildOnly) {
    buildArtifact(repoRoot, join(repoRoot, "dist"));
    console.log(`빌드 산출물을 생성했습니다: ${join(repoRoot, "dist")}`);
    return;
  }

  const status = gitOutput(["status", "--porcelain"], repoRoot);
  if (status) {
    throw new Error(
      "작업 트리가 깨끗하지 않습니다. 변경 사항을 먼저 정리해 주세요.",
    );
  }

  const prefix = versionPrefix(repoRoot);
  const buildNumber = nextBuildNumber(repoRoot, prefix);
  const version = `${prefix}.${buildNumber}`;
  if (
    gitSucceeds(
      ["show-ref", "--verify", "--quiet", `refs/tags/${version}`],
      repoRoot,
    )
  ) {
    throw new Error(`이미 존재하는 태그입니다: ${version}`);
  }

  const sourceCommit = gitOutput(["rev-parse", "HEAD"], repoRoot);
  const sourceBranch =
    gitOutput(["branch", "--show-current"], repoRoot) || "detached";
  const metadata: ReleaseMetadata = {
    version,
    buildNumber,
    sourceCommit,
    sourceBranch,
    builtAt: new Date().toISOString(),
  };
  const artifactDirectory = mkdtempSync(
    join(tmpdir(), "flow-manager-artifact-"),
  );
  const worktree = mkdtempSync(join(tmpdir(), "flow-manager-release-"));
  let worktreeCreated = false;

  try {
    console.log(`릴리스 ${version}을 생성합니다.`);
    run([process.execPath, "test"], repoRoot);
    buildArtifact(repoRoot, artifactDirectory, metadata);

    createReleaseWorktree(repoRoot, worktree);
    worktreeCreated = true;
    clearDirectory(worktree);
    copyDirectoryContents(artifactDirectory, worktree);
    git(["add", "--all"], worktree);
    git(["commit", "-m", `릴리스 ${version} 산출물 갱신`], worktree);
    git(["tag", "-a", version, "-m", `릴리스 ${version}`], worktree);

    if (push) {
      git(["push", "origin", RELEASE_BRANCH, "--follow-tags"], repoRoot);
    }

    console.log(`릴리스 ${version}을 생성했습니다.`);
    console.log(`소스 커밋: ${sourceCommit}`);
    console.log(
      `release 브랜치 push: ${push ? "완료" : "하지 않음 (--push 사용 가능)"}`,
    );
  } finally {
    if (worktreeCreated) {
      try {
        git(["worktree", "remove", "--force", worktree], repoRoot);
      } catch {
        // Preserve the original release error if cleanup also fails.
      }
    }
    rmSync(artifactDirectory, { recursive: true, force: true });
    rmSync(worktree, { recursive: true, force: true });
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
