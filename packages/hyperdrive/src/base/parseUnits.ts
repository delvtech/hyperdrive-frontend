import { parseUnits as viemParseUnits } from "viem";
// Workaround for weird viem types
// See: https://github.com/wagmi-dev/viem/discussions/490
export function parseUnits(value: string, decimals: number): bigint {
  return viemParseUnits(value as `${number}`, decimals);
}
