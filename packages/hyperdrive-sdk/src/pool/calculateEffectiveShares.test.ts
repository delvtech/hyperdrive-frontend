import { expect, test } from "vitest";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { simplePoolInfo } from "src/pool/testing/PoolInfo";

test("calculateEffectiveShares should return `shareReserves - shareAdjustment`", async () => {
  const effectiveShares = calculateEffectiveShareReserves({
    shareReserves: simplePoolInfo.shareReserves,
    shareAdjustment: simplePoolInfo.shareAdjustment,
  });

  expect(effectiveShares).toEqual(10000000000000000000000000n);
});
