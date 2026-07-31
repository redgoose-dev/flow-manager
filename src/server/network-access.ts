import { isIP } from "node:net";
import { networkInterfaces } from "node:os";

export type AccessMode = "local" | "private";

function normalizedAddress(address: string) {
  const withoutZone = address.toLowerCase().split("%", 1)[0];
  return withoutZone.startsWith("::ffff:")
    ? withoutZone.slice("::ffff:".length)
    : withoutZone;
}

function ipv4Parts(address: string) {
  if (isIP(address) !== 4) return null;
  return address.split(".").map(Number);
}

export function isLoopbackAddress(address: string | null | undefined) {
  if (!address) return false;
  const normalized = normalizedAddress(address);
  const parts = ipv4Parts(normalized);
  if (parts) return parts[0] === 127;
  return normalized === "::1" || normalized === "0:0:0:0:0:0:0:1";
}

export function isPrivateAddress(address: string | null | undefined) {
  if (!address) return false;
  const normalized = normalizedAddress(address);
  const parts = ipv4Parts(normalized);
  if (parts) {
    const [first, second] = parts;
    return (
      first === 10 ||
      (first === 172 && second >= 16 && second <= 31) ||
      (first === 192 && second === 168) ||
      (first === 169 && second === 254) ||
      (first === 100 && second >= 64 && second <= 127)
    );
  }
  if (isIP(normalized) !== 6) return false;
  return (
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    /^fe[89ab]/.test(normalized)
  );
}

export function parseAccessMode(value: string | undefined): AccessMode {
  const mode = value ?? "private";
  if (mode !== "local" && mode !== "private") {
    throw new Error(
      "WORKFLOW_MANAGER_ACCESS_MODE must be either 'local' or 'private'.",
    );
  }
  return mode;
}

export function isAllowedClientAddress(
  address: string | null | undefined,
  mode: AccessMode,
) {
  if (isLoopbackAddress(address)) return true;
  return mode === "private" && isPrivateAddress(address);
}

export function privateNetworkUrls(port: number) {
  const urls = new Set<string>();
  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses ?? []) {
      const normalized = normalizedAddress(address.address);
      const parts = ipv4Parts(normalized);
      const isLanIpv4 =
        parts !== null &&
        (parts[0] === 10 ||
          (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
          (parts[0] === 192 && parts[1] === 168));
      const isUniqueLocalIpv6 =
        isIP(normalized) === 6 &&
        (normalized.startsWith("fc") || normalized.startsWith("fd"));
      if (!address.internal && (isLanIpv4 || isUniqueLocalIpv6)) {
        const host =
          address.family === "IPv6" ? `[${address.address}]` : address.address;
        urls.add(`http://${host}:${port}/`);
      }
    }
  }
  return [...urls];
}
