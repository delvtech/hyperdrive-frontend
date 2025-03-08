import { fixed } from "@delvtech/fixed-point-wasm";

export function calculateShortAccruedYield({
  openVaultSharePrice,
  endingVaultSharePrice,
  bondAmount,
  decimals,
}: {
  openVaultSharePrice: bigint;
  endingVaultSharePrice: bigint;
  bondAmount: bigint;
  decimals: number;
}): bigint {
  // Current Accrued yield = (current share price - checkpoint share price) x
  // number of bonds
  const result =
    // vaultSharePrice is always 18 decimals
    fixed(endingVaultSharePrice - openVaultSharePrice).mul(
      bondAmount,
      decimals,
    ).bigint;
  return result;
}
