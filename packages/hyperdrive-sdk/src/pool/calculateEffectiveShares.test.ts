import { expect, test } from "vitest";
import { calculateEffectiveShareReserves } from "src/pool/calculateEffectiveShares";
import { mockPoolInfo } from "src/pool/testing/PoolInfo";
import { setupReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/testing/setupReadHyperdrive";

test("calculateEffectiveShares should return `shareReserves - shareAdjustment`", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();
  contract.stubRead({
    functionName: "getPoolInfo",
    args: [],
    value: [mockPoolInfo],
  });
  const poolInfo = await readHyperdrive.getPoolInfo();
  const effectiveShares = calculateEffectiveShareReserves({
    shareReserves: poolInfo.shareReserves,
    shareAdjustment: poolInfo.shareAdjustment,
  });

  expect(effectiveShares).toEqual(50000000000000000000000n);
});
