import { parseUnits } from "src/base/parseUnits";
import { publicClient, testClient, walletClient } from "src/testing/utils";
import { expect, test } from "vitest";
import { ERC20MintableABI, HyperdriveABI, getPoolInfo } from "..";

test("gets the poolInfo", async () => {
  await testClient.setLoggingEnabled(true);

  const poolInfoStart = await getPoolInfo({
    publicClient,
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
  });

  const [account] = await walletClient.getAddresses();

  // Define the amount
  const amount = parseUnits("100", 18);

  // Make the minAmount to account for slippage
  const minAmount = 1n;

  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    account,
    functionName: "approve",
    args: ["0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81", amount],
    // gas: 1391291n,
  });

  await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    account,
    functionName: "mint",
    args: [account, amount],
  });

  await publicClient.simulateContract({
    abi: HyperdriveABI,
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    account,
    functionName: "openLong",
    args: [amount, minAmount, account, true],
    value: 0n,
  });

  await publicClient.writeContract({
    abi: HyperdriveABI,
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    account,
    functionName: "openLong",
    args: [amount, minAmount, account, true],
    value: 0n,
  });

  const poolInfoFinish = await getPoolInfo({
    publicClient,
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
  });

  //expoect poolinfo to be different
  expect(poolInfoStart).not.toStrictEqual(poolInfoFinish);
});
