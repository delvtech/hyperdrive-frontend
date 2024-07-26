import { fixed } from "@delvtech/fixed-point-wasm";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";

/**
 * This function calculates the equivalent value of a specified amount of shares
 * (targetShares) based on the value of a reference amount of shares
 * (referenceShares) and their total value (totalReferenceValue).

 * Example usage:
 * calculateEquivalentShareValue({
 *   targetShares: parseUnits("100", 18),
 *   referenceShares: parseUnits("200", 18),
 *   totalReferenceValue: parseUnits("400", 18),
 *   decimals: 18,
 * }); // Returns 200, because 1 reference share is worth $2
 */
export function calculateEquivalentShareValue({
  targetShares,
  referenceShares,
  totalReferenceValue,
  decimals,
}: {
  targetShares: bigint;
  referenceShares: bigint;
  totalReferenceValue: bigint;
  decimals: number;
}): bigint {
  const referenceSharePrice = fixed(totalReferenceValue, decimals).div(
    referenceShares,
    decimals,
  ).bigint;

  return calculateValueFromPrice({
    decimals,
    amount: targetShares,
    unitPrice: referenceSharePrice,
  });
}
