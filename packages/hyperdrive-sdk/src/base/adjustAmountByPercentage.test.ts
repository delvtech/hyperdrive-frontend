import { expect, test } from "vitest";
import { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
import { parseUnits } from "viem";

test("should return adjusted amount when given a basic input", () => {
  const amount = parseUnits("100", 18);
  const expectedAmount = parseUnits("99", 18);
  expect(adjustAmountByPercentage({ amount, decimals: 18 })).toBe(
    expectedAmount,
  );
});

test("should handle precision accurately when given precise input amounts", () => {
  const preciseAmount = parseUnits("100.123456", 18);
  const expectedPreciseAmount = preciseAmount - preciseAmount / 100n;
  expect(
    adjustAmountByPercentage({ amount: preciseAmount, decimals: 18 }),
  ).toBe(expectedPreciseAmount);
});

test("should round down to zero when given the smallest possible positive value", () => {
  const roundingAmount = parseUnits("0.000000000000000001", 18);
  expect(
    adjustAmountByPercentage({ amount: roundingAmount, decimals: 18 }),
  ).toBe(0n);
});

test("should return zero when input amount is zero", () => {
  expect(adjustAmountByPercentage({ amount: 0n, decimals: 18 })).toBe(0n);
});

test("should throw an error when given a negative input amount", () => {
  const negativeAmount = parseUnits("-100", 18);
  expect(() => {
    adjustAmountByPercentage({ amount: negativeAmount, decimals: 18 });
  }).toThrow(Error("Negative amounts are not allowed"));
});
