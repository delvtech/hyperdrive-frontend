import * as dnum from "dnum";

export function calculateShortAccruedYield({
  toSharePrice,
  fromSharePrice,
  bondAmount,
  decimals,
}: {
  toSharePrice: bigint;
  fromSharePrice: bigint;
  bondAmount: bigint;
  decimals: number;
}): bigint {
  // Current Accrued yield = (current share price - checkpoint share price) x
  // number of bonds
  return dnum.multiply(
    [fromSharePrice - toSharePrice, decimals],
    [bondAmount, decimals],
  )[0];
}
