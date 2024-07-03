interface AdjustAmountByPercentageOptions {
  /**
   * The amount to adjust
   */
  amount: bigint;
  /**
   * The percentage to adjust it by, eg: 1e18 for 1%
   */
  percentage: bigint;

  /**
   * The decimals of precision for the `amount`
   */
  decimals: number;
  direction: "up" | "down";
}

/**
 * Adjusts a given amount by some percentage. Useful for slippage calculations.
 *
 * Example:
 *
 * ```ts
 * adjustAmountByPercentage({
 *   amount: parseUnits("100", 18),
 *   decimals: 18,
 *   percentage: BigInt(1e18),
 *   direction: "down",
 * }) === parseUnits("99")
 * ```
 *
 * ```ts
 * adjustAmountByPercentage({
 *   amount: parseUnits("100", 18),
 *   decimals: 18,
 *   percentage: BigInt(1e18),
 *   direction: "up",
 * }) === parseUnits("101")
 * ```
 */
export function adjustAmountByPercentage({
  amount,
  percentage,
  decimals,
  direction,
}: AdjustAmountByPercentageOptions): bigint {
  // Check if the input amount is negative and throw an error if true
  if (amount < 0n) {
    throw new Error("Negative amounts are not allowed");
  }

  // Convert the amountOut to a "decimal-based" bigint by shifting the decimal places
  const shiftDecimals = 10n ** BigInt(decimals);
  const amountWithDecimals = amount * shiftDecimals;

  // Calculate the slippage amount
  const slippageAmount =
    (amountWithDecimals * percentage) / (100n * shiftDecimals);

  // Subtract the slippage from the amountOut if "down", or add it if "up"
  let minOutput = amountWithDecimals - slippageAmount;
  if (direction === "up") {
    minOutput = amountWithDecimals + slippageAmount;
  }

  // Handle small values to ensure proper rounding
  if (minOutput < shiftDecimals && minOutput > 0n) {
    return 0n;
  }

  // Convert back to the original decimal places by dividing through with rounding
  return (minOutput + shiftDecimals / 2n) / shiftDecimals;
}
