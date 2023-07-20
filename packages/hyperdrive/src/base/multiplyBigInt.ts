/**
 * Multiply an array of bigints together and preserve the correct scaling for
 * decimals.
 *
 * @param values - The bigints to multiply. Can be a bigint or an object with a
 * bigint `value` and a `decimals` property.
 * @param decimals - The number of decimal places the bigints are scaled
 * to. If a value in the `values` has a `decimals` property, that value will be
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
  values: (
    | bigint
    | {
        value: bigint;
        decimals: number;
      }
  )[],
  decimals: number,
): bigint {
  if (values.length === 0) {
    return 0n;
  }

  let productValue: bigint;
  let productDecimals: number;

  // Initialize the total value and decimals to the first value in the array.
  if (typeof values[0] === "bigint") {
    productValue = values[0];
    productDecimals = decimals;
  } else {
    productValue = values[0].value;
    productDecimals = values[0].decimals;
  }

  // Multiply the total value by each subsequent value in the array. And add the
  // decimals together.
  for (const value of values.slice(1)) {
    if (typeof value === "bigint") {
      productValue *= value;
      productDecimals += decimals;
    } else {
      productValue *= value.value;
      productDecimals += value.decimals;
    }
  }

  // If the total decimals is less than the desired decimals, return 0.
  if (productDecimals < decimals) {
    return 0n;
  }

  // If the total decimals is the same as the desired decimals, avoid doing any
  // extra work and return the total value.
  if (productDecimals === decimals) {
    return productValue;
  }

  // Remove the extra decimal places.
  return productValue / 10n ** BigInt(productDecimals - decimals);
}
