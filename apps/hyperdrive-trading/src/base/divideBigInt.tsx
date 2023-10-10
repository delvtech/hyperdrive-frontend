import { parseUnits } from "src/base/parseUnits";

/**
 * Performs division of two BigInt numbers and returns the quotient up to a
 * specified number of decimal places.
 *
 * BigInt in JavaScript truncates the decimal part during division. This
 * function provides a way to get the quotient with decimals, returned as a
 * bigint.
 *
 * @param a - The dividend as a BigInt.
 * @param b - The divisor as a BigInt.
 * @param precision - The number of decimal places to calculate. Default is 18.
 * @returns The quotient as a bigint, including up to `precision` decimal places.
 */
export function divideBigInt(a: bigint, b: bigint, precision = 18): bigint {
  let quotient = a / b;
  let remainder = a % b;
  let result = quotient.toString();

  if (remainder !== 0n) {
    result += ".";
    for (let i = 0; i < precision; i++) {
      remainder *= 10n;
      quotient = remainder / b;
      remainder = remainder % b;
      result += quotient.toString();
    }
  }

  return parseUnits(result, precision);
}
