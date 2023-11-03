/**
 * Subtract an array of bigints from the first bigint.
 *
 * @param values - The bigints to subtract.
 *
 * @example
 *
 * ```ts
 * // 5.00 - .50 = 4.50
 * subtractBigInt([500n, 50n]);
 * // 450n
 */
export function subtractBigInt(values: bigint[]): bigint {
  // Check if there are no values to subtract, if so return 0.
  if (values.length === 0) {
    return 0n;
  }

  // Initialize the resultValue with the first value in the array.
  let resultValue = values[0];

  // Subtract each subsequent value in the array from the total value.
  for (const value of values.slice(1)) {
    resultValue -= value;
  }

  // Return the final result after all subtractions.
  return resultValue;
}
