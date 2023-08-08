import { expect, test } from "vitest";

import { parseUnits, getContract } from "viem";
import { publicClient, testClient, walletClient } from "src/testing/utils";
import { getOpenLongs } from "src/amm/longs/getOpenLongs/getOpenLongs";
import { ALICE } from "src/testing/accounts";
import { TestAddresses } from "src/addresses/test";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ERC20MintableABI } from "src/abis/ERC20Mintable";

test("returns the users open longs", async () => {
  //   await testClient.setLoggingEnabled(true);

  // Alice starts out without any longs or base tokens
  const initialLongs = await getOpenLongs({
    publicClient,
    account: ALICE,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });
  const alicesBalanceOfBase = await publicClient.readContract({
    abi: ERC20MintableABI,
    address: TestAddresses.baseToken,
    functionName: "balanceOf",
    args: [ALICE],
  });
  expect(initialLongs).toStrictEqual([]);
  expect(alicesBalanceOfBase).toStrictEqual(0n);

  // she mints some base
  testClient.setLoggingEnabled(true);
  const { request, result } = await publicClient.simulateContract({
    abi: ERC20MintableABI,
    address: TestAddresses.baseToken,
    functionName: "mint",
    args: [TestAddresses.mockHyperdrive, parseUnits("10000000000", 18)],
  });
  console.log("result", result);
  console.log(
    "blockNumber before tx receipt",
    await publicClient.getBlockNumber(),
  );

  const hash = await walletClient.writeContract(request);
  console.log("pending txpool content", await testClient.getTxpoolContent());

  const { blockNumber } = await publicClient.waitForTransactionReceipt({
    hash,
  });
  console.log("blockNumber in tx receipt", blockNumber);

  //   console.log("before", await publicClient.getBlockNumber());
  await testClient.mine({ blocks: 5 });
  console.log(
    "blockNumber after force mining",
    await publicClient.getBlockNumber(),
  );
  //   console.log("after", await publicClient.getBlockNumber());
  const afterMint = await publicClient.readContract({
    abi: ERC20MintableABI,
    address: TestAddresses.baseToken,
    functionName: "balanceOf",
    args: [ALICE],
  });
  expect(afterMint).toBe(parseUnits("10000000000", 18));

  //   // she gives an allowance to the hyperdrive instance
  //     await baseContract.write.approve(
  //       [TestAddresses.mockHyperdrive, parseUnits("10000000000", 18)],
  //       { account: ALICE },
  //     );
  //     await testClient.mine({ blocks: 1 });

  //   console.log("before", await publicClient.getBlockNumber());
  //   // Alice opens a long
  //   const asdf = await publicClient.simulateContract({
  //     abi: HyperdriveABI,
  //     functionName: "openLong",
  //     account: ALICE,
  //     address: TestAddresses.mockHyperdrive,
  //     args: [parseUnits("100", 18), 1n, ALICE, true],
  //     value: 0n,
  //   });
  //   await walletClient.writeContract({
  //     abi: HyperdriveABI,
  //     functionName: "openLong",
  //     account: ALICE,
  //     address: TestAddresses.mockHyperdrive,
  //     args: [parseUnits("100", 18), 1n, ALICE, true],
  //     value: 0n,
  //   });

  //   await testClient.mine({ blocks: 1 });
  //   console.log("testClient", testClient, await testClient.getTxpoolContent());

  //   console.log("after", await publicClient.getBlockNumber());
  //   // Alice opens a long
  //   const afterLongs = await getOpenLongs({
  //     publicClient,
  //     account: ALICE,
  //     hyperdriveAddress: TestAddresses.mockHyperdrive,
  //   });

  //   expect(afterLongs).toStrictEqual([]);
});
