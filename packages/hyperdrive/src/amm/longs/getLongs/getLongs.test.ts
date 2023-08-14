import { expect, test } from "vitest";

import { parseUnits, formatUnits, Address } from "viem";
import { publicClient } from "src/testing/utils";
import { ALICE } from "src/testing/accounts";
import { TestAddresses } from "src/addresses/test";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { getOpenLongPositions } from "src/amm/longs/getLongs/getLongs";
import { setupMintTokensAndApproveHyperdrive } from "src/amm/testing/setupMintTokensAndApproveHyperdrive";

test("should return the longs for a user's address", async () => {
  await setupMintTokensApproveHyperdriveAndOpenALong(ALICE);

  const longs = await getOpenLongPositions({
    account: ALICE,
    hyperdriveAddress: TestAddresses.mockHyperdrive,
    publicClient,
  });

  expect(longs).toStrictEqual([]);

  //   // Alice opens a long
  //   const baseAmountIn = parseUnits("100", 18);
  //   await publicClient.writeContract({
  //     abi: HyperdriveABI,
  //     functionName: "openLong",
  //     account: ALICE,
  //     address: TestAddresses.mockHyperdrive,
  //     args: [baseAmountIn, 1n, ALICE, true],
  //     value: 0n, // don't send any eth with this tx
  //   });
});

async function setupMintTokensApproveHyperdriveAndOpenALong(
  account: Address,
): Promise<void> {
  await setupMintTokensAndApproveHyperdrive(account);

  const baseAmountIn = parseUnits("100", 18);
  await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, 1n, ALICE, true],
    value: 0n, // don't send any eth with this tx
  });
}
