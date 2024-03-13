import { expect, test } from "vitest";
import * as dnum from "dnum";
import { calculateShortAccruedYield } from "src/shorts/calculateShortAccruedYield";

test("calculateShortAccruedYield should return the yield a short has accrued since it was opened", async () => {
  const [sharePriceAtCheckpointOpened] = dnum.from("1.008", 18);
  const [currentSharePrice] = dnum.from("1.01", 18);

  const value = calculateShortAccruedYield({
    bondAmount: dnum.from("100", 18)[0],
    fromSharePrice: sharePriceAtCheckpointOpened,
    toSharePrice: currentSharePrice,
    decimals: 18,
  });
  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current checkpoint price is 1.01, your accrued profit would
  // be 0.20.
  expect(value).toEqual(dnum.from("0.20", 18)[0]);
});
