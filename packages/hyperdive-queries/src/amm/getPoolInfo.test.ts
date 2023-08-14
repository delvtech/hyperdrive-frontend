import { TestAddresses } from "src/addresses/test";
import { parseUnits } from "src/base/parseUnits";
import { ALICE } from "src/testing/accounts";
import { publicClient } from "src/testing/utils";
import { expect, test } from "vitest";
import { HyperdriveABI, getPoolInfo } from "..";
import { setupMintTokensAndApproveHyperdrive } from "src/amm/testing/setupMintTokensAndApproveHyperdrive";

test("should observe an increase in longsOutstanding after executing two trades", async () => {
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

  // Expect the longsOutstanding to have increased in the poolInfo
  expect(longsOutstandingStart).toBeLessThan(longsOutstandingFinish);
});
