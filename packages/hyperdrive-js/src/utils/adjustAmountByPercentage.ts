import { fixed } from "@delvtech/fixed-point-wasm";

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
  const slippageAmount = fixed(amount, decimals)
    .mul(percentage, decimals)
    .div(100, 0);
  return direction === "down"
    ? amount - slippageAmount.bigint
    : amount + slippageAmount.bigint;
}
