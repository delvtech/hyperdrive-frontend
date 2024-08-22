import { fixed } from "@delvtech/fixed-point-wasm";

export function calculateRatio({
  a,
  b,
  decimals,
}: {
  a: bigint;
  b: bigint;
  decimals: number;
}): bigint {
  return fixed(fixed(a, decimals).div(b, decimals).mul(100, 0)).bigint;
}
