import * as dnum from "dnum";

export function calculateLiquidity(
  lpSharePrice: bigint,
  shareReserves: bigint,
  longsOutstanding: bigint,
  decimals: number,
): bigint {
  return dnum.subtract(
    dnum.multiply(
      [lpSharePrice, decimals],
      [shareReserves, decimals],
      decimals,
    ),
    [longsOutstanding, decimals],
    decimals,
  )[0];
}
