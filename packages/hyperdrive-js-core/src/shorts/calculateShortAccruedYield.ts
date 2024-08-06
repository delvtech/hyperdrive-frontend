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
  // TODO: Remove this once `fixed` supports negative numbers
  const subbed = endingVaultSharePrice - openVaultSharePrice;
  const [sign, abs] = subbed < 0 ? [-1n, -subbed] : [1n, subbed];
  return fixed(abs, decimals).mul(bondAmount, decimals).bigint * sign;
}
