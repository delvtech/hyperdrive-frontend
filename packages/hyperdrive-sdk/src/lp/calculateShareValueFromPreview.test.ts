import { expect, test } from "vitest";
import * as dnum from "dnum";
import { calculateShareValueFromPreview } from "src/lp/calculateShareValueFromPreview";
/**
 * Calculates how much an amount of shares are worth, give the price, example:
 *
 * Example: 10 shares each worth $2 each:
 *   calculateShareValue({ amount 10, price: 2, decimals: 2 }) // $20
 */
test("calculateShareValueFromPreview should return how much an amount of shares are worth, given another amount of shares and their value", async () => {
  const value = calculateShareValueFromPreview({
    amount: dnum.from("10", 18)[0],
    sharesIn: dnum.from("10", 18)[0],
    baseOut: dnum.from("20", 18)[0],
    decimals: 18,
  });

  expect(value).toEqual(dnum.from("20", 18)[0]);
});
