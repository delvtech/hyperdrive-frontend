import { expect, test } from "vitest";
import { calculateEffectiveShareReserves } from "./calculateEffectiveShares";

test("calculateEffectiveShares should return `shareReserves - shareAdjustment`", async () => {
  const effectiveShares = calculateEffectiveShareReserves(
    100000119271191525861204752n,
    -10715885395142403501106n,
  );

  expect(effectiveShares).toEqual(100010835156586668264705858n);
});
