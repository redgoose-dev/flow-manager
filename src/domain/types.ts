export type RunStatus =
  | "queued"
  | "running"
  | "waiting_input"
  | "succeeded"
  | "failed"
  | "canceled"
  | "interrupted";

export type StepRunStatus =
  | "queued"
  | "running"
  | "waiting_input"
  | "succeeded"
  | "failed"
  | "canceled"
  | "skipped"
  | "interrupted";

export interface Project {
  id: string;
  name: string;
  description: string;
  rootDirectory: string;
  createdAt: string;
  updatedAt: string;
  recentRunStatus?: RunStatus | null;
}

export interface Workflow {
  id: string;
  projectId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  stepCount?: number;
  activeStepCount?: number;
  recentRunStatus?: RunStatus | null;
}

export interface Step {
  id: string;
  workflowId: string;
  name: string;
  command: string;
  position: number;
  workingDirectory: string;
  timeoutSeconds: number | null;
  inputPrompt: string;
  inputSensitive: boolean;
  enabled: boolean;
}

export interface Run {
  id: string;
  projectId: string;
  workflowId: string | null;
  workflowName: string;
  status: RunStatus;
  startedAt: string | null;
  finishedAt: string | null;
  currentStepId: string | null;
  exitCode: number | null;
  createdAt: string;
}

export interface StepRun {
  id: string;
  runId: string;
  stepId: string | null;
  stepName: string;
  command: string;
  position: number;
  workingDirectory: string;
  timeoutSeconds: number | null;
  inputPrompt: string;
  inputSensitive: boolean;
  status: StepRunStatus;
  startedAt: string | null;
  finishedAt: string | null;
  exitCode: number | null;
}

export interface InputRequest {
  id: string;
  runId: string;
  stepRunId: string;
  prompt: string;
  sensitive: boolean;
  requestedAt: string;
}

export interface RunLog {
  seq: number;
  runId: string;
  stepRunId: string | null;
  stream: "stdout" | "stderr" | "system";
  content: string;
  createdAt: string;
}

export interface RunDetail extends Run {
  projectName: string;
  rootDirectory: string;
  steps: StepRun[];
  pendingInput: InputRequest | null;
}

export interface AuthUser {
  id: string;
  username: string;
  displayName: string;
  webauthnUserId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PasskeyCredential {
  id: string;
  userId: string;
  publicKey: Uint8Array;
  counter: number;
  deviceType: "singleDevice" | "multiDevice";
  backedUp: boolean;
  transports: string[];
  name: string;
  createdAt: string;
  lastUsedAt: string | null;
}

export interface AuthSession {
  tokenHash: string;
  userId: string;
  csrfToken: string;
  createdAt: string;
  expiresAt: string;
}

export class AppError extends Error {
  constructor(
    message: string,
    public readonly status = 400,
    public readonly code = "bad_request",
  ) {
    super(message);
  }
}
