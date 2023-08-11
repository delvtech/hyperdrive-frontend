import { expect, test } from "vitest";
import { formatRate } from "./formatRate";

test("should format common input values accurately when given typical rate values", () => {
  expect(formatRate(0n)).toBe("0.00");
  expect(formatRate(1n)).toBe("0.00"); // Smallest non-zero value
  expect(formatRate(25000000000000000n)).toBe("2.50"); // 2.5%
  expect(formatRate(50000000000000000n)).toBe("5.00"); // 5%
  expect(formatRate(75000000000000000n)).toBe("7.50"); // 7.5%
  expect(formatRate(100000000000000000n)).toBe("10.00"); // 10%
});

test("should handle boundary conditions correctly when given values near rounding points", () => {
  expect(formatRate(49999999999999996n)).toBe("4.99");
  expect(formatRate(50000000000000000n)).toBe("5.00");
  expect(formatRate(50000000000000004n)).toBe("5.00");
  expect(formatRate(9999n)).toBe("0.00"); // Testing edge case where we have a number like 0.00009999
});

test("should handle potential rounding issues correctly when given values near 0.05", () => {
  expect(formatRate(4999999999999999n)).toBe("0.49");
  expect(formatRate(5000000000000001n)).toBe("0.50");
});

test("should throw an error when given negative input values", () => {
  expect(() => formatRate(-1000000000000000000n)).toThrow();
});
