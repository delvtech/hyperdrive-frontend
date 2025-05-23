import { parseFixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
import { expect, test } from "vitest";

test("should return adjusted amount down when given a basic input", () => {
  expect(
    adjustAmountByPercentage({
      amount: parseFixed(100).bigint,
      percentage: parseFixed(1).bigint,
      decimals: 18,
      direction: "down",
    }),
  ).toBe(parseFixed(99).bigint);
});
test("should return adjusted amount up when given a basic input", () => {
  expect(
    adjustAmountByPercentage({
      amount: parseFixed(100).bigint,
      percentage: parseFixed(1).bigint,
      decimals: 18,
      direction: "up",
    }),
  ).toBe(parseFixed(101).bigint);
});

test("should handle precision accurately when given precise input amounts", () => {
  const amount = parseFixed("100.123456789012345678").bigint;
  expect(
    adjustAmountByPercentage({
      amount,
      percentage: parseFixed(1).bigint,
      decimals: 18,
      direction: "down",
    }),
  ).toBe(amount - amount / 100n);
});

test("should return zero when input amount is zero", () => {
  expect(
    adjustAmountByPercentage({
      amount: 0n,
      percentage: parseFixed(1).bigint,
      decimals: 18,
      direction: "down",
    }),
  ).toBe(0n);
});
