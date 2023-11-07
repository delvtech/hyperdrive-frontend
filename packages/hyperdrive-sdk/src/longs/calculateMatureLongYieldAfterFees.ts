import * as dnum from "dnum";
export function calculateMatureLongYieldAfterFees({
  flatFee,
  bondAmount,
  baseAmountPaid,
  decimals,
}: {
  flatFee: bigint;
  bondAmount: bigint;
  baseAmountPaid: bigint;
  decimals: number;
}): bigint {
  const poolFee = dnum.mul([bondAmount, decimals], [flatFee, decimals]);
  const yieldAmount = dnum.subtract(
    [bondAmount, decimals],
    [baseAmountPaid, decimals],
  );

  return dnum.subtract(yieldAmount, poolFee)[0];
}
