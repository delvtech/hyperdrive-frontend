import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";
import { expect, test } from "vitest";

test("calculateShortAccruedYield should return the yield a short has accrued since it was opened", async () => {
  const value = calculateShortAccruedYield({
    bondAmount: BigInt(100e18),
    openVaultSharePrice: BigInt(1.008e18),
    endingVaultSharePrice: BigInt(1.01e18),
    decimals: 18,
  });
  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current checkpoint price is 1.01, your accrued profit would
  // be 0.20.
  expect(value).toEqual(BigInt(0.2e18));
});
