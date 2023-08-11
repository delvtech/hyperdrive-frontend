import { expect, test } from "vitest";
import { formatRate } from "./formatRate";

test("formatRate - common inputs", () => {
  expect(formatRate(0n)).toBe("0.00");
  expect(formatRate(1n)).toBe("0.00"); // Smallest non-zero value
  expect(formatRate(25000000000000000n)).toBe("2.50"); // 2.5%
  expect(formatRate(50000000000000000n)).toBe("5.00"); // 5%
  expect(formatRate(75000000000000000n)).toBe("7.50"); // 7.5%
  expect(formatRate(100000000000000000n)).toBe("10.00"); // 10%
});

test("formatRate - boundary conditions", () => {
  // Testing first 4 characters after decimal
  expect(formatRate(49999999999999996n)).toBe("4.99"); // Close to 0.05
  expect(formatRate(50000000000000000n)).toBe("5.00"); // Exactly 0.05
  expect(formatRate(50000000000000004n)).toBe("5.00"); // Just over 0.05

  // Testing edge case where we have a number like 0.00009999 (should round to 0.00%)
  expect(formatRate(9999n)).toBe("0.00");
});

test("formatRate - potential rounding issues", () => {
  expect(formatRate(4999999999999999n)).toBe("0.49"); // Close to 0.05 (in 2 decimal places)
  expect(formatRate(5000000000000001n)).toBe("0.50"); // Just over 0.05 (in 2 decimal places)
});

test("formatRate - negative inputs", () => {
  expect(() => formatRate(-1000000000000000000n)).toThrow();
});
