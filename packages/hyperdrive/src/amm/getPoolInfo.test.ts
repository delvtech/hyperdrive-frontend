import { test } from "vitest";
import { getContract } from "viem";
import { publicClient, testClient, walletClient } from "src/testing/utils";
import { ERC20MintableABI, HyperdriveABI, getOpenLongs, getPoolInfo } from "..";
import { parseUnits } from "src/base/parseUnits";

// const baseContract = getContract({
//   abi: HyperdriveABI,
//   address:
// })

async function setup() {}

test("gets the poolInfo", async () => {
  await testClient.setLoggingEnabled(true);
  const [account] = await walletClient.getAddresses();
  // console.log(account, "account");
  // Define the amount
  const amount = parseUnits("100", 18);

  // Make the minAmount to account for slippage
  const minAmount = 1n;

  const approve = await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    account,
    functionName: "approve",
    args: ["0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81", amount],
    // gas: 1391291n,
  });

  const approveReceipt = await publicClient.waitForTransactionReceipt({
    hash: approve,
  });
  // console.log(approveReceipt, "approveReceipt");

  const allowance = await publicClient.readContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "allowance",
    args: [account, "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81"],
  });

  // console.log(allowance, "allowance");

  const amountOfBase = await publicClient.readContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "balanceOf",
    args: [account],
  });
  // console.log(amountOfBase, "amountOfBase");

  const mint = await publicClient.writeContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    account,
    functionName: "mint",
    args: [account, amount],
  });

  const amountOfBaseAfter = await publicClient.readContract({
    abi: ERC20MintableABI,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "balanceOf",
    args: [account],
  });
  // console.log(amountOfBaseAfter, "amountOfBaseAfter");
  const simulation = await publicClient.simulateContract({
    abi: HyperdriveABI,
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    account,
    functionName: "openLong",
    args: [amount, minAmount, account, true],
    value: 0n,
    // gas: 1391291n,
  });

  const { result } = simulation;
  console.log(result, "result");

  // console.log(simulation, "simulation");
  const tx = await publicClient.writeContract({
    abi: HyperdriveABI,
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    account,
    functionName: "openLong",
    args: [amount, minAmount, account, true],
    value: 0n,
    // gas: 1391291n,
  });

  const openLongs = await getOpenLongs({
    publicClient,
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    account,
  });
  console.log(openLongs, "openLongs!");

  // const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });
  // console.log(receipt, "receipt!");

  const poolInfo = await getPoolInfo({
    publicClient,
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
  });
  console.log(poolInfo, "poolInfo!");
});
