import { describe, expect, test } from "bun:test";
import {
  isAllowedClientAddress,
  isLoopbackAddress,
  isPrivateAddress,
  parseAccessMode,
} from "../src/server/network-access";

describe("내부 네트워크 접근 제한", () => {
  test("루프백 주소를 인식한다", () => {
    expect(isLoopbackAddress("127.0.0.1")).toBe(true);
    expect(isLoopbackAddress("::1")).toBe(true);
    expect(isLoopbackAddress("::ffff:127.0.0.1")).toBe(true);
    expect(isLoopbackAddress("192.168.0.10")).toBe(false);
  });

  test("사설 IPv4와 IPv6 주소를 인식한다", () => {
    expect(isPrivateAddress("10.10.0.2")).toBe(true);
    expect(isPrivateAddress("172.16.0.2")).toBe(true);
    expect(isPrivateAddress("172.31.255.254")).toBe(true);
    expect(isPrivateAddress("192.168.20.3")).toBe(true);
    expect(isPrivateAddress("100.64.10.2")).toBe(true);
    expect(isPrivateAddress("fd12:3456::1")).toBe(true);
    expect(isPrivateAddress("fe80::1%en0")).toBe(true);
    expect(isPrivateAddress("8.8.8.8")).toBe(false);
    expect(isPrivateAddress("172.32.0.1")).toBe(false);
    expect(isPrivateAddress("2001:4860:4860::8888")).toBe(false);
  });

  test("private 모드에서는 내부 주소만 허용한다", () => {
    expect(isAllowedClientAddress("127.0.0.1", "private")).toBe(true);
    expect(isAllowedClientAddress("192.168.1.20", "private")).toBe(true);
    expect(isAllowedClientAddress("8.8.8.8", "private")).toBe(false);
    expect(isAllowedClientAddress(undefined, "private")).toBe(false);
  });

  test("local 모드에서는 같은 서버의 요청만 허용한다", () => {
    expect(isAllowedClientAddress("::1", "local")).toBe(true);
    expect(isAllowedClientAddress("10.0.0.4", "local")).toBe(false);
  });

  test("지원하는 접근 모드만 허용한다", () => {
    expect(parseAccessMode(undefined)).toBe("private");
    expect(parseAccessMode("local")).toBe("local");
    expect(() => parseAccessMode("public")).toThrow();
  });
});
