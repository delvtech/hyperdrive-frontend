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
  const subbed = endingVaultSharePrice - openVaultSharePrice;
  // TODO: Remove absoluteDifference once fixed-point-wasm supports negative numbers
  const [sign_factor, absoluteDifference] =
    subbed < 0n ? [-1n, -subbed] : [1n, subbed];
  return (
    fixed(absoluteDifference, decimals).mul(bondAmount, decimals).bigint *
    sign_factor
  );
}
