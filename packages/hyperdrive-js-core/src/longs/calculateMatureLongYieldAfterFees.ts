import { fixed } from "src/fixed-point";

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
  const feeAmount = fixed(bondAmount, decimals).mul(
    fixed(flatFee, decimals),
  ).bigint;
  return bondAmount - baseAmountPaid - feeAmount;
}
