import { parseUnits } from "src/base/parseUnits";
import { publicClient, testClient, walletClient } from "src/testing/utils";
import { expect, test } from "vitest";
import { ERC20MintableABI, HyperdriveABI, getPoolInfo } from "..";
import { Address } from "viem";
import { TestAddresses } from "src/addresses/test";
import { MAX_UINT256 } from "src/base/numbers";
test("poolInfo changes after a trade", async () => {
  await testClient.setLoggingEnabled(true);

  const [account] = await walletClient.getAddresses();

  // Constants
  const HYPERDRIVE_ADDRESS = "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81";
  const AMOUNT = parseUnits("100", 18);
  const MIN_AMOUNT = 1n;

  await setupMintTokensAndApproveHyperdrive(account);

  // Conduct initial trade
  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: HYPERDRIVE_ADDRESS,
    account,
    functionName: "openLong",
    args: [AMOUNT, MIN_AMOUNT, account, true],
    value: 0n,
  });

  // Get initial longsOutstanding
  const { longsOutstanding: longsOutstandingStart } = await getPoolInfo({
    publicClient,
    hyperdriveAddress: HYPERDRIVE_ADDRESS,
  });

  // Conduct another trade
  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: HYPERDRIVE_ADDRESS,
    account,
    functionName: "openLong",
    args: [AMOUNT, MIN_AMOUNT, account, true],
    value: 0n,
  });

  // Get updated longsOutstanding
  const { longsOutstanding: longsOutstandingFinish } = await getPoolInfo({
    publicClient,
    hyperdriveAddress: HYPERDRIVE_ADDRESS,
  });

  // Expect poolInfo to have changed after the trade
  expect(longsOutstandingStart).not.toStrictEqual(longsOutstandingFinish);
});

async function setupMintTokensAndApproveHyperdrive(account: Address) {
  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: TestAddresses.baseToken,
    functionName: "mint",
    args: [account, parseUnits("100000", 18)],
    account,
  });
  await publicClient.writeContract({
    functionName: "approve",
    account,
    address: TestAddresses.baseToken,
    args: [TestAddresses.mockHyperdrive, MAX_UINT256],
    abi: ERC20MintableABI,
  });
}
