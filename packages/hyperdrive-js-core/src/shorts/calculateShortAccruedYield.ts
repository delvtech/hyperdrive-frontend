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
  // FIXME: temporary to handle negative numbers, remove once fixed point is updated
  const [sign_factor, absoluteDifference] =
    subbed < 0n ? [-1n, -subbed] : [1n, subbed];
  const result =
    // vaultSharePrice is always 18 decimals
    fixed(absoluteDifference).mul(bondAmount, decimals).bigint * sign_factor;
  console.log(
    `absoluteDifference (${absoluteDifference}) * bondAmount (${bondAmount}) = ${result}`,
  );
  return result;
}
