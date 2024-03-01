import * as dnum from "dnum";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { expect, test } from "vitest";
/**
 * Calculates how much an amount of shares are worth, give the price, example:
 *
 * Example: 10 shares each worth $2 each:
 *   calculateShareValue({ amount 10, price: 2, decimals: 2 }) // $20
 */
test("calculateShareValue should return the value of shares given a certain price", async () => {
  const value = calculateValueFromPrice({
    amount: dnum.from("10", 18)[0],
    unitPrice: dnum.from("2", 18)[0],
    decimals: 18,
  });
  expect(value).toEqual(dnum.from("20.0", 18)[0]);
});
