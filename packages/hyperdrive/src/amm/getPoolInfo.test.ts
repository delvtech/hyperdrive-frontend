import { TestAddresses } from "src/addresses/test";
import { parseUnits } from "src/base/parseUnits";
import { ALICE } from "src/testing/accounts";
import { publicClient } from "src/testing/utils";
import { expect, test } from "vitest";
import { HyperdriveABI, getPoolInfo } from "..";
import { setupMintTokensAndApproveHyperdrive } from "./testing/setupMintTokensAndApproveHyperdrive";

test("poolInfo changes after a trade", async () => {
  // Constants
  const baseAmountIn = parseUnits("100", 18);
  const minAmountOut = 1n;

  await setupMintTokensAndApproveHyperdrive(ALICE);

  // Conduct initial trade
  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: TestAddresses.mockHyperdrive,
    account: ALICE,
    functionName: "openLong",
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n,
  });

  // Get initial longsOutstanding
  const { longsOutstanding: longsOutstandingStart } = await getPoolInfo({
    publicClient,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });

  // Conduct another trade
  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: TestAddresses.mockHyperdrive,
    account: ALICE,
    functionName: "openLong",
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n,
  });

  // Get updated longsOutstanding
  const { longsOutstanding: longsOutstandingFinish } = await getPoolInfo({
    publicClient,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });

  // Expect poolInfo to have changed after the trade
  expect(longsOutstandingStart).not.toStrictEqual(longsOutstandingFinish);
});
