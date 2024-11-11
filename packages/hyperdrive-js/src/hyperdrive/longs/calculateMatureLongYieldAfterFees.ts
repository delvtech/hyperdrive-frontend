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
  // Flat fee is always 18 decimals
  const poolFee = fixed(bondAmount, decimals).mul(flatFee).bigint;
  return bondAmount - baseAmountPaid - poolFee;
}
