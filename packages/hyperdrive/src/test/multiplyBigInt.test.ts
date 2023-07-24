import { multiplyBigInt } from "src/base/multiplyBigInt";
import { test, assert } from "vitest";

test("multiplyBigInt: simple multiplication", async () => {
  const result = multiplyBigInt([500n, 50n], 2);
  assert.equal(result, 250n, "5.00 * 0.50 should equal 2.50");
});

test("multiplyBigInt: when values array is empty", async () => {
  const result = multiplyBigInt([], 2);
  assert.equal(result, 0n, "Multiplying empty array should return 0");
});

test("multiplyBigInt: single value input", async () => {
  const result = multiplyBigInt([10n], 2);
  assert.equal(result, 10n, "Single value should be returned as-is");
});

test("multiplyBigInt: multiplying with zero", async () => {
  const result = multiplyBigInt([500n, 0n], 2);
  assert.equal(result, 0n, "Any value multiplied by 0 should be 0");
});

test("multiplyBigInt: multiplying multiple bigint values", async () => {
  // Test case: multiplying three values
  // Let's say our values are [2000n, 300n, 50n] and for 2 decimals, this translates to 20.00 * 3.00 * 0.50 = 30.00
  const result = multiplyBigInt([2000n, 300n, 50n], 2);
  assert.equal(result, 3000n, "20.00 * 3.00 * 0.50 should equal 30.00");
});
