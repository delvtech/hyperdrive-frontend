import { calculateEquivalentShareValue } from "src/hyperdrive/calculateEquivalentShareValue";
import { expect, test } from "vitest";

test("calculateEquivalentShareValue should return how much an amount of shares are worth, given another amount of shares and their value", async () => {
  const value = calculateEquivalentShareValue({
    targetShares: 10_00n,
    referenceShares: 10_00n,
    totalReferenceValue: 20_00n,
    decimals: 2,
  });

  expect(value).toEqual(20_00n);
});
