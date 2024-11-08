import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";
import { expect, test } from "vitest";

test("calculateShortAccruedYield should return the yield a short has accrued since it was opened", async () => {
  const value = calculateShortAccruedYield({
    bondAmount: 100_000n,
    openVaultSharePrice: 1_008n,
    endingVaultSharePrice: 1_010n,
    decimals: 3,
  });
  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current checkpoint price is 1.01, your accrued profit would
  // be 0.20.
  expect(value).toEqual(200n);
});
