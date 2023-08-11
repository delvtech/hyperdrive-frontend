import { expect, test } from "vitest";
import { adjustAmountByPercentage } from "./adjustAmountByPercentage";
import { parseUnits } from "viem";

test("adjustAmountByPercentage - basic functionality", () => {
  const amount = parseUnits("100", 18); // represents 100 tokens with 18 decimals
  const expectedAmount = parseUnits("99", 18); // represents 99 tokens with 18 decimals
  expect(adjustAmountByPercentage({ amount, decimals: 18 })).toBe(
    expectedAmount,
  );
});

test("adjustAmountByPercentage - precision", () => {
  const preciseAmount = parseUnits("100.123456", 18);
  const expectedPreciseAmount = preciseAmount - preciseAmount / 100n;
  expect(
    adjustAmountByPercentage({ amount: preciseAmount, decimals: 18 }),
  ).toBe(expectedPreciseAmount);
});

test("adjustAmountByPercentage - rounding", () => {
  const roundingAmount = parseUnits("0.000000000000000001", 18); // smallest possible value greater than zero with 18 decimals
  expect(
    adjustAmountByPercentage({ amount: roundingAmount, decimals: 18 }),
  ).toBe(0n); // Adjusting such a small amount by 1% should effectively round down to 0
});
