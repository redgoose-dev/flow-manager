import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
  type AuthenticationResponseJSON,
  type AuthenticatorTransportFuture,
  type RegistrationResponseJSON,
} from "@simplewebauthn/server";
import type { AppDatabase } from "../db/database";
import type { AuthSession, AuthUser, PasskeyCredential } from "../domain/types";
import { AppError } from "../domain/types";

const SESSION_COOKIE = "workflow_manager_session";
const CHALLENGE_TTL_MS = 5 * 60 * 1000;
const SETUP_TTL_MS = 15 * 60 * 1000;
const SESSION_TTL_HOUR_MS = 60 * 60 * 1000;
export const DEFAULT_SESSION_TTL_MS = 12 * SESSION_TTL_HOUR_MS;
const MAX_SESSION_TTL_HOURS = 30 * 24;

type RegistrationFlow = {
  challenge: string;
  expiresAt: number;
  displayName: string;
  passkeyName: string;
  webauthnUserId: string;
  userId: string | null;
  setup: boolean;
};

type AuthenticationFlow = {
  challenge: string;
  expiresAt: number;
};

export type AuthContext = {
  session: AuthSession;
  user: AuthUser;
};

export type PasskeyAuthConfig = {
  rpID: string;
  rpName: string;
  expectedOrigin: string;
  sessionTtlMs?: number;
};

export type IssuedSession = {
  token: string;
  csrfToken: string;
  expiresAt: string;
  cookie: string;
};

export function parseSessionTtlHours(value: string | undefined) {
  if (value === undefined || value.trim() === "") {
    return DEFAULT_SESSION_TTL_MS;
  }
  if (!/^\d+$/.test(value.trim())) {
    throw new Error(
      "WORKFLOW_MANAGER_SESSION_TTL_HOURS는 1에서 720 사이의 정수여야 합니다.",
    );
  }
  const hours = Number(value.trim());
  if (hours < 1 || hours > MAX_SESSION_TTL_HOURS) {
    throw new Error(
      "WORKFLOW_MANAGER_SESSION_TTL_HOURS는 1에서 720 사이의 정수여야 합니다.",
    );
  }
  return hours * SESSION_TTL_HOUR_MS;
}

function randomToken(bytes = 32) {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(bytes))).toString(
    "base64url",
  );
}

function sha256(value: string) {
  return new Bun.CryptoHasher("sha256").update(value).digest("hex");
}

function cleanLabel(value: unknown, label: string, max = 80) {
  if (typeof value !== "string" || !value.trim()) {
    throw new AppError(`${label}을(를) 입력해 주세요.`);
  }
  const cleaned = value.trim();
  if (cleaned.length > max) {
    throw new AppError(`${label}이(가) 너무 깁니다.`);
  }
  return cleaned;
}

function parseCookie(request: Request, name: string) {
  const cookie = request.headers.get("cookie");
  if (!cookie) return null;
  for (const part of cookie.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0) continue;
    if (part.slice(0, separator).trim() === name) {
      return part.slice(separator + 1).trim();
    }
  }
  return null;
}

function publicPasskey(credential: PasskeyCredential) {
  return {
    id: credential.id,
    name: credential.name,
    deviceType: credential.deviceType,
    backedUp: credential.backedUp,
    transports: credential.transports,
    createdAt: credential.createdAt,
    lastUsedAt: credential.lastUsedAt,
  };
}

function transportList(value: string[]): AuthenticatorTransportFuture[] {
  const allowed = new Set([
    "ble",
    "cable",
    "hybrid",
    "internal",
    "nfc",
    "smart-card",
    "usb",
  ]);
  return value.filter((item) => allowed.has(item)) as AuthenticatorTransportFuture[];
}

export function validatePasskeyConfig(config: PasskeyAuthConfig) {
  let origin: URL;
  try {
    origin = new URL(config.expectedOrigin);
  } catch {
    throw new Error("WORKFLOW_MANAGER_ORIGIN은 올바른 URL이어야 합니다.");
  }
  if (origin.origin !== config.expectedOrigin || origin.username || origin.password) {
    throw new Error(
      "WORKFLOW_MANAGER_ORIGIN은 경로가 없는 정확한 origin이어야 합니다.",
    );
  }
  if (origin.protocol !== "https:" && origin.hostname !== "localhost") {
    throw new Error(
      "패스키 origin은 HTTPS여야 하며, HTTP는 localhost에서만 허용됩니다.",
    );
  }
  if (
    !config.rpID ||
    config.rpID.includes("://") ||
    config.rpID.includes(":") ||
    (origin.hostname !== config.rpID &&
      !origin.hostname.endsWith(`.${config.rpID}`))
  ) {
    throw new Error(
      "WORKFLOW_MANAGER_RP_ID는 origin 호스트와 같거나 그 상위 도메인이어야 합니다.",
    );
  }
  return {
    ...config,
    expectedOrigin: origin.origin,
    secureCookie: origin.protocol === "https:",
  };
}

export class PasskeyAuth {
  readonly config: ReturnType<typeof validatePasskeyConfig>;
  private readonly db: AppDatabase;
  private readonly registrations = new Map<string, RegistrationFlow>();
  private readonly authentications = new Map<string, AuthenticationFlow>();
  private setupTokenValue: string | null;
  private setupTokenHash: string | null;
  private setupExpiresAt = 0;

  constructor(
    db: AppDatabase,
    config: PasskeyAuthConfig,
    options: { setupToken?: string; now?: number } = {},
  ) {
    this.db = db;
    this.config = validatePasskeyConfig(config);
    if (!db.hasAuthUser()) {
      this.setupTokenValue = options.setupToken ?? randomToken();
      this.setupTokenHash = sha256(this.setupTokenValue);
      this.setupExpiresAt = (options.now ?? Date.now()) + SETUP_TTL_MS;
    } else {
      this.setupTokenValue = null;
      this.setupTokenHash = null;
    }
    this.db.deleteExpiredAuthSessions();
  }

  get setupToken() {
    return this.setupTokenValue;
  }

  get setupTokenExpiresAt() {
    return this.setupTokenValue
      ? new Date(this.setupExpiresAt).toISOString()
      : null;
  }

  private purgeChallenges() {
    const timestamp = Date.now();
    for (const [flowId, flow] of this.registrations) {
      if (flow.expiresAt <= timestamp) this.registrations.delete(flowId);
    }
    for (const [flowId, flow] of this.authentications) {
      if (flow.expiresAt <= timestamp) this.authentications.delete(flowId);
    }
  }

  private async verifyRegistration(
    response: RegistrationResponseJSON,
    challenge: string,
  ) {
    try {
      return await verifyRegistrationResponse({
        response,
        expectedChallenge: challenge,
        expectedOrigin: this.config.expectedOrigin,
        expectedRPID: this.config.rpID,
        requireUserVerification: true,
      });
    } catch {
      throw new AppError(
        "패스키 응답을 확인할 수 없습니다. 등록을 다시 시작해 주세요.",
        400,
        "verification_failed",
      );
    }
  }

  private async verifyAuthentication(
    response: AuthenticationResponseJSON,
    challenge: string,
    credential: PasskeyCredential,
  ) {
    try {
      return await verifyAuthenticationResponse({
        response,
        expectedChallenge: challenge,
        expectedOrigin: this.config.expectedOrigin,
        expectedRPID: this.config.rpID,
        credential: {
          id: credential.id,
          publicKey: credential.publicKey,
          counter: credential.counter,
          transports: transportList(credential.transports),
        },
        requireUserVerification: true,
      });
    } catch {
      throw new AppError(
        "패스키 응답을 확인할 수 없습니다. 로그인을 다시 시작해 주세요.",
        401,
        "verification_failed",
      );
    }
  }

  private assertSetupToken(token: unknown) {
    if (this.db.hasAuthUser()) {
      throw new AppError(
        "관리자 설정이 이미 완료되었습니다.",
        409,
        "setup_complete",
      );
    }
    if (
      typeof token !== "string" ||
      !this.setupTokenHash ||
      Date.now() >= this.setupExpiresAt ||
      sha256(token) !== this.setupTokenHash
    ) {
      throw new AppError(
        "최초 설정 토큰이 올바르지 않거나 만료되었습니다. 서버를 다시 시작해 주세요.",
        403,
        "invalid_setup_token",
      );
    }
  }

  private registrationFlow(flowId: unknown) {
    this.purgeChallenges();
    if (typeof flowId !== "string") {
      throw new AppError("등록 흐름 ID가 필요합니다.");
    }
    const flow = this.registrations.get(flowId);
    this.registrations.delete(flowId);
    if (!flow) {
      throw new AppError(
        "패스키 등록 요청이 만료되었습니다. 다시 시도해 주세요.",
        400,
        "challenge_expired",
      );
    }
    return flow;
  }

  private authenticationFlow(flowId: unknown) {
    this.purgeChallenges();
    if (typeof flowId !== "string") {
      throw new AppError("로그인 흐름 ID가 필요합니다.");
    }
    const flow = this.authentications.get(flowId);
    this.authentications.delete(flowId);
    if (!flow) {
      throw new AppError(
        "로그인 요청이 만료되었습니다. 다시 시도해 주세요.",
        400,
        "challenge_expired",
      );
    }
    return flow;
  }

  assertTrustedOrigin(request: Request) {
    const origin = request.headers.get("origin");
    if (origin !== this.config.expectedOrigin) {
      throw new AppError(
        "허용된 서비스 주소에서 보낸 요청이 아닙니다.",
        403,
        "origin_forbidden",
      );
    }
  }

  sessionFromRequest(request: Request): AuthContext | null {
    const token = parseCookie(request, SESSION_COOKIE);
    if (!token) return null;
    const session = this.db.getAuthSession(sha256(token));
    if (!session) return null;
    const user = this.db.getAuthUserById(session.userId);
    return user ? { session, user } : null;
  }

  requireSession(request: Request): AuthContext {
    const context = this.sessionFromRequest(request);
    if (!context) {
      throw new AppError("패스키로 로그인해 주세요.", 401, "unauthorized");
    }
    return context;
  }

  assertCsrf(request: Request, context: AuthContext) {
    this.assertTrustedOrigin(request);
    if (request.headers.get("x-csrf-token") !== context.session.csrfToken) {
      throw new AppError(
        "요청 보안 토큰이 올바르지 않습니다. 다시 로그인해 주세요.",
        403,
        "csrf_forbidden",
      );
    }
  }

  status(request: Request) {
    const context = this.sessionFromRequest(request);
    return {
      configured: this.db.hasAuthUser(),
      authenticated: Boolean(context),
      user: context
        ? { id: context.user.id, displayName: context.user.displayName }
        : null,
      csrfToken: context?.session.csrfToken ?? null,
    };
  }

  async beginSetup(input: {
    setupToken?: unknown;
    displayName?: unknown;
    passkeyName?: unknown;
  }) {
    this.assertSetupToken(input.setupToken);
    const displayName = cleanLabel(input.displayName, "관리자 이름");
    const passkeyName = cleanLabel(
      input.passkeyName ?? "첫 번째 패스키",
      "패스키 이름",
    );
    const userID = crypto.getRandomValues(new Uint8Array(32));
    const options = await generateRegistrationOptions({
      rpName: this.config.rpName,
      rpID: this.config.rpID,
      userName: "admin",
      userDisplayName: displayName,
      userID,
      attestationType: "none",
      timeout: 60_000,
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "required",
      },
    });
    const flowId = randomToken(24);
    this.registrations.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
      displayName,
      passkeyName,
      webauthnUserId: options.user.id,
      userId: null,
      setup: true,
    });
    return { flowId, options };
  }

  async finishSetup(input: {
    setupToken?: unknown;
    flowId?: unknown;
    response?: unknown;
  }) {
    this.assertSetupToken(input.setupToken);
    const flow = this.registrationFlow(input.flowId);
    if (!flow.setup) {
      throw new AppError("올바른 최초 등록 요청이 아닙니다.");
    }
    const verification = await this.verifyRegistration(
      input.response as RegistrationResponseJSON,
      flow.challenge,
    );
    if (!verification.verified) {
      throw new AppError("패스키를 확인하지 못했습니다.", 400, "verification_failed");
    }
    const info = verification.registrationInfo;
    const response = input.response as RegistrationResponseJSON;
    const result = this.db.createAuthUserWithPasskey(
      {
        username: "admin",
        displayName: flow.displayName,
        webauthnUserId: flow.webauthnUserId,
      },
      {
        id: info.credential.id,
        publicKey: info.credential.publicKey,
        counter: info.credential.counter,
        deviceType: info.credentialDeviceType,
        backedUp: info.credentialBackedUp,
        transports:
          info.credential.transports ??
          transportList(response.response.transports ?? []),
        name: flow.passkeyName,
      },
    );
    this.setupTokenValue = null;
    this.setupTokenHash = null;
    return {
      user: {
        id: result.user.id,
        displayName: result.user.displayName,
      },
      session: this.issueSession(result.user.id),
    };
  }

  async beginLogin() {
    if (!this.db.hasAuthUser()) {
      throw new AppError(
        "먼저 관리자 패스키를 등록해 주세요.",
        409,
        "setup_required",
      );
    }
    const options = await generateAuthenticationOptions({
      rpID: this.config.rpID,
      timeout: 60_000,
      userVerification: "required",
    });
    const flowId = randomToken(24);
    this.authentications.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
    });
    return { flowId, options };
  }

  async finishLogin(input: { flowId?: unknown; response?: unknown }) {
    const flow = this.authenticationFlow(input.flowId);
    const response = input.response as AuthenticationResponseJSON;
    const credential = this.db.getPasskey(response?.id);
    if (!credential) {
      throw new AppError(
        "등록되지 않은 패스키입니다.",
        401,
        "unknown_passkey",
      );
    }
    const user = this.db.getAuthUserById(credential.userId);
    if (!user) {
      throw new AppError("관리자를 찾을 수 없습니다.", 401, "unauthorized");
    }
    if (
      response.response.userHandle &&
      response.response.userHandle !== user.webauthnUserId
    ) {
      throw new AppError(
        "패스키 사용자 정보가 일치하지 않습니다.",
        401,
        "verification_failed",
      );
    }
    const verification = await this.verifyAuthentication(
      response,
      flow.challenge,
      credential,
    );
    if (!verification.verified) {
      throw new AppError("패스키를 확인하지 못했습니다.", 401, "verification_failed");
    }
    this.db.updatePasskeyUsage(credential.id, {
      counter: verification.authenticationInfo.newCounter,
      deviceType: verification.authenticationInfo.credentialDeviceType,
      backedUp: verification.authenticationInfo.credentialBackedUp,
    });
    return {
      user: { id: user.id, displayName: user.displayName },
      session: this.issueSession(user.id),
    };
  }

  async beginAddPasskey(
    context: AuthContext,
    input: { passkeyName?: unknown },
  ) {
    const passkeyName = cleanLabel(input.passkeyName, "패스키 이름");
    const credentials = this.db.listPasskeys(context.user.id);
    const options = await generateRegistrationOptions({
      rpName: this.config.rpName,
      rpID: this.config.rpID,
      userName: context.user.username,
      userDisplayName: context.user.displayName,
      userID: Buffer.from(context.user.webauthnUserId, "base64url"),
      attestationType: "none",
      timeout: 60_000,
      excludeCredentials: credentials.map((credential) => ({
        id: credential.id,
        transports: transportList(credential.transports),
      })),
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "required",
      },
    });
    const flowId = randomToken(24);
    this.registrations.set(flowId, {
      challenge: options.challenge,
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
      displayName: context.user.displayName,
      passkeyName,
      webauthnUserId: context.user.webauthnUserId,
      userId: context.user.id,
      setup: false,
    });
    return { flowId, options };
  }

  async finishAddPasskey(
    context: AuthContext,
    input: { flowId?: unknown; response?: unknown },
  ) {
    const flow = this.registrationFlow(input.flowId);
    if (flow.setup || flow.userId !== context.user.id) {
      throw new AppError("올바른 패스키 등록 요청이 아닙니다.");
    }
    const verification = await this.verifyRegistration(
      input.response as RegistrationResponseJSON,
      flow.challenge,
    );
    if (!verification.verified) {
      throw new AppError("패스키를 확인하지 못했습니다.", 400, "verification_failed");
    }
    const info = verification.registrationInfo;
    const response = input.response as RegistrationResponseJSON;
    const passkey = this.db.addPasskey(context.user.id, {
      id: info.credential.id,
      publicKey: info.credential.publicKey,
      counter: info.credential.counter,
      deviceType: info.credentialDeviceType,
      backedUp: info.credentialBackedUp,
      transports:
        info.credential.transports ??
        transportList(response.response.transports ?? []),
      name: flow.passkeyName,
    });
    return { passkey: publicPasskey(passkey) };
  }

  listPasskeys(context: AuthContext) {
    return {
      passkeys: this.db.listPasskeys(context.user.id).map(publicPasskey),
    };
  }

  deletePasskey(context: AuthContext, credentialId: string) {
    this.db.deletePasskey(context.user.id, credentialId);
  }

  issueSession(userId: string): IssuedSession {
    this.db.deleteExpiredAuthSessions();
    const token = randomToken();
    const csrfToken = randomToken();
    const createdAt = new Date().toISOString();
    const sessionTtlMs = this.config.sessionTtlMs ?? DEFAULT_SESSION_TTL_MS;
    const expiresAt = new Date(Date.now() + sessionTtlMs).toISOString();
    this.db.createAuthSession({
      tokenHash: sha256(token),
      userId,
      csrfToken,
      createdAt,
      expiresAt,
    });
    const secure = this.config.secureCookie ? "; Secure" : "";
    return {
      token,
      csrfToken,
      expiresAt,
      cookie: `${SESSION_COOKIE}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${Math.floor(
        sessionTtlMs / 1000,
      )}${secure}`,
    };
  }

  logout(request: Request) {
    const token = parseCookie(request, SESSION_COOKIE);
    if (token) this.db.deleteAuthSession(sha256(token));
    const secure = this.config.secureCookie ? "; Secure" : "";
    return `${SESSION_COOKIE}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${secure}`;
  }
}
