import { formatRate } from "src/base/formatRate";
import { parseUnits } from "viem";
import { expect, test } from "vitest";

test("formatRate should return positive bigints formatted as a percent", async () => {
  const value = formatRate({ rate: BigInt(1e18) });
  expect(value).toEqual("100.00");

  const valueWithCommas = formatRate({ rate: BigInt(10e18) });
  expect(valueWithCommas).toEqual("1,000.00");

  // rounds down
  const value2 = formatRate({ rate: parseUnits("0.056721", 18) });
  expect(value2).toEqual("5.67");

  // rounds up
  const value3 = formatRate({ rate: parseUnits("0.056781", 18) });
  expect(value3).toEqual("5.68");
});

test("formatRate should return negative bigints formatted as a percent", async () => {
  const value = formatRate({ rate: BigInt(-1e18) });
  expect(value).toEqual("-100.00");

  const valueWithCommas = formatRate({ rate: BigInt(-10e18) });
  expect(valueWithCommas).toEqual("-1,000.00");

  // rounds down
  const value2 = formatRate({
    rate: parseUnits("-1.0281219", 18),
    decimals: 18,
  });
  expect(value2).toEqual("-102.81");

  // rounds up
  const value3 = formatRate({
    rate: parseUnits("-0.0297902", 18),
    decimals: 18,
  });
  expect(value3).toEqual("-2.98");
});
