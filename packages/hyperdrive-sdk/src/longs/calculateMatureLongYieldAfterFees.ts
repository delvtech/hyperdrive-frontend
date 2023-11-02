import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";
import { subtractBigInt } from "src/base/subtractBigInt/subtractBigInt";

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
  const poolFee = multiplyBigInt([bondAmount, flatFee], decimals);
  return subtractBigInt([bondAmount - baseAmountPaid, poolFee]);
}
