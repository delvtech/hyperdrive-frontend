/**
 * Multiply an array of bigints together and preserve the correct scaling for
 * decimals.
 *
 * @param values - The bigints to multiply.
 * @param decimals - The number of decimal places the bigints are scaled to.
 *
 * @example
 *
 * ```ts
 * // 5.00 * .50 = 2.50
 * multiplyBigInt([500n, 50n], 2);
 * // 250n
 */
export function multiplyBigInt(values: bigint[], decimals: number): bigint {
  if (values.length === 0) {
    return 0n;
  }

  let productValue = values[0];
  let productDecimals = decimals;

  // Multiply the total value by each subsequent value in the array. And add the
  // decimals together.
  for (const value of values.slice(1)) {
    productValue *= value;
    productDecimals += decimals;
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
