import { AppDatabase } from "../db/database";
import type { RunDetail, RunLog, RunStatus } from "../domain/types";
import { AppError } from "../domain/types";
import { resolveWorkingDirectory } from "../server/validation";

type RunnerEvent =
  | { type: "run"; data: RunDetail }
  | { type: "log"; data: RunLog };

type Subscriber = (event: RunnerEvent) => void;

interface RunControl {
  runId: string;
  projectId: string;
  canceled: boolean;
  timedOut: boolean;
  finalized: boolean;
  cancelTimer: ReturnType<typeof setTimeout> | null;
  outputAbortController: AbortController | null;
  process: ReturnType<typeof Bun.spawn> | null;
}

interface SuppliedInput {
  stepRunId: string;
  value: string;
  sensitive: boolean;
}

const timestamp = () => new Date().toISOString();
const LOG_BATCH_INTERVAL_MS = 100;
const LOG_BATCH_MAX_LENGTH = 16_384;
const CANCELLATION_GRACE_MS = 2_000;

function signalProcess(pid: number, signal: NodeJS.Signals) {
  try {
    process.kill(pid, signal);
    return true;
  } catch {
    // The process may already have exited.
    return false;
  }
}

function childProcessIds(pid: number): number[] {
  if (process.platform === "win32") return [];
  try {
    const result = Bun.spawnSync({
      cmd: ["/usr/bin/pgrep", "-P", String(pid)],
      stdout: "pipe",
      stderr: "ignore",
    });
    return result.stdout
      .toString()
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(Number.isInteger);
  } catch {
    return [];
  }
}

function processTree(pid: number): number[] {
  const children = childProcessIds(pid);
  return children.flatMap((child) => [...processTree(child), child]);
}

function terminateProcessTree(control: RunControl) {
  const subprocess = control.process;
  if (!subprocess) return;
  const groupTerminated =
    process.platform !== "win32" &&
    signalProcess(-subprocess.pid, "SIGTERM");
  const descendants =
    groupTerminated || subprocess.exitCode !== null
      ? []
      : processTree(subprocess.pid);
  if (!groupTerminated) {
    for (const pid of descendants) signalProcess(pid, "SIGTERM");
    if (subprocess.exitCode === null) {
      try {
        subprocess.kill("SIGTERM");
      } catch {
        // The process may already have exited.
      }
    }
  }
  setTimeout(() => {
    if (groupTerminated) {
      signalProcess(-subprocess.pid, "SIGKILL");
    } else {
      for (const pid of descendants) signalProcess(pid, "SIGKILL");
      if (subprocess.exitCode === null) {
        try {
          subprocess.kill("SIGKILL");
        } catch {
          // The process may already have exited.
        }
      }
    }
  }, 750);
}

class SecretRedactor {
  private pending = "";

  constructor(private readonly secret: string) {}

  write(content: string, final = false) {
    this.pending += content;
    let output = "";
    while (this.pending.length >= this.secret.length) {
      if (this.pending.startsWith(this.secret)) {
        output += "[민감한 입력 숨김]";
        this.pending = this.pending.slice(this.secret.length);
      } else {
        output += this.pending[0];
        this.pending = this.pending.slice(1);
      }
    }
    if (final) {
      output += this.pending;
      this.pending = "";
    }
    return output;
  }
}

export class WorkflowRunner {
  private readonly controls = new Map<string, RunControl>();
  private readonly subscribers = new Map<string, Set<Subscriber>>();

  constructor(private readonly db: AppDatabase) {}

  start(workflowId: string) {
    const run = this.db.createRun(workflowId);
    queueMicrotask(() => void this.execute(run.id));
    return run;
  }

  respond(runId: string, requestId: string, value: string) {
    const request = this.db.answerInputRequest(runId, requestId);
    const suppliedInput: SuppliedInput = {
      stepRunId: request.stepRunId,
      value,
      sensitive: request.sensitive,
    };
    this.log(
      runId,
      request.stepRunId,
      "system",
      "[workflow-manager] 입력을 받아 실행을 재개합니다. 입력값은 저장하지 않습니다.\n",
    );
    this.emitRun(runId);
    queueMicrotask(() => void this.execute(runId, suppliedInput));
    return this.db.getRun(runId)!;
  }

  cancel(runId: string) {
    const run = this.db.getRun(runId);
    if (!run) throw new AppError("실행을 찾을 수 없습니다.", 404, "not_found");
    if (run.status === "canceling") return run;
    if (!["queued", "running", "waiting_input"].includes(run.status)) {
      throw new AppError(
        "대기 중이거나 실행 중인 작업만 취소할 수 있습니다.",
        409,
        "run_finished",
      );
    }

    const control = this.controls.get(runId);
    this.db.cancelPendingInputRequests(runId);
    if (control) {
      control.canceled = true;
      this.log(runId, null, "system", "\n[workflow-manager] 취소 요청을 받았습니다.\n");
      if (run.status === "running") {
        this.db.updateRun(runId, { status: "canceling" });
        terminateProcessTree(control);
        this.scheduleCancellation(control);
      } else {
        this.finalizeCanceled(control);
      }
    } else {
      const finishedAt = timestamp();
      this.db.updateRemainingSteps(runId, "canceled");
      this.db.updateRun(runId, {
        status: "canceled",
        finishedAt,
        currentStepId: null,
        exitCode: null,
      });
    }
    this.emitRun(runId);
    return this.db.getRun(runId)!;
  }

  events(runId: string, after = 0) {
    const run = this.db.getRun(runId);
    if (!run) throw new AppError("실행을 찾을 수 없습니다.", 404, "not_found");
    const encoder = new TextEncoder();
    let unsubscribe: (() => void) | null = null;
    let heartbeat: ReturnType<typeof setInterval> | null = null;

    const stream = new ReadableStream({
      start: (controller) => {
        const send = (event: RunnerEvent) => {
          const eventId = event.type === "log" ? `id: ${event.data.seq}\n` : "";
          controller.enqueue(
            encoder.encode(
              `${eventId}event: ${event.type}\ndata: ${JSON.stringify(event.data)}\n\n`,
            ),
          );
        };
        unsubscribe = this.subscribe(runId, send);
        send({ type: "run", data: this.db.getRun(runId)! });
        for (const log of this.db.getLogs(runId, after)) {
          send({ type: "log", data: log });
        }
        heartbeat = setInterval(() => {
          try {
            controller.enqueue(encoder.encode(": heartbeat\n\n"));
          } catch {
            if (heartbeat) clearInterval(heartbeat);
          }
        }, 15_000);
      },
      cancel: () => {
        unsubscribe?.();
        if (heartbeat) clearInterval(heartbeat);
      },
    });

    return new Response(stream, {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
        "x-accel-buffering": "no",
      },
    });
  }

  private subscribe(runId: string, subscriber: Subscriber) {
    let listeners = this.subscribers.get(runId);
    if (!listeners) {
      listeners = new Set();
      this.subscribers.set(runId, listeners);
    }
    listeners.add(subscriber);
    return () => {
      listeners!.delete(subscriber);
      if (!listeners!.size) this.subscribers.delete(runId);
    };
  }

  private emit(runId: string, event: RunnerEvent) {
    for (const subscriber of this.subscribers.get(runId) ?? []) {
      try {
        subscriber(event);
      } catch {
        // A closed browser connection will be cleaned up by stream cancellation.
      }
    }
  }

  private emitRun(runId: string) {
    const run = this.db.getRun(runId);
    if (run) this.emit(runId, { type: "run", data: run });
  }

  private log(
    runId: string,
    stepRunId: string | null,
    stream: RunLog["stream"],
    content: string,
  ) {
    if (!content) return;
    const log = this.db.appendLog(runId, stepRunId, stream, content);
    this.emit(runId, { type: "log", data: log });
  }

  private async consume(
    runId: string,
    stepRunId: string,
    stream: "stdout" | "stderr",
    readable: ReadableStream<Uint8Array> | null,
    secret: string | null = null,
    signal?: AbortSignal,
  ) {
    if (!readable) return;
    const reader = readable.getReader();
    const decoder = new TextDecoder();
    const redactor = secret ? new SecretRedactor(secret) : null;
    let pending = "";
    let flushTimer: ReturnType<typeof setTimeout> | null = null;

    const flush = (final = false) => {
      if (pending || final) {
        const content = pending;
        pending = "";
        const output = redactor ? redactor.write(content, final) : content;
        if (output) this.log(runId, stepRunId, stream, output);
      }
    };

    const scheduleFlush = () => {
      if (flushTimer !== null) return;
      flushTimer = setTimeout(() => {
        flushTimer = null;
        flush();
      }, LOG_BATCH_INTERVAL_MS);
    };

    const cancelReader = () => {
      void reader.cancel().catch(() => undefined);
    };
    if (signal?.aborted) cancelReader();
    else signal?.addEventListener("abort", cancelReader, { once: true });

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const decoded = decoder.decode(value, { stream: true });
        pending += decoded;
        if (pending.length >= LOG_BATCH_MAX_LENGTH) {
          if (flushTimer !== null) clearTimeout(flushTimer);
          flushTimer = null;
          flush();
          await Bun.sleep(0);
        } else {
          scheduleFlush();
        }
      }
      pending += decoder.decode();
      if (flushTimer !== null) clearTimeout(flushTimer);
      flushTimer = null;
      flush(true);
    } catch (error) {
      if (!signal?.aborted) throw error;
    } finally {
      if (flushTimer !== null) clearTimeout(flushTimer);
      signal?.removeEventListener("abort", cancelReader);
      reader.releaseLock();
    }
  }

  private finalizeCanceled(control: RunControl) {
    if (control.finalized) return;
    control.finalized = true;
    if (control.cancelTimer) clearTimeout(control.cancelTimer);
    control.cancelTimer = null;
    control.outputAbortController?.abort();

    const run = this.db.getRun(control.runId);
    if (
      !run ||
      !["queued", "running", "canceling", "waiting_input"].includes(run.status)
    ) {
      return;
    }
    const activeStep =
      run.steps.find(
        (step) =>
          step.stepId === run.currentStepId &&
          ["queued", "running", "waiting_input"].includes(step.status),
      ) ??
      run.steps.find((step) =>
        ["queued", "running", "waiting_input"].includes(step.status),
      );
    if (activeStep) {
      this.db.updateStepRun(activeStep.id, {
        status: "canceled",
        finishedAt: timestamp(),
        exitCode: null,
      });
    }
    this.db.updateRemainingSteps(control.runId, "canceled");
    this.log(
      control.runId,
      null,
      "system",
      "\n[workflow-manager] 프로세스 종료를 기다리지 않고 취소를 확정했습니다.\n",
    );
    this.finishRun(control.runId, "canceled", null);
  }

  private scheduleCancellation(control: RunControl) {
    if (control.cancelTimer) return;
    control.cancelTimer = setTimeout(() => {
      if (!control.canceled || control.finalized) return;
      terminateProcessTree(control);
      this.finalizeCanceled(control);
    }, CANCELLATION_GRACE_MS);
  }

  private finishRun(
    runId: string,
    status: RunStatus,
    exitCode: number | null,
  ) {
    this.db.updateRun(runId, {
      status,
      finishedAt: timestamp(),
      currentStepId: null,
      exitCode,
    });
    this.emitRun(runId);
  }

  private async execute(runId: string, suppliedInput?: SuppliedInput) {
    const run = this.db.getRun(runId);
    if (!run || run.status !== "queued") return;
    const control: RunControl = {
      runId,
      projectId: run.projectId,
      canceled: false,
      timedOut: false,
      finalized: false,
      cancelTimer: null,
      outputAbortController: null,
      process: null,
    };
    this.controls.set(runId, control);

    try {
      this.db.updateRun(runId, {
        status: "running",
        startedAt: run.startedAt ?? timestamp(),
      });
      if (!run.startedAt) {
        this.log(
          runId,
          null,
          "system",
          `[workflow-manager] "${run.workflowName}" 실행을 시작합니다.\n`,
        );
      }
      this.emitRun(runId);

      for (const step of run.steps) {
        if (control.finalized) return;
        if (step.status === "succeeded") continue;
        if (step.status !== "queued") continue;
        if (control.canceled) {
          this.finalizeCanceled(control);
          return;
        }

        const stepInput =
          suppliedInput?.stepRunId === step.id ? suppliedInput : undefined;
        if (step.inputPrompt && !stepInput) {
          const startedAt = step.startedAt ?? timestamp();
          this.db.updateStepRun(step.id, {
            status: "waiting_input",
            startedAt,
          });
          this.db.updateRun(runId, {
            status: "waiting_input",
            currentStepId: step.stepId,
          });
          this.db.createInputRequest(
            runId,
            step.id,
            step.inputPrompt,
            step.inputSensitive,
          );
          this.log(
            runId,
            step.id,
            "system",
            `[workflow-manager] 입력을 기다립니다: ${step.inputPrompt}\n`,
          );
          this.emitRun(runId);
          return;
        }

        const startedAt = step.startedAt ?? timestamp();
        this.db.updateRun(runId, { currentStepId: step.stepId });
        this.db.updateStepRun(step.id, { status: "running", startedAt });
        this.log(
          runId,
          step.id,
          "system",
          `\n[workflow-manager] 단계 ${step.position}: ${step.stepName}\n$ ${step.command}\n`,
        );
        this.emitRun(runId);

        let cwd: string;
        try {
          cwd = resolveWorkingDirectory(run.rootDirectory, step.workingDirectory);
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "작업 경로를 확인할 수 없습니다.";
          this.log(runId, step.id, "system", `[workflow-manager] ${message}\n`);
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt: timestamp(),
            exitCode: 1,
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", 1);
          return;
        }

        if (control.canceled) {
          this.finalizeCanceled(control);
          return;
        }

        control.timedOut = false;
        let timeout: ReturnType<typeof setTimeout> | null = null;
        let exitCode = 1;
        try {
          const subprocess = Bun.spawn({
            cmd: ["/bin/sh", "-lc", step.command],
            cwd,
            env: process.env,
            stdin: stepInput ? "pipe" : "ignore",
            stdout: "pipe",
            stderr: "pipe",
            // Bun supports detached process groups on Unix. Keeping the command
            // in its own group lets cancellation reach children and grandchildren.
            detached: process.platform !== "win32",
          } as Parameters<typeof Bun.spawn>[0] & { detached: boolean });
          control.process = subprocess;
          if (stepInput) {
            const stdin = subprocess.stdin as unknown as {
              write(data: string): number;
              end(): void;
            };
            stdin.write(`${stepInput.value}\n`);
            stdin.end();
          }
          if (step.timeoutSeconds) {
            timeout = setTimeout(() => {
              control.timedOut = true;
              this.log(
                runId,
                step.id,
                "system",
                `\n[workflow-manager] ${step.timeoutSeconds}초 타임아웃을 초과했습니다.\n`,
              );
              terminateProcessTree(control);
            }, step.timeoutSeconds * 1000);
          }
          const outputAbortController = new AbortController();
          control.outputAbortController = outputAbortController;
          const stdout = this.consume(
            runId,
            step.id,
            "stdout",
            subprocess.stdout as ReadableStream<Uint8Array>,
            stepInput?.sensitive ? stepInput.value : null,
            outputAbortController.signal,
          );
          const stderr = this.consume(
            runId,
            step.id,
            "stderr",
            subprocess.stderr as ReadableStream<Uint8Array>,
            stepInput?.sensitive ? stepInput.value : null,
            outputAbortController.signal,
          );
          exitCode = await subprocess.exited;
          await Promise.all([stdout, stderr]);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          this.log(
            runId,
            step.id,
            "system",
            `[workflow-manager] 명령을 시작하지 못했습니다: ${message}\n`,
          );
          exitCode = 1;
        } finally {
          if (timeout) clearTimeout(timeout);
          control.outputAbortController = null;
          control.process = null;
        }
        if (control.finalized) return;
        if (stepInput) stepInput.value = "";
        suppliedInput = undefined;

        const finishedAt = timestamp();
        if (control.canceled) {
          this.finalizeCanceled(control);
          return;
        }
        if (control.timedOut) {
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt,
            exitCode: 124,
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", 124);
          return;
        }
        if (exitCode !== 0) {
          this.log(
            runId,
            step.id,
            "system",
            `\n[workflow-manager] 종료 코드 ${exitCode}로 실패했습니다.\n`,
          );
          this.db.updateStepRun(step.id, {
            status: "failed",
            finishedAt,
            exitCode,
          });
          this.db.updateRemainingSteps(runId, "skipped");
          this.finishRun(runId, "failed", exitCode);
          return;
        }

        this.db.updateStepRun(step.id, {
          status: "succeeded",
          finishedAt,
          exitCode: 0,
        });
        this.emitRun(runId);
      }

      this.log(
        runId,
        null,
        "system",
        "\n[workflow-manager] 모든 단계를 완료했습니다.\n",
      );
      this.finishRun(runId, "succeeded", 0);
    } catch (error) {
      if (control.finalized) return;
      if (control.canceled) {
        this.finalizeCanceled(control);
        return;
      }
      const message = error instanceof Error ? error.message : String(error);
      this.log(
        runId,
        null,
        "system",
        `\n[workflow-manager] 실행 오류: ${message}\n`,
      );
      this.db.updateRemainingSteps(runId, "skipped");
      this.finishRun(runId, control.canceled ? "canceled" : "failed", null);
    } finally {
      if (control.cancelTimer) clearTimeout(control.cancelTimer);
      this.controls.delete(runId);
    }
  }
}
