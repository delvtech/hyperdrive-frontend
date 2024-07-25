import { parseFixed } from "src/fixed-point";
import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";
import { expect, test } from "vitest";

test("calculateShortAccruedYield should return the yield a short has accrued since it was opened", async () => {
  const value = calculateShortAccruedYield({
    bondAmount: parseFixed(100).bigint,
    openVaultSharePrice: parseFixed(1.008).bigint,
    endingVaultSharePrice: parseFixed(1.01).bigint,
    decimals: 18,
  });
  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current checkpoint price is 1.01, your accrued profit would
  // be 0.20.
  expect(value).toEqual(parseFixed(0.2).bigint);
});
