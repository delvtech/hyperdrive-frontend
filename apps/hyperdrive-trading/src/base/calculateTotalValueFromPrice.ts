import * as dnum from "dnum";

export function calculateTotalValueFromPrice({
  amount,
  price,
  decimals,
}: {
  amount: bigint;
  price: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply([amount, decimals], [price, decimals], decimals)[0];
}
