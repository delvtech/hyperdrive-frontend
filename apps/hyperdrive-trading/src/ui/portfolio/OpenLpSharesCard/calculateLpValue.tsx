import * as dnum from "dnum";

export function calculateLpValue({
  lpShares,
  lpSharePrice,
  decimals,
}: {
  lpShares: bigint;
  lpSharePrice: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply(
    [lpShares, decimals],
    [lpSharePrice, decimals],
    decimals,
  )[0];
}
