/**
 * Multiply an array of bigints together and preserve the correct scaling for
 * decimals.
 *
 * @param list - The bigints to multiply. Can be a bigint or an object with a
 * bigint `value` and a `decimals` property.
 * @param decimals - The number of decimal places the bigints are scaled
 * to. If a value in the `list` has a `decimals` property, that value will be
 * used instead. This is also the number of decimal places used for the result.
 *
 * @example
 *
 * ```ts
 * // 5.00 * .50 = 2.50
 * multiplyBigInt([500n, 50n], 2);
 * // 250n
 *
 * // With different decimals
 * // 5.00 * .500 = 2.50
 * multiplyBigInt(
 *   [
 *     500n,
 *     {
 *       value: 500n,
 *       decimals: 3
 *     }
 *   ],
 *   2
 * );
 * // 250n
 * ```
 */
export function multiplyBigInt(
  list: (
    | bigint
    | {
        value: bigint;
        decimals: number;
      }
  )[],
  decimals: number,
): bigint {
  if (list.length === 0) {
    return 0n;
  }

  let totalValue: bigint;
  let totalDecimals: number;

  // Initialize the total value and decimals to the first value in the array.
  if (typeof list[0] === "bigint") {
    totalValue = list[0];
    totalDecimals = decimals;
  } else {
    totalValue = list[0].value;
    totalDecimals = list[0].decimals;
  }

  // Multiply the total value by each subsequent value in the array. And add the
  // decimals together.
  for (const value of list.slice(1)) {
    if (typeof value === "bigint") {
      totalValue *= value;
      totalDecimals += decimals;
    } else {
      totalValue *= value.value;
      totalDecimals += value.decimals;
    }
  }

  // If the total decimals is less than the desired decimals, return 0.
  if (totalDecimals < decimals) {
    return 0n;
  }

  // If the total decimals is the same as the desired decimals, avoid doing any
  // extra work and return the total value.
  if (totalDecimals === decimals) {
    return totalValue;
  }

  // Remove the extra decimal places.
  return totalValue / 10n ** BigInt(totalDecimals - decimals);
}
