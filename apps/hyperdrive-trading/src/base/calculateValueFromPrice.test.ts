import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { expect, test } from "vitest";

test("calculateShareValue should return the value of shares given a certain price", async () => {
  // 10 shares at $1.25 each should be $12.50
  const value = calculateValueFromPrice({
    amount: 10_00n,
    unitPrice: 1_25n,
    decimals: 2,
  });
  expect(value).toEqual(12_50n);
});
