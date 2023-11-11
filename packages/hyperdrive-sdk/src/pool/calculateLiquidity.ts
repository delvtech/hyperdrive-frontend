import * as dnum from "dnum";

export function calculateLiquidity(
  lpSharePrice: bigint,
  shareReserves: bigint,
  longsOutstanding: bigint,
): bigint {
  return dnum.subtract(
    dnum.multiply([lpSharePrice, 18], [shareReserves, 18], 18),
    [longsOutstanding, 18],
    18,
  )[0];
}
