import { expect, test } from "vitest";
import { calculateLiquidity } from "./calculateLiquidity";
import { calculateEffectiveShareReserves } from "./calculateEffectiveShares";

test("calculateLiquidity should return the liquidity for a given market", async () => {
  const liquidity = calculateLiquidity(
    1001353672959904753n,
    calculateEffectiveShareReserves(
      100000119271191525861204752n,
      -10715885395142403501106n,
    ),
    100085446136514194530n,
    18,
  );

  expect(liquidity).toEqual(100146117034389494757221591n);
});
