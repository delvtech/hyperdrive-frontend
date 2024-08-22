import { fixed } from "@delvtech/fixed-point-wasm";

export function convertSharesToBase({
  sharesAmount = 0n,
  vaultSharePrice = 0n,
  decimals,
}: {
  sharesAmount: bigint | undefined;
  vaultSharePrice: bigint | undefined;
  decimals: number;
}): bigint {
  // vault share price is always 18 decimals, so only allow the caller to
  // specify the sharesAmount decimals
  return fixed(sharesAmount, decimals).mul(vaultSharePrice).bigint;
}
