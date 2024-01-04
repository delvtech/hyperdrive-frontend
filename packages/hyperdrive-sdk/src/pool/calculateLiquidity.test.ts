import { expect, test } from "vitest";
import { calculateLiquidity } from "src/pool/calculateLiquidity";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { mockPoolInfo } from "src/pool/testing/PoolInfo";
import { setupReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/testing/setupReadHyperdrive";

test("calculateLiquidity should return the liquidity for a given market", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();
  contract.stubRead({
    functionName: "getPoolInfo",
    args: [],
    value: [mockPoolInfo],
  });
  const poolInfo = await readHyperdrive.getPoolInfo();
  const liquidity = calculateLiquidity({
    lpSharePrice: poolInfo.lpSharePrice,
    shareReserves: calculateEffectiveShareReserves({
      shareReserves: poolInfo.shareReserves,
      shareAdjustment: poolInfo.shareAdjustment,
    }),
    longsOutstanding: poolInfo.longsOutstanding,
    decimals: 18,
  });

  expect(liquidity).toEqual(50000000000000000000000n);
});
