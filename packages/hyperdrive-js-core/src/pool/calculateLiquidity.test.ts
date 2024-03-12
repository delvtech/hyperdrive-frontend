import { expect, test } from "vitest";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { simplePoolInfo } from "src/pool/testing/PoolInfo";

test("calculateLiquidity should return the liquidity for a given market", async () => {
  const liquidity = calculateLiquidity({
    lpSharePrice: simplePoolInfo.lpSharePrice,
    shareReserves: calculateEffectiveShareReserves({
      shareReserves: simplePoolInfo.shareReserves,
      shareAdjustment: simplePoolInfo.shareAdjustment,
    }),
    longsOutstanding: simplePoolInfo.longsOutstanding,
    decimals: 18,
  });

  expect(liquidity).toEqual(10000000000000000000000000n);
});
