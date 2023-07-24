import { multiplyBigInt } from "src/base/multiplyBigInt";
import { expect, test } from "vitest";

test("multiplyBigInt: simple multiplication", async () => {
  const result = multiplyBigInt([500n, 50n], 2);
  expect(result).toEqual(250n);
});

test("multiplyBigInt: when values array is empty", async () => {
  const result = multiplyBigInt([], 2);
  expect(result).toEqual(0n);
});

test("multiplyBigInt: single value input", async () => {
  const result = multiplyBigInt([10n], 2);
  expect(result).toEqual(10n);
});

test("multiplyBigInt: multiplying with zero", async () => {
  const result = multiplyBigInt([500n, 0n], 2);
  expect(result).toEqual(0n);
});

test("multiplyBigInt: multiplying multiple bigint values", async () => {
  // Test case: multiplying three values
  // Let's say our values are [2000n, 300n, 50n] and for 2 decimals, this translates to 20.00 * 3.00 * 0.50 = 30.00
  const result = multiplyBigInt([2000n, 300n, 50n], 2);
  expect(result).toEqual(3000n);
});
