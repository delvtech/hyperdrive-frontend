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
  return fixed(sharesAmount, decimals).mul(vaultSharePrice, decimals).bigint;
}
