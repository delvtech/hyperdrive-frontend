import * as dnum from "dnum";
import { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
import { HyperdriveSdkError } from "src/errors/HyperdriveSdkError";
import { expect, test } from "vitest";

test("should return adjusted amount down when given a basic input", () => {
  const [amount] = dnum.from("100", 18);
  const [expectedAmount] = dnum.from("99", 18);
  expect(
    adjustAmountByPercentage({
      amount,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "down",
    }),
  ).toBe(expectedAmount);
});
test("should return adjusted amount up when given a basic input", () => {
  const [amount] = dnum.from("100", 18);
  const [expectedAmount] = dnum.from("101", 18);
  expect(
    adjustAmountByPercentage({
      amount,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "up",
    }),
  ).toBe(expectedAmount);
});

test("should handle precision accurately when given precise input amounts", () => {
  const [preciseAmount] = dnum.from("100.123456", 18);
  const expectedPreciseAmount = preciseAmount - preciseAmount / 100n;
  expect(
    adjustAmountByPercentage({
      amount: preciseAmount,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "down",
    }),
  ).toBe(expectedPreciseAmount);
});

test("should round down to zero when given the smallest possible positive value", () => {
  const [roundingAmount] = dnum.from("0.000000000000000001", 18);
  expect(
    adjustAmountByPercentage({
      amount: roundingAmount,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "down",
    }),
  ).toBe(0n);
});

test("should return zero when input amount is zero", () => {
  expect(
    adjustAmountByPercentage({
      amount: 0n,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "down",
    }),
  ).toBe(0n);
});

test("should throw an error when given a negative input amount", () => {
  const [negativeAmount] = dnum.from("-100", 18);
  expect(() => {
    adjustAmountByPercentage({
      amount: negativeAmount,
      percentage: dnum.from("1", 18)[0],
      decimals: 18,
      direction: "down",
    });
  }).toThrow(new HyperdriveSdkError("Negative amounts are not allowed"));
});
