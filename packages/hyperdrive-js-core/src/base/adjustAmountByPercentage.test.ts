import { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
import { HyperdriveSdkError } from "src/errors/HyperdriveSdkError";
import { parseFixed } from "src/fixed-point";
import { expect, test } from "vitest";

test("should return adjusted amount down when given a basic input", () => {
  expect(
    adjustAmountByPercentage({
      amount: BigInt(100e18),
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "down",
    }),
  ).toBe(BigInt(99e18));
});
test("should return adjusted amount up when given a basic input", () => {
  expect(
    adjustAmountByPercentage({
      amount: BigInt(100e18),
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "up",
    }),
  ).toBe(BigInt(101e18));
});

test("should handle precision accurately when given precise input amounts", () => {
  const amount = parseFixed(100.123456).bigint;
  expect(
    adjustAmountByPercentage({
      amount,
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "down",
    }),
  ).toBe(amount - amount / 100n);
});

test("should round down to zero when given the smallest possible positive value", () => {
  expect(
    adjustAmountByPercentage({
      amount: 1n, // 1 wei
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "down",
    }),
  ).toBe(0n);
});

test("should return zero when input amount is zero", () => {
  expect(
    adjustAmountByPercentage({
      amount: 0n,
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "down",
    }),
  ).toBe(0n);
});

test("should throw an error when given a negative input amount", () => {
  expect(() => {
    adjustAmountByPercentage({
      amount: -1n,
      percentage: BigInt(1e18),
      decimals: 18,
      direction: "down",
    });
  }).toThrow(new HyperdriveSdkError("Negative amounts are not allowed"));
});
