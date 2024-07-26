import { fixed } from "src/fixed-point";

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
  return fixed(endingVaultSharePrice - openVaultSharePrice, decimals).mul(
    bondAmount,
    decimals,
  ).bigint;
}
