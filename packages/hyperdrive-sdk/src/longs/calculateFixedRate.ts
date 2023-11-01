import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";
import { subtractBigInt } from "src/base/subtractBigInt/subtractBigInt";

export function calculateFixedRate({
  flatFee,
  bondAmount,
  baseAmountPaid,
}: {
  flatFee: bigint;
  bondAmount: bigint;
  baseAmountPaid: bigint;
}): bigint {
  const poolFee = multiplyBigInt([bondAmount, flatFee], 18);
  const yieldAmount = bondAmount - baseAmountPaid;
  const yieldAfterFlatFee = subtractBigInt([yieldAmount, poolFee]);
  return yieldAfterFlatFee;
}
