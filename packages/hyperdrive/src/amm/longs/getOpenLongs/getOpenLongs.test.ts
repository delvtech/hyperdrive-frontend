import { expect, test } from "vitest";

import { parseUnits, formatUnits, Address } from "viem";
import { publicClient } from "src/testing/utils";
import { getOpenLongs } from "src/amm/longs/getOpenLongs/getOpenLongs";
import { ALICE } from "src/testing/accounts";
import { TestAddresses } from "src/addresses/test";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ERC20MintableABI } from "src/abis/ERC20Mintable";
import { MAX_UINT256 } from "src/base/numbers";

test("returns the users open longs", async () => {
  await setupMintTokensAndApproveHyperdrive(ALICE);

  // Alice starts out without any longs
  const initialLongs = await getOpenLongs({
    publicClient,
    account: ALICE,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });
  expect(initialLongs).toHaveLength(0);

  // She opens a long
  const baseAmountIn = parseUnits("100", 18);
  await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, 1n, ALICE, true],
    value: 0n, // don't send any eth with this tx
  });

  // Now Alice has a long in her open longs list
  const openLongs = await getOpenLongs({
    publicClient,
    account: ALICE,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });
  expect(openLongs).toHaveLength(1);
  // And it matches what she paid for it
  expect(openLongs[0].baseAmountPaid).toEqual(baseAmountIn);

  // and her bond balance matches what she has open
  const balanceOfBonds = await publicClient.readContract({
    abi: HyperdriveABI,
    functionName: "balanceOf",
    address: TestAddresses.mockHyperdrive,
    args: [openLongs[0].assetId, ALICE],
  });
  expect(openLongs[0].bondAmount).toEqual(balanceOfBonds);

  // Then she closes all but 1n bonds
  await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "closeLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [
      openLongs[0].maturity,
      openLongs[0].bondAmount - 1n, // close all but 1n bonds
      1n,
      ALICE,
      true,
    ],
  });

  // and her open longs reflect that change
  const openLongsAfterPartialClosing = await getOpenLongs({
    publicClient,
    account: ALICE,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
  });
  expect(openLongsAfterPartialClosing).toHaveLength(1);
  expect(openLongsAfterPartialClosing[0].bondAmount).toEqual(1n);
  expect(
    // the amount of base you get back can be slightly different on each test
    // run, so we assert the value is close enough +/- some small amount
    +formatUnits(openLongsAfterPartialClosing[0].baseAmountPaid, 18),
  ).closeTo(0.019167099247425833, 0.000000001);
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
