import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import type {
  AuthSession,
  AuthUser,
  InputRequest,
  PasskeyCredential,
  Project,
  Run,
  RunDetail,
  RunLog,
  RunStatus,
  Step,
  StepRunStatus,
  Workflow,
} from "../domain/types";
import { AppError } from "../domain/types";

type AnyRow = Record<string, unknown>;

const now = () => new Date().toISOString();
const id = () => crypto.randomUUID();

function asProject(row: AnyRow): Project {
  return {
    id: String(row.id),
    name: String(row.name),
    description: String(row.description ?? ""),
    rootDirectory: String(row.root_directory),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    recentRunStatus: (row.recent_run_status as RunStatus | null) ?? undefined,
  };
}

function asWorkflow(row: AnyRow): Workflow {
  return {
    id: String(row.id),
    projectId: String(row.project_id),
    name: String(row.name),
    description: String(row.description ?? ""),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    stepCount: row.step_count === undefined ? undefined : Number(row.step_count),
    activeStepCount:
      row.active_step_count === undefined
        ? undefined
        : Number(row.active_step_count),
    recentRunStatus: (row.recent_run_status as RunStatus | null) ?? undefined,
  };
}

function asStep(row: AnyRow): Step {
  return {
    id: String(row.id),
    workflowId: String(row.workflow_id),
    name: String(row.name),
    command: String(row.command),
    position: Number(row.position),
    workingDirectory: String(row.working_directory ?? ""),
    timeoutSeconds:
      row.timeout_seconds === null || row.timeout_seconds === undefined
        ? null
        : Number(row.timeout_seconds),
    inputPrompt: String(row.input_prompt ?? ""),
    inputSensitive: Boolean(row.input_sensitive),
    enabled: Boolean(row.enabled),
  };
}

function asRun(row: AnyRow): Run {
  return {
    id: String(row.id),
    projectId: String(row.project_id),
    workflowId: row.workflow_id === null ? null : String(row.workflow_id),
    workflowName: String(row.workflow_name),
    status: row.status as RunStatus,
    startedAt: row.started_at === null ? null : String(row.started_at),
    finishedAt: row.finished_at === null ? null : String(row.finished_at),
    currentStepId:
      row.current_step_id === null ? null : String(row.current_step_id),
    exitCode: row.exit_code === null ? null : Number(row.exit_code),
    createdAt: String(row.created_at),
  };
}

function asStepRun(row: AnyRow) {
  return {
    id: String(row.id),
    runId: String(row.run_id),
    stepId: row.step_id === null ? null : String(row.step_id),
    stepName: String(row.step_name),
    command: String(row.command),
    position: Number(row.position),
    workingDirectory: String(row.working_directory ?? ""),
    timeoutSeconds:
      row.timeout_seconds === null ? null : Number(row.timeout_seconds),
    inputPrompt: String(row.input_prompt ?? ""),
    inputSensitive: Boolean(row.input_sensitive),
    status: row.status as StepRunStatus,
    startedAt: row.started_at === null ? null : String(row.started_at),
    finishedAt: row.finished_at === null ? null : String(row.finished_at),
    exitCode: row.exit_code === null ? null : Number(row.exit_code),
  };
}

function asInputRequest(row: AnyRow): InputRequest {
  return {
    id: String(row.id),
    runId: String(row.run_id),
    stepRunId: String(row.step_run_id),
    prompt: String(row.prompt),
    sensitive: Boolean(row.sensitive),
    requestedAt: String(row.requested_at),
  };
}

function asAuthUser(row: AnyRow): AuthUser {
  return {
    id: String(row.id),
    username: String(row.username),
    displayName: String(row.display_name),
    webauthnUserId: String(row.webauthn_user_id),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

function asPasskey(row: AnyRow): PasskeyCredential {
  const publicKey = row.public_key;
  if (!(publicKey instanceof Uint8Array)) {
    throw new Error("저장된 패스키 공개키 형식이 올바르지 않습니다.");
  }
  let transports: string[] = [];
  try {
    const parsed = JSON.parse(String(row.transports));
    if (Array.isArray(parsed)) {
      transports = parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    transports = [];
  }
  return {
    id: String(row.credential_id),
    userId: String(row.user_id),
    publicKey: new Uint8Array(publicKey),
    counter: Number(row.counter),
    deviceType: row.device_type as PasskeyCredential["deviceType"],
    backedUp: Boolean(row.backed_up),
    transports,
    name: String(row.name),
    createdAt: String(row.created_at),
    lastUsedAt: row.last_used_at === null ? null : String(row.last_used_at),
  };
}

function asAuthSession(row: AnyRow): AuthSession {
  return {
    tokenHash: String(row.token_hash),
    userId: String(row.user_id),
    csrfToken: String(row.csrf_token),
    createdAt: String(row.created_at),
    expiresAt: String(row.expires_at),
  };
}

export class AppDatabase {
  readonly sqlite: Database;

  constructor(path: string) {
    if (path !== ":memory:") {
      mkdirSync(dirname(path), { recursive: true });
    }
    this.sqlite = new Database(path, { create: true, strict: true });
    this.sqlite.exec("PRAGMA foreign_keys = ON");
    this.sqlite.exec("PRAGMA journal_mode = WAL");
    this.sqlite.exec("PRAGMA busy_timeout = 5000");
    this.migrate();
  }

  close() {
    this.sqlite.close();
  }

  private migrate() {
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        root_directory TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS workflows (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS steps (
        id TEXT PRIMARY KEY,
        workflow_id TEXT NOT NULL REFERENCES workflows(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        input_prompt TEXT NOT NULL DEFAULT '',
        input_sensitive INTEGER NOT NULL DEFAULT 1,
        enabled INTEGER NOT NULL DEFAULT 1,
        UNIQUE(workflow_id, position)
      );

      CREATE TABLE IF NOT EXISTS runs (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
        workflow_id TEXT REFERENCES workflows(id) ON DELETE SET NULL,
        workflow_name TEXT NOT NULL,
        status TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        current_step_id TEXT,
        exit_code INTEGER,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS step_runs (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_id TEXT REFERENCES steps(id) ON DELETE SET NULL,
        step_name TEXT NOT NULL,
        command TEXT NOT NULL,
        position INTEGER NOT NULL,
        working_directory TEXT NOT NULL DEFAULT '',
        timeout_seconds INTEGER,
        input_prompt TEXT NOT NULL DEFAULT '',
        input_sensitive INTEGER NOT NULL DEFAULT 1,
        status TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        exit_code INTEGER
      );

      CREATE TABLE IF NOT EXISTS run_logs (
        seq INTEGER PRIMARY KEY AUTOINCREMENT,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_run_id TEXT REFERENCES step_runs(id) ON DELETE SET NULL,
        stream TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS input_requests (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
        step_run_id TEXT NOT NULL UNIQUE REFERENCES step_runs(id) ON DELETE CASCADE,
        prompt TEXT NOT NULL,
        sensitive INTEGER NOT NULL DEFAULT 1,
        status TEXT NOT NULL,
        requested_at TEXT NOT NULL,
        answered_at TEXT
      );

      CREATE TABLE IF NOT EXISTS auth_users (
        id TEXT PRIMARY KEY,
        singleton INTEGER NOT NULL DEFAULT 1 CHECK (singleton = 1),
        username TEXT NOT NULL UNIQUE,
        display_name TEXT NOT NULL,
        webauthn_user_id TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        UNIQUE(singleton)
      );

      CREATE TABLE IF NOT EXISTS passkey_credentials (
        credential_id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES auth_users(id) ON DELETE CASCADE,
        public_key BLOB NOT NULL,
        counter INTEGER NOT NULL,
        device_type TEXT NOT NULL,
        backed_up INTEGER NOT NULL,
        transports TEXT NOT NULL DEFAULT '[]',
        name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        last_used_at TEXT
      );

      CREATE TABLE IF NOT EXISTS auth_sessions (
        token_hash TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES auth_users(id) ON DELETE CASCADE,
        csrf_token TEXT NOT NULL,
        created_at TEXT NOT NULL,
        expires_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_workflows_project ON workflows(project_id);
      CREATE INDEX IF NOT EXISTS idx_steps_workflow_position ON steps(workflow_id, position);
      CREATE INDEX IF NOT EXISTS idx_runs_project_created ON runs(project_id, created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_step_runs_run_position ON step_runs(run_id, position);
      CREATE INDEX IF NOT EXISTS idx_run_logs_run_seq ON run_logs(run_id, seq);
      CREATE INDEX IF NOT EXISTS idx_input_requests_run_status ON input_requests(run_id, status);
      CREATE INDEX IF NOT EXISTS idx_passkeys_user ON passkey_credentials(user_id);
      CREATE INDEX IF NOT EXISTS idx_auth_sessions_expiry ON auth_sessions(expires_at);
    `);
    this.ensureColumn("steps", "input_prompt", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("steps", "input_sensitive", "INTEGER NOT NULL DEFAULT 1");
    this.ensureColumn("step_runs", "input_prompt", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn(
      "step_runs",
      "input_sensitive",
      "INTEGER NOT NULL DEFAULT 1",
    );
  }

  private ensureColumn(table: "steps" | "step_runs", column: string, sql: string) {
    const columns = this.sqlite
      .query(`PRAGMA table_info(${table})`)
      .all() as Array<{ name: string }>;
    if (!columns.some((item) => item.name === column)) {
      this.sqlite.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${sql}`);
    }
  }

  hasAuthUser() {
    return Boolean(this.sqlite.query("SELECT 1 FROM auth_users LIMIT 1").get());
  }

  getAuthUser(): AuthUser | null {
    const row = this.sqlite.query("SELECT * FROM auth_users LIMIT 1").get() as
      | AnyRow
      | null;
    return row ? asAuthUser(row) : null;
  }

  getAuthUserById(userId: string): AuthUser | null {
    const row = this.sqlite
      .query("SELECT * FROM auth_users WHERE id = ?")
      .get(userId) as AnyRow | null;
    return row ? asAuthUser(row) : null;
  }

  createAuthUserWithPasskey(
    userInput: {
      username: string;
      displayName: string;
      webauthnUserId: string;
    },
    credentialInput: Omit<
      PasskeyCredential,
      "userId" | "createdAt" | "lastUsedAt"
    >,
  ) {
    const userId = id();
    const timestamp = now();
    const transaction = this.sqlite.transaction(() => {
      if (this.hasAuthUser()) {
        throw new AppError(
          "관리자 설정이 이미 완료되었습니다.",
          409,
          "setup_complete",
        );
      }
      this.sqlite
        .query(
          `INSERT INTO auth_users
           (id, username, display_name, webauthn_user_id, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?)`,
        )
        .run(
          userId,
          userInput.username,
          userInput.displayName,
          userInput.webauthnUserId,
          timestamp,
          timestamp,
        );
      this.insertPasskey(userId, credentialInput, timestamp);
    });
    transaction();
    return {
      user: this.getAuthUserById(userId)!,
      passkey: this.getPasskey(credentialInput.id)!,
    };
  }

  private insertPasskey(
    userId: string,
    input: Omit<PasskeyCredential, "userId" | "createdAt" | "lastUsedAt">,
    timestamp = now(),
  ) {
    this.sqlite
      .query(
        `INSERT INTO passkey_credentials
         (credential_id, user_id, public_key, counter, device_type,
          backed_up, transports, name, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        input.id,
        userId,
        input.publicKey,
        input.counter,
        input.deviceType,
        input.backedUp ? 1 : 0,
        JSON.stringify(input.transports),
        input.name,
        timestamp,
      );
  }

  addPasskey(
    userId: string,
    input: Omit<PasskeyCredential, "userId" | "createdAt" | "lastUsedAt">,
  ) {
    if (!this.getAuthUserById(userId)) {
      throw new AppError("관리자를 찾을 수 없습니다.", 404, "not_found");
    }
    this.insertPasskey(userId, input);
    return this.getPasskey(input.id)!;
  }

  getPasskey(credentialId: string): PasskeyCredential | null {
    const row = this.sqlite
      .query("SELECT * FROM passkey_credentials WHERE credential_id = ?")
      .get(credentialId) as AnyRow | null;
    return row ? asPasskey(row) : null;
  }

  listPasskeys(userId: string): PasskeyCredential[] {
    return (
      this.sqlite
        .query(
          `SELECT * FROM passkey_credentials
           WHERE user_id = ? ORDER BY created_at DESC`,
        )
        .all(userId) as AnyRow[]
    ).map(asPasskey);
  }

  updatePasskeyUsage(
    credentialId: string,
    input: {
      counter: number;
      deviceType: PasskeyCredential["deviceType"];
      backedUp: boolean;
    },
  ) {
    const result = this.sqlite
      .query(
        `UPDATE passkey_credentials
         SET counter = ?, device_type = ?, backed_up = ?, last_used_at = ?
         WHERE credential_id = ?`,
      )
      .run(
        input.counter,
        input.deviceType,
        input.backedUp ? 1 : 0,
        now(),
        credentialId,
      );
    if (!result.changes) {
      throw new AppError("패스키를 찾을 수 없습니다.", 404, "not_found");
    }
    return this.getPasskey(credentialId)!;
  }

  deletePasskey(userId: string, credentialId: string) {
    const transaction = this.sqlite.transaction(() => {
      const credentials = this.listPasskeys(userId);
      if (!credentials.some((credential) => credential.id === credentialId)) {
        throw new AppError("패스키를 찾을 수 없습니다.", 404, "not_found");
      }
      if (credentials.length <= 1) {
        throw new AppError(
          "마지막 패스키는 삭제할 수 없습니다.",
          409,
          "last_passkey",
        );
      }
      this.sqlite
        .query(
          "DELETE FROM passkey_credentials WHERE credential_id = ? AND user_id = ?",
        )
        .run(credentialId, userId);
    });
    transaction();
  }

  createAuthSession(input: AuthSession) {
    this.sqlite
      .query(
        `INSERT INTO auth_sessions
         (token_hash, user_id, csrf_token, created_at, expires_at)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        input.tokenHash,
        input.userId,
        input.csrfToken,
        input.createdAt,
        input.expiresAt,
      );
    return input;
  }

  getAuthSession(tokenHash: string, currentTime = now()): AuthSession | null {
    const row = this.sqlite
      .query(
        `SELECT * FROM auth_sessions
         WHERE token_hash = ? AND expires_at > ?`,
      )
      .get(tokenHash, currentTime) as AnyRow | null;
    return row ? asAuthSession(row) : null;
  }

  deleteAuthSession(tokenHash: string) {
    this.sqlite
      .query("DELETE FROM auth_sessions WHERE token_hash = ?")
      .run(tokenHash);
  }

  deleteExpiredAuthSessions(currentTime = now()) {
    return this.sqlite
      .query("DELETE FROM auth_sessions WHERE expires_at <= ?")
      .run(currentTime).changes;
  }

  recoverInterruptedRuns() {
    const timestamp = now();
    const transaction = this.sqlite.transaction(() => {
      this.sqlite
        .query(
          `UPDATE step_runs
           SET status = 'interrupted', finished_at = ?
           WHERE status IN ('queued', 'running')
             AND run_id IN (
               SELECT id FROM runs WHERE status IN ('queued', 'running')
             )`,
        )
        .run(timestamp);
      return this.sqlite
        .query(
          `UPDATE runs
           SET status = 'interrupted', finished_at = ?, current_step_id = NULL
           WHERE status IN ('queued', 'running')`,
        )
        .run(timestamp).changes;
    });
    return transaction();
  }

  listProjects(): Project[] {
    return (
      this.sqlite
        .query(
          `SELECT p.*,
            (SELECT r.status FROM runs r
             WHERE r.project_id = p.id
             ORDER BY r.created_at DESC LIMIT 1) AS recent_run_status
           FROM projects p ORDER BY p.updated_at DESC`,
        )
        .all() as AnyRow[]
    ).map(asProject);
  }

  getProject(projectId: string): Project | null {
    const row = this.sqlite
      .query("SELECT * FROM projects WHERE id = ?")
      .get(projectId) as AnyRow | null;
    return row ? asProject(row) : null;
  }

  createProject(input: {
    name: string;
    description?: string;
    rootDirectory: string;
  }): Project {
    const projectId = id();
    const timestamp = now();
    this.sqlite
      .query(
        `INSERT INTO projects
         (id, name, description, root_directory, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        projectId,
        input.name,
        input.description ?? "",
        input.rootDirectory,
        timestamp,
        timestamp,
      );
    return this.getProject(projectId)!;
  }

  updateProject(
    projectId: string,
    input: Partial<Pick<Project, "name" | "description" | "rootDirectory">>,
  ): Project {
    const current = this.getProject(projectId);
    if (!current) throw new AppError("프로젝트를 찾을 수 없습니다.", 404, "not_found");
    this.sqlite
      .query(
        `UPDATE projects
         SET name = ?, description = ?, root_directory = ?, updated_at = ?
         WHERE id = ?`,
      )
      .run(
        input.name ?? current.name,
        input.description ?? current.description,
        input.rootDirectory ?? current.rootDirectory,
        now(),
        projectId,
      );
    return this.getProject(projectId)!;
  }

  deleteProject(projectId: string) {
    const result = this.sqlite
      .query("DELETE FROM projects WHERE id = ?")
      .run(projectId);
    if (!result.changes) throw new AppError("프로젝트를 찾을 수 없습니다.", 404, "not_found");
  }

  listWorkflows(projectId: string): Workflow[] {
    return (
      this.sqlite
        .query(
          `SELECT w.*,
            (SELECT COUNT(*) FROM steps s WHERE s.workflow_id = w.id) AS step_count,
            (SELECT COUNT(*) FROM steps s
             WHERE s.workflow_id = w.id AND s.enabled = 1) AS active_step_count,
            (SELECT r.status FROM runs r
             WHERE r.workflow_id = w.id
             ORDER BY r.created_at DESC LIMIT 1) AS recent_run_status
           FROM workflows w WHERE w.project_id = ?
           ORDER BY w.updated_at DESC`,
        )
        .all(projectId) as AnyRow[]
    ).map(asWorkflow);
  }

  getWorkflow(workflowId: string): (Workflow & { steps: Step[] }) | null {
    const row = this.sqlite
      .query("SELECT * FROM workflows WHERE id = ?")
      .get(workflowId) as AnyRow | null;
    if (!row) return null;
    const steps = (
      this.sqlite
        .query("SELECT * FROM steps WHERE workflow_id = ? ORDER BY position")
        .all(workflowId) as AnyRow[]
    ).map(asStep);
    return { ...asWorkflow(row), steps };
  }

  createWorkflow(projectId: string, input: { name: string; description?: string }) {
    if (!this.getProject(projectId)) {
      throw new AppError("프로젝트를 찾을 수 없습니다.", 404, "not_found");
    }
    const workflowId = id();
    const timestamp = now();
    this.sqlite
      .query(
        `INSERT INTO workflows
         (id, project_id, name, description, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        workflowId,
        projectId,
        input.name,
        input.description ?? "",
        timestamp,
        timestamp,
      );
    return this.getWorkflow(workflowId)!;
  }

  updateWorkflow(
    workflowId: string,
    input: Partial<Pick<Workflow, "name" | "description">>,
  ) {
    const current = this.getWorkflow(workflowId);
    if (!current) throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
    this.sqlite
      .query(
        "UPDATE workflows SET name = ?, description = ?, updated_at = ? WHERE id = ?",
      )
      .run(
        input.name ?? current.name,
        input.description ?? current.description,
        now(),
        workflowId,
      );
    return this.getWorkflow(workflowId)!;
  }

  deleteWorkflow(workflowId: string) {
    const result = this.sqlite
      .query("DELETE FROM workflows WHERE id = ?")
      .run(workflowId);
    if (!result.changes) {
      throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
    }
  }

  createStep(
    workflowId: string,
    input: {
      name: string;
      command: string;
      workingDirectory?: string;
      timeoutSeconds?: number | null;
      inputPrompt?: string;
      inputSensitive?: boolean;
      enabled?: boolean;
    },
  ) {
    if (!this.getWorkflow(workflowId)) {
      throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
    }
    const next = this.sqlite
      .query("SELECT COALESCE(MAX(position), 0) + 1 AS position FROM steps WHERE workflow_id = ?")
      .get(workflowId) as { position: number };
    const stepId = id();
    this.sqlite
      .query(
        `INSERT INTO steps
         (id, workflow_id, name, command, position, working_directory,
          timeout_seconds, input_prompt, input_sensitive, enabled)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        stepId,
        workflowId,
        input.name,
        input.command,
        next.position,
        input.workingDirectory ?? "",
        input.timeoutSeconds ?? null,
        input.inputPrompt ?? "",
        input.inputSensitive === false ? 0 : 1,
        input.enabled === false ? 0 : 1,
      );
    this.touchWorkflow(workflowId);
    return this.getStep(stepId)!;
  }

  getStep(stepId: string): Step | null {
    const row = this.sqlite
      .query("SELECT * FROM steps WHERE id = ?")
      .get(stepId) as AnyRow | null;
    return row ? asStep(row) : null;
  }

  updateStep(
    stepId: string,
    input: Partial<
      Pick<
        Step,
        | "name"
        | "command"
        | "workingDirectory"
        | "timeoutSeconds"
        | "inputPrompt"
        | "inputSensitive"
        | "enabled"
      >
    >,
  ) {
    const current = this.getStep(stepId);
    if (!current) throw new AppError("단계를 찾을 수 없습니다.", 404, "not_found");
    this.sqlite
      .query(
        `UPDATE steps SET
           name = ?, command = ?, working_directory = ?, timeout_seconds = ?,
           input_prompt = ?, input_sensitive = ?, enabled = ?
         WHERE id = ?`,
      )
      .run(
        input.name ?? current.name,
        input.command ?? current.command,
        input.workingDirectory ?? current.workingDirectory,
        input.timeoutSeconds === undefined
          ? current.timeoutSeconds
          : input.timeoutSeconds,
        input.inputPrompt ?? current.inputPrompt,
        (input.inputSensitive ?? current.inputSensitive) ? 1 : 0,
        (input.enabled ?? current.enabled) ? 1 : 0,
        stepId,
      );
    this.touchWorkflow(current.workflowId);
    return this.getStep(stepId)!;
  }

  deleteStep(stepId: string) {
    const current = this.getStep(stepId);
    if (!current) throw new AppError("단계를 찾을 수 없습니다.", 404, "not_found");
    const transaction = this.sqlite.transaction(() => {
      this.sqlite.query("DELETE FROM steps WHERE id = ?").run(stepId);
      const remaining = this.sqlite
        .query("SELECT id FROM steps WHERE workflow_id = ? ORDER BY position")
        .all(current.workflowId) as { id: string }[];
      this.reposition(current.workflowId, remaining.map((row) => row.id));
      this.touchWorkflow(current.workflowId);
    });
    transaction();
  }

  reorderSteps(workflowId: string, stepIds: string[]) {
    const current = this.getWorkflow(workflowId);
    if (!current) throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
    const existing = current.steps.map((step) => step.id);
    if (
      existing.length !== stepIds.length ||
      existing.some((stepId) => !stepIds.includes(stepId)) ||
      new Set(stepIds).size !== stepIds.length
    ) {
      throw new AppError("단계 순서 목록이 현재 워크플로우와 일치하지 않습니다.");
    }
    const transaction = this.sqlite.transaction(() => {
      this.reposition(workflowId, stepIds);
      this.touchWorkflow(workflowId);
    });
    transaction();
    return this.getWorkflow(workflowId)!;
  }

  private reposition(workflowId: string, stepIds: string[]) {
    for (let index = 0; index < stepIds.length; index++) {
      this.sqlite
        .query("UPDATE steps SET position = ? WHERE id = ? AND workflow_id = ?")
        .run(-(index + 1), stepIds[index], workflowId);
    }
    for (let index = 0; index < stepIds.length; index++) {
      this.sqlite
        .query("UPDATE steps SET position = ? WHERE id = ? AND workflow_id = ?")
        .run(index + 1, stepIds[index], workflowId);
    }
  }

  private touchWorkflow(workflowId: string) {
    this.sqlite
      .query("UPDATE workflows SET updated_at = ? WHERE id = ?")
      .run(now(), workflowId);
  }

  createRun(workflowId: string): RunDetail {
    const workflow = this.getWorkflow(workflowId);
    if (!workflow) throw new AppError("워크플로우를 찾을 수 없습니다.", 404, "not_found");
    const activeSteps = workflow.steps.filter((step) => step.enabled);
    if (!activeSteps.length) {
      throw new AppError(
        "활성화된 단계를 하나 이상 추가해 주세요.",
        409,
        "no_active_steps",
      );
    }
    const project = this.getProject(workflow.projectId)!;
    const runId = id();
    const createdAt = now();

    const transaction = this.sqlite.transaction(() => {
      const active = this.sqlite
        .query(
          `SELECT id FROM runs
           WHERE project_id = ? AND status IN ('queued', 'running', 'waiting_input') LIMIT 1`,
        )
        .get(project.id) as { id: string } | null;
      if (active) {
        throw new AppError(
          "이 프로젝트에서 이미 워크플로우가 실행 중입니다.",
          409,
          "project_busy",
        );
      }
      this.sqlite
        .query(
          `INSERT INTO runs
           (id, project_id, workflow_id, workflow_name, status, created_at)
           VALUES (?, ?, ?, ?, 'queued', ?)`,
        )
        .run(runId, project.id, workflow.id, workflow.name, createdAt);
      const insertStepRun = this.sqlite.query(
        `INSERT INTO step_runs
         (id, run_id, step_id, step_name, command, position,
          working_directory, timeout_seconds, input_prompt, input_sensitive, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'queued')`,
      );
      for (const step of activeSteps) {
        insertStepRun.run(
          id(),
          runId,
          step.id,
          step.name,
          step.command,
          step.position,
          step.workingDirectory,
          step.timeoutSeconds,
          step.inputPrompt,
          step.inputSensitive ? 1 : 0,
        );
      }
    });
    transaction();
    return this.getRun(runId)!;
  }

  listRuns(options: { projectId?: string; limit?: number } = {}): Run[] {
    const limit = Math.min(Math.max(options.limit ?? 30, 1), 100);
    const rows = options.projectId
      ? this.sqlite
          .query(
            "SELECT * FROM runs WHERE project_id = ? ORDER BY created_at DESC LIMIT ?",
          )
          .all(options.projectId, limit)
      : this.sqlite
          .query("SELECT * FROM runs ORDER BY created_at DESC LIMIT ?")
          .all(limit);
    return (rows as AnyRow[]).map(asRun);
  }

  hasActiveProjectRun(projectId: string) {
    return Boolean(
      this.sqlite
        .query(
          `SELECT 1 AS active FROM runs
           WHERE project_id = ? AND status IN ('queued', 'running', 'waiting_input') LIMIT 1`,
        )
        .get(projectId),
    );
  }

  getRun(runId: string): RunDetail | null {
    const row = this.sqlite
      .query(
        `SELECT r.*, p.name AS project_name, p.root_directory
         FROM runs r JOIN projects p ON p.id = r.project_id
         WHERE r.id = ?`,
      )
      .get(runId) as AnyRow | null;
    if (!row) return null;
    const steps = (
      this.sqlite
        .query("SELECT * FROM step_runs WHERE run_id = ? ORDER BY position")
        .all(runId) as AnyRow[]
    ).map(asStepRun);
    return {
      ...asRun(row),
      projectName: String(row.project_name),
      rootDirectory: String(row.root_directory),
      steps,
      pendingInput: this.getPendingInput(runId),
    };
  }

  updateRun(
    runId: string,
    input: {
      status?: RunStatus;
      startedAt?: string | null;
      finishedAt?: string | null;
      currentStepId?: string | null;
      exitCode?: number | null;
    },
  ) {
    const current = this.getRun(runId);
    if (!current) throw new AppError("실행을 찾을 수 없습니다.", 404, "not_found");
    this.sqlite
      .query(
        `UPDATE runs SET
          status = ?, started_at = ?, finished_at = ?,
          current_step_id = ?, exit_code = ?
         WHERE id = ?`,
      )
      .run(
        input.status ?? current.status,
        input.startedAt === undefined ? current.startedAt : input.startedAt,
        input.finishedAt === undefined ? current.finishedAt : input.finishedAt,
        input.currentStepId === undefined
          ? current.currentStepId
          : input.currentStepId,
        input.exitCode === undefined ? current.exitCode : input.exitCode,
        runId,
      );
  }

  updateStepRun(
    stepRunId: string,
    input: {
      status: StepRunStatus;
      startedAt?: string | null;
      finishedAt?: string | null;
      exitCode?: number | null;
    },
  ) {
    const current = this.sqlite
      .query("SELECT * FROM step_runs WHERE id = ?")
      .get(stepRunId) as AnyRow | null;
    if (!current) throw new AppError("단계 실행을 찾을 수 없습니다.", 404, "not_found");
    this.sqlite
      .query(
        `UPDATE step_runs SET
          status = ?, started_at = ?, finished_at = ?, exit_code = ?
         WHERE id = ?`,
      )
      .run(
        input.status,
        input.startedAt === undefined ? current.started_at : input.startedAt,
        input.finishedAt === undefined ? current.finished_at : input.finishedAt,
        input.exitCode === undefined ? current.exit_code : input.exitCode,
        stepRunId,
      );
  }

  updateRemainingSteps(runId: string, status: StepRunStatus) {
    this.sqlite
      .query(
        `UPDATE step_runs SET status = ?, finished_at = ?
         WHERE run_id = ? AND status IN ('queued', 'waiting_input')`,
      )
      .run(status, now(), runId);
  }

  createInputRequest(
    runId: string,
    stepRunId: string,
    prompt: string,
    sensitive: boolean,
  ): InputRequest {
    const existing = this.sqlite
      .query(
        `SELECT * FROM input_requests
         WHERE run_id = ? AND step_run_id = ? AND status = 'pending'`,
      )
      .get(runId, stepRunId) as AnyRow | null;
    if (existing) return asInputRequest(existing);
    const requestId = id();
    const requestedAt = now();
    this.sqlite
      .query(
        `INSERT INTO input_requests
         (id, run_id, step_run_id, prompt, sensitive, status, requested_at)
         VALUES (?, ?, ?, ?, ?, 'pending', ?)`,
      )
      .run(requestId, runId, stepRunId, prompt, sensitive ? 1 : 0, requestedAt);
    return this.getPendingInput(runId)!;
  }

  getPendingInput(runId: string): InputRequest | null {
    const row = this.sqlite
      .query(
        `SELECT * FROM input_requests
         WHERE run_id = ? AND status = 'pending'
         ORDER BY requested_at DESC LIMIT 1`,
      )
      .get(runId) as AnyRow | null;
    return row ? asInputRequest(row) : null;
  }

  answerInputRequest(runId: string, requestId: string): InputRequest {
    const transaction = this.sqlite.transaction(() => {
      const row = this.sqlite
        .query(
          `SELECT ir.* FROM input_requests ir
           JOIN runs r ON r.id = ir.run_id
           WHERE ir.id = ? AND ir.run_id = ? AND ir.status = 'pending'
             AND r.status = 'waiting_input'`,
        )
        .get(requestId, runId) as AnyRow | null;
      if (!row) {
        throw new AppError(
          "이미 처리되었거나 유효하지 않은 입력 요청입니다.",
          409,
          "input_not_pending",
        );
      }
      const answeredAt = now();
      this.sqlite
        .query(
          "UPDATE input_requests SET status = 'answered', answered_at = ? WHERE id = ?",
        )
        .run(answeredAt, requestId);
      this.sqlite
        .query(
          "UPDATE step_runs SET status = 'queued' WHERE id = ? AND status = 'waiting_input'",
        )
        .run(String(row.step_run_id));
      this.sqlite
        .query(
          "UPDATE runs SET status = 'queued' WHERE id = ? AND status = 'waiting_input'",
        )
        .run(runId);
      return asInputRequest(row);
    });
    return transaction();
  }

  cancelPendingInputRequests(runId: string) {
    this.sqlite
      .query(
        `UPDATE input_requests SET status = 'canceled', answered_at = ?
         WHERE run_id = ? AND status = 'pending'`,
      )
      .run(now(), runId);
  }

  appendLog(
    runId: string,
    stepRunId: string | null,
    stream: RunLog["stream"],
    content: string,
  ): RunLog {
    const createdAt = now();
    const result = this.sqlite
      .query(
        `INSERT INTO run_logs
         (run_id, step_run_id, stream, content, created_at)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .run(runId, stepRunId, stream, content, createdAt);
    return {
      seq: Number(result.lastInsertRowid),
      runId,
      stepRunId,
      stream,
      content,
      createdAt,
    };
  }

  getLogs(runId: string, after = 0, limit = 5000): RunLog[] {
    return (
      this.sqlite
        .query(
          `SELECT * FROM run_logs
           WHERE run_id = ? AND seq > ? ORDER BY seq LIMIT ?`,
        )
        .all(runId, after, Math.min(Math.max(limit, 1), 10000)) as AnyRow[]
    ).map((row) => ({
      seq: Number(row.seq),
      runId: String(row.run_id),
      stepRunId: row.step_run_id === null ? null : String(row.step_run_id),
      stream: row.stream as RunLog["stream"],
      content: String(row.content),
      createdAt: String(row.created_at),
    }));
  }
}
