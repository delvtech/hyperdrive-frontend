import * as dnum from "dnum";

export function calculateRatio({
  a,
  b,
  decimals,
}: {
  a: bigint;
  b: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply(
    dnum.divide([a, decimals], [b, decimals], decimals),
    dnum.from("100", decimals),
  )[0];
}
