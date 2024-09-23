import { parseFixed } from "@delvtech/fixed-point-wasm";
/**
 * Calculates the yield multiplier for a Hyperdrive market based on the long price.
 *
 * The yield multiplier represents how much the underlying yield is amplified for short positions.
 * It is inversely proportional to the long price, increasing as the long price approaches 1.
 *
 * Yield Multiplier calculation:
 * Yield Multiplier = 1 / (1 - longPrice)
 *
 * Examples:
 * - If longPrice = 0.9:
 *   Yield Multiplier = 1 / (1 - 0.9) = 1 / 0.1 = 10x
 *   The short position amplifies the underlying yield by 10 times.
 *
 * - If longPrice = 0.96:
 *   Yield Multiplier = 1 / (1 - 0.96) = 1 / 0.04 = 25x
 *   The short position amplifies the underlying yield by 25 times.
 *
 * @param longPrice The current price of a long position, represented as a bigint.
 * @returns The calculated yield multiplier as a string, formatted to 2 decimal places.
 */

export function calculateMarketYieldMultiplier(longPrice: bigint): string {
  return parseFixed(1)
    .div(parseFixed(1).sub(longPrice))
    .format({ decimals: 2, rounding: "trunc" });
}
