import { multiplyBigInt } from "src/base/multiplyBigInt";
import { test, assert } from "vitest";

test("multiplyBigInt: multiply with correct scaling for decimals", async () => {
  // Test case: simple multiplication
  let result = multiplyBigInt([500n, 50n], 2);
  assert.equal(result, 250n, "5.00 * 0.50 should equal 2.50");

  // // Test case: when values array is empty
  result = multiplyBigInt([], 2);
  assert.equal(result, 0n, "Multiplying empty array should return 0");

  // // Test case: when total decimals is less than desired decimals
  result = multiplyBigInt([10n], 2);
  assert.equal(result, 10n, "Single value should be returned as-is");
});
