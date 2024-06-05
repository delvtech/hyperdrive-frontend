import * as dnum from "dnum";

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
  return dnum.multiply(
    [openVaultSharePrice - endingVaultSharePrice, decimals],
    [bondAmount, decimals],
  )[0];
}
