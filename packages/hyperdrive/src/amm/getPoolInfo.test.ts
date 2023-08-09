import { parseUnits } from "src/base/parseUnits";
import { publicClient, testClient, walletClient } from "src/testing/utils";
import { expect, test } from "vitest";
import { ERC20MintableABI, HyperdriveABI, getPoolInfo } from "..";

test("poolInfo changes after a trade", async () => {
  await testClient.setLoggingEnabled(true);

  const [account] = await walletClient.getAddresses();

  // Constants
  const ERC20_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const HYPERDRIVE_ADDRESS = "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81";
  const AMOUNT = parseUnits("100", 18);
  const MIN_AMOUNT = 1n;

  // Approve ERC20 tokens
  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: ERC20_ADDRESS,
    account,
    functionName: "approve",
    args: [HYPERDRIVE_ADDRESS, AMOUNT],
  });

  // Mint ERC20 tokens
  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: ERC20_ADDRESS,
    account,
    functionName: "mint",
    args: [account, AMOUNT],
  });

  // Conduct initial trade
  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: HYPERDRIVE_ADDRESS,
    account,
    functionName: "openLong",
    args: [AMOUNT, MIN_AMOUNT, account, true],
    value: 0n,
  });

  // Get initial poolInfo
  const poolInfoStart = await getPoolInfo({
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

  // Get updated poolInfo
  const poolInfoFinish = await getPoolInfo({
    publicClient,
    hyperdriveAddress: HYPERDRIVE_ADDRESS,
  });

  // Expect poolInfo to have changed after the trade
  expect(poolInfoStart).not.toStrictEqual(poolInfoFinish);
});
