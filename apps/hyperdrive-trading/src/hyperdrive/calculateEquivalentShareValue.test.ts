import * as dnum from "dnum";
import { calculateEquivalentShareValue } from "src/hyperdrive/calculateEquivalentShareValue";
import { expect, test } from "vitest";

test("calculateEquivalentShareValue should return how much an amount of shares are worth, given another amount of shares and their value", async () => {
  const value = calculateEquivalentShareValue({
    targetShares: dnum.from("10", 18)[0],
    referenceShares: dnum.from("10", 18)[0],
    totalReferenceValue: dnum.from("20", 18)[0],
    decimals: 18,
  });

  expect(value).toEqual(dnum.from("20", 18)[0]);
});
