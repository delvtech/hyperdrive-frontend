import { formatRate } from "src/base/formatRate";
import { parseUnits } from "viem";
import { expect, test } from "vitest";

test("formatRate should return positive bigints formatted as a percent", async () => {
  const value = formatRate(parseUnits("1", 18), 18);
  expect(value).toEqual("100.00");

  // rounds down
  const value2 = formatRate(parseUnits("0.056721", 18), 18);
  expect(value2).toEqual("5.67");

  // rounds up
  const value3 = formatRate(parseUnits("0.056781", 18), 18);
  expect(value3).toEqual("5.68");
});

test("formatRate should return negative bigints formatted as a percent", async () => {
  const value = formatRate(parseUnits("-1", 18), 18);
  expect(value).toEqual("-100.00");

  // rounds down
  const value2 = formatRate(parseUnits("-1.0281219", 18), 18);
  expect(value2).toEqual("-102.81");

  // rounds up
  const value3 = formatRate(parseUnits("-0.0297902", 18), 18);
  expect(value3).toEqual("-2.98");
});
