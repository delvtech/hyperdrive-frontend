import { ALICE, BOB } from "src/testing/accounts";
import { wagmiContract } from "src/testing/exampleContract";
import { walletClient, publicClient } from "src/testing/utils";
import { type Address, isAddress } from "viem";
import { beforeAll, expect, test } from "vitest";

let wagmi: Address;
beforeAll(async () => {
  const hash = await walletClient.deployContract({
    ...wagmiContract,
    // This account is already unlocked by anvil. If you were to use an account that is not unlocked, you'd
    // have to impersonate it first using `testClient.impersonateAccount(<account>)`.
    account: ALICE,
  });

  const receipt = await publicClient.waitForTransactionReceipt({
    hash,
  });

  // rome-ignore lint/style/noNonNullAssertion: this is guaranteed to be set.
  wagmi = receipt.contractAddress!;
});

test("can deploy the wagmi contract", async () => {
  expect(wagmi).toBeDefined();
  expect(isAddress(wagmi)).toBe(true);
});

test("can mint wagmi nfts", async () => {
  // Check that the balance is 0 before minting.
  const balanceBefore = await publicClient.readContract({
    address: wagmi,
    abi: wagmiContract.abi,
    functionName: "balanceOf",
    args: [ALICE],
  });

  expect(balanceBefore).toBe(0n);

  // NOTE: This is somewhat superfluous, in a test you could just use `writeContract` directly.
  console.log("before tx block", await publicClient.getBlockNumber());
  const { request } = await publicClient.simulateContract({
    account: ALICE, // This account is already unlocked by anvil.
    address: wagmi,
    abi: wagmiContract.abi,
    functionName: "mint",
    args: [1234n], // This is just the token id.
  });

  // NOTE: Our anvil instance is configured to use `auto mining`, meaning that every time a transaction
  // is sent to it, it automatically mines a block (default). This means that we don't have to mine a block
  // manually here or lose time waiting for the mining interval to pass. If this wasn't the case, you'd
  // have to add either use `testClient.mine` (in case auto mining is disabled), or
  // `publicClient.waitForTransactionReceipt` (in case interval mining is enabled).
  await walletClient.writeContract(request);

  // Check that the balance is what we expect it to be after minting.
  const balanceAfter = await publicClient.readContract({
    address: wagmi,
    abi: wagmiContract.abi,
    functionName: "balanceOf",
    args: [ALICE],
  });

  expect(balanceAfter).toBe(1n);
});
