import { afterEach, describe, expect, test } from "bun:test";
import { AppDatabase } from "../src/db/database";
import { AppError } from "../src/domain/types";
import {
  PasskeyAuth,
  validatePasskeyConfig,
} from "../src/server/passkey-auth";

const databases: AppDatabase[] = [];

function database() {
  const db = new AppDatabase(":memory:");
  databases.push(db);
  return db;
}

function credential(id: string, name: string) {
  return {
    id,
    publicKey: new Uint8Array([1, 2, 3]),
    counter: 0,
    deviceType: "singleDevice" as const,
    backedUp: false,
    transports: ["internal"],
    name,
  };
}

afterEach(() => {
  while (databases.length) databases.pop()!.close();
});

describe("Passkey 인증", () => {
  test("localhost HTTP와 실제 HTTPS origin만 허용한다", () => {
    expect(
      validatePasskeyConfig({
        rpID: "localhost",
        rpName: "FlowManager",
        expectedOrigin: "http://localhost:3000",
      }).secureCookie,
    ).toBe(false);
    expect(
      validatePasskeyConfig({
        rpID: "example.com",
        rpName: "FlowManager",
        expectedOrigin: "https://flow.example.com",
      }).secureCookie,
    ).toBe(true);
    expect(() =>
      validatePasskeyConfig({
        rpID: "192.168.0.10",
        rpName: "FlowManager",
        expectedOrigin: "http://192.168.0.10:3000",
      }),
    ).toThrow("HTTPS");
  });

  test("최초 설정 토큰으로 discoverable passkey 등록 옵션을 만든다", async () => {
    const db = database();
    const auth = new PasskeyAuth(
      db,
      {
        rpID: "localhost",
        rpName: "FlowManager",
        expectedOrigin: "http://localhost:3000",
      },
      { setupToken: "one-time-setup-token" },
    );

    const begin = await auth.beginSetup({
      setupToken: "one-time-setup-token",
      displayName: "관리자",
      passkeyName: "MacBook",
    });

    expect(begin.options.rp.id).toBe("localhost");
    expect(begin.options.authenticatorSelection?.residentKey).toBe("required");
    expect(begin.options.authenticatorSelection?.userVerification).toBe(
      "required",
    );
    expect(begin.options.attestation).toBe("none");
    expect(begin.flowId.length).toBeGreaterThan(20);

    expect(
      auth.beginSetup({
        setupToken: "wrong",
        displayName: "관리자",
        passkeyName: "MacBook",
      }),
    ).rejects.toMatchObject({
      code: "invalid_setup_token",
      status: 403,
    });
  });

  test("여러 패스키를 저장하고 마지막 패스키 삭제를 막는다", () => {
    const db = database();
    const { user } = db.createAuthUserWithPasskey(
      {
        username: "admin",
        displayName: "관리자",
        webauthnUserId: "dGVzdC11c2Vy",
      },
      credential("credential-1", "첫 기기"),
    );
    db.addPasskey(user.id, credential("credential-2", "두 번째 기기"));

    expect(db.listPasskeys(user.id)).toHaveLength(2);
    db.deletePasskey(user.id, "credential-2");
    expect(db.listPasskeys(user.id)).toHaveLength(1);

    try {
      db.deletePasskey(user.id, "credential-1");
      throw new Error("마지막 패스키 삭제가 허용되었습니다.");
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect((error as AppError).code).toBe("last_passkey");
    }
  });

  test("세션 원문 대신 해시를 저장하고 쿠키로 세션을 복원한다", () => {
    const db = database();
    const { user } = db.createAuthUserWithPasskey(
      {
        username: "admin",
        displayName: "관리자",
        webauthnUserId: "dGVzdC11c2Vy",
      },
      credential("credential-1", "기기"),
    );
    const auth = new PasskeyAuth(db, {
      rpID: "localhost",
      rpName: "FlowManager",
      expectedOrigin: "http://localhost",
    });

    const issued = auth.issueSession(user.id);
    const storedToken = db.sqlite
      .query("SELECT token_hash FROM auth_sessions")
      .get() as { token_hash: string };
    const cookie = issued.cookie.split(";", 1)[0];
    const context = auth.sessionFromRequest(
      new Request("http://localhost", { headers: { cookie } }),
    );

    expect(storedToken.token_hash).not.toContain(issued.token);
    expect(context?.user.id).toBe(user.id);
    expect(context?.session.csrfToken).toBe(issued.csrfToken);
    expect(issued.cookie).toContain("HttpOnly");
    expect(issued.cookie).toContain("SameSite=Strict");
    expect(issued.cookie).not.toContain("Secure");
  });
});
