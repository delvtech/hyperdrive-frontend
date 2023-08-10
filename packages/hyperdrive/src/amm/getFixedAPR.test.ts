import { TestAddresses } from "src/addresses/test";
import { ALICE } from "src/testing/accounts";
import { publicClient } from "src/testing/utils";
import { parseUnits } from "viem";
import { expect, test } from "vitest";
import { HyperdriveABI } from "..";
import { getFixedAPR } from "./getFixedAPR";
import { getPoolConfig } from "./getPoolConfig/getPoolConfig";
import { getPoolInfo } from "./getPoolInfo";
import { setupMintTokensAndApproveHyperdrive } from "./testing/setupMintTokensAndApproveHyperdrive";

test("gets the fixed APR and verifies its change after opening a long position", async () => {
  const mockHyperdriveAddress = TestAddresses.mockHyperdrive;
  const mockHyperdriveMathAddress = TestAddresses.mockHyperdriveMath;

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
  const { apr: aprStart } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesStart,
    shareReserves: shareReservesStart,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });

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
  const { apr: aprFinish } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesFinish,
    shareReserves: shareReservesFinish,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });

  // Assert the APR value has decreased after opening a large long
  expect(aprFinish).toBeLessThan(aprStart);
});

test("gets the fixed APR and verifies its change after opening a short position", async () => {
  const mockHyperdriveAddress = TestAddresses.mockHyperdrive;
  const mockHyperdriveMathAddress = TestAddresses.mockHyperdriveMath;

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
  const { apr: aprStart } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesStart,
    shareReserves: shareReservesStart,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });

  // Open Short Position
  const baseAmountIn = parseUnits("100000", 18);
  const maxAmountOut = parseUnits("100001", 18);
  await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openShort",
    account: ALICE,
    address: mockHyperdriveAddress,
    args: [baseAmountIn, maxAmountOut, ALICE, true],
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
  const { apr: aprFinish } = await getFixedAPR({
    hyperdriveMathAddress: mockHyperdriveMathAddress,
    publicClient,
    bondReserves: bondReservesFinish,
    shareReserves: shareReservesFinish,
    initialSharePrice,
    positionDuration,
    timeStretch,
  });
  // Assert APR value has increased after opening a large short
  expect(aprStart).toBeLessThan(aprFinish);
});
