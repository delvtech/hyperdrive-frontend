import { test, expect } from "vitest";
import { publicClient } from "src/testing/utils";
import { ALICE } from "src/testing/accounts";
import { parseUnits } from "viem";
import { setupMintTokensAndApproveHyperdrive } from "./testing/setupMintTokensAndApproveHyperdrive";
import { getFixedAPR } from "./getFixedAPR";
import { TestAddresses } from "src/addresses/test";
import { getPoolInfo } from "./getPoolInfo";
import { getPoolConfig } from "./getPoolConfig/getPoolConfig";
import { HyperdriveABI } from "..";

test("gets the fixed APR and verifies its change after opening a long position", async () => {
  const mockHyperdriveAddress = TestAddresses.mockHyperdrive;
  const mockHyperdriveMathAddress = TestAddresses.mockHyperdriveMath;
  const initialExpectedAPR = "5.00";
  const expectedAPRAfterPosition = "4.54";

  // Setup
  await setupMintTokensAndApproveHyperdrive(ALICE);

  // Fetch Initial Values
  const { bondReserves: bondReservesStart, shareReserves: shareReservesStart } =
    await getPoolInfo({
      hyperdriveAddress: mockHyperdriveAddress,
      publicClient,
    });
  const { initialSharePrice, positionDuration, timeStretch } =
    await getPoolConfig({
      hyperdriveAddress: mockHyperdriveAddress,
      publicClient,
    });
  const { formatted: formattedStart } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesStart,
    shareReserves: shareReservesStart,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });

  // Assert initial APR values
  expect(formattedStart).toStrictEqual(initialExpectedAPR);

  // Open Long Position
  const baseAmountIn = parseUnits("100000", 18);
  await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: mockHyperdriveAddress,
    args: [baseAmountIn, 1n, ALICE, true],
    value: 0n,
  });

  // Fetch Values After Opening Position
  const {
    bondReserves: bondReservesFinish,
    shareReserves: shareReservesFinish,
  } = await getPoolInfo({
    hyperdriveAddress: mockHyperdriveAddress,
    publicClient,
  });
  const { formatted: formattedFinish } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesFinish,
    shareReserves: shareReservesFinish,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });

  // Assert APR values after opening the position
  expect(formattedFinish).toStrictEqual(expectedAPRAfterPosition);
});
