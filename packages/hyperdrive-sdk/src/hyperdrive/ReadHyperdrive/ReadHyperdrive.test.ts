import { expect, test } from "vitest";
import * as dnum from "dnum";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { mockPoolConfig, simplePoolConfig } from "src/pool/testing/PoolConfig";
import { mockPoolInfo, simplePoolInfo } from "src/pool/testing/PoolInfo";
import { ALICE, BOB } from "src/base/testing/accounts";
import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import {
  CachedReadContract,
  NetworkStub,
  ReadContractStub,
} from "@hyperdrive/evm-client";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";
import { CheckpointEvent } from "src/pool/Checkpoint";

// The sdk should return the exact PoolConfig from the contracts. It should not
// do any conversions or transformations, eg: converting seconds to ms,
// formatting bigints, etc..
test("getPoolConfig should return the PoolConfig from the contract as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // stub out the contract call the sdk is going to make
  contract.stubRead({
    functionName: "getPoolConfig",
    args: [],
    value: [simplePoolConfig],
  });

  // The sdk should return the correct data
  const value = await readHyperdrive.getPoolConfig();
  expect(value).toBe(simplePoolConfig);
});

// The sdk should return the exact PoolInfo from the contracts. It should not do
// any conversions or transformations, eg: converting seconds into ms,
// formatting bigints, etc..
test("getPoolInfo should return the PoolInfo from the contract as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolInfo",
    args: [],
    value: [simplePoolInfo],
  });

  const value = await readHyperdrive.getPoolInfo();
  expect(value).toBe(simplePoolInfo);
});

// The sdk should return the exact APR from the contracts. It should not do any
// conversions or transformations, eg: formatting bigints, etc..
test("getFixedRate should get the fixed rate as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // These are necessary to stub, but the values won't be used since we stub
  // calculateAPRFromReserves directly
  contract.stubRead({
    functionName: "getPoolConfig",
    args: [],
    value: [mockPoolConfig],
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    args: [],
    value: [mockPoolInfo],
  });

  const value = await readHyperdrive.getSpotRate();
  expect(value).toBe(34999999999999999n);
});

test("getTradingVolume should get the trading volume in terms of bonds", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubEvents("OpenLong", [
    {
      eventName: "OpenLong",
      args: {
        assetId: 1n,
        baseAmount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("1.3", 18)[0],
        maturityTime: 1729209600n,
        sharePrice: 1n,
        trader: BOB,
      },
    },
    {
      eventName: "OpenLong",
      args: {
        assetId: 2n,
        baseAmount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: 1733961600n,
        sharePrice: 1n,
        trader: ALICE,
      },
    },
  ]);

  contract.stubEvents("OpenShort", [
    {
      eventName: "OpenShort",
      args: {
        assetId: 3n,
        baseAmount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("100", 18)[0],
        maturityTime: 1729296000n,
        sharePrice: 1n,
        trader: BOB,
      },
    },
    {
      eventName: "OpenShort",
      args: {
        assetId: 4n,
        baseAmount: dnum.from("2", 18)[0],
        bondAmount: dnum.from("190", 18)[0],
        maturityTime: 1729296000n,
        sharePrice: 1n,
        trader: BOB,
      },
    },
  ]);

  const value = await readHyperdrive.getTradingVolume();

  expect(value).toEqual({
    shortVolume: dnum.from("290", 18)[0], // sum of bondAmount in short events
    longVolume: dnum.from("2.7", 18)[0], // sum of bondAmount in long events
    totalVolume: dnum.from("292.7", 18)[0],
  });
});

test("getShortAccruedYield should return the amount of yield a non-mature position has earned", async () => {
  const { contract, network, readHyperdrive } = setupReadHyperdrive();

  network.stubGetBlock({
    value: Promise.resolve({ blockNumber: 1n, timestamp: 100n }),
  });

  contract.stubRead({
    functionName: "getPoolConfig",
    value: [
      {
        ...simplePoolConfig,
        positionDuration: 86400n, // one day in seconds
        checkpointDuration: 86400n, // one day in seconds
      },
    ],
  });

  // The pool info gives us the current price
  contract.stubRead({
    functionName: "getPoolInfo",
    value: [{ ...simplePoolInfo, sharePrice: dnum.from("1.01", 18)[0] }],
  });

  // The checkpoint gives us the price when the bond was opened
  contract.stubRead({
    functionName: "getCheckpoint",
    value: [{ sharePrice: dnum.from("1.008", 18)[0] }],
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointId: 0n,
    bondAmount: dnum.from("100", 18)[0],
    decimals: 18,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current price is 1.01, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(dnum.from("0.20", 18)[0]);
});

test("getShortAccruedYield should return the amount of yield a mature position has earned", async () => {
  const { network, contract, readHyperdrive } = setupReadHyperdrive();

  network.stubGetBlock({
    value: Promise.resolve({ blockNumber: 1n, timestamp: 1699503565n }),
  });
  contract.stubRead({
    functionName: "getPoolConfig",
    value: [
      {
        ...simplePoolConfig,
        positionDuration: 86400n, // one day in seconds
        checkpointDuration: 86400n, // one day in seconds
      },
    ],
  });

  // This checkpoint gives us the price when the short was opened
  contract.stubRead({
    functionName: "getCheckpoint",
    args: [1n],
    value: [{ sharePrice: dnum.from("1.008", 18)[0] }],
  });

  // This checkpoint gives us the price when the shorts matured
  contract.stubRead({
    functionName: "getCheckpoint",
    args: [86401n],
    value: [{ sharePrice: dnum.from("1.01", 18)[0] }],
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointId: 1n,
    bondAmount: dnum.from("100", 18)[0],
    decimals: 18,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the price was 1.01 at maturity, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(dnum.from("0.20", 18)[0]);
});

test("getCheckpointEvents should return an array of CheckpointEvents", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();
  const checkPointEvents = [
    {
      eventName: "CreateCheckpoint",
      args: {
        sharePrice: 423890n,
        checkpointTime: 1699480800n,
        lpSharePrice: 1000276463406900050n,
        maturedLongs: 1010694n,
        maturedShorts: 0n,
      },
    },
    {
      eventName: "CreateCheckpoint",
      args: {
        sharePrice: 1000378348050038939n,
        checkpointTime: 1729299000n,
        lpSharePrice: 80120n,
        maturedLongs: 923162n,
        maturedShorts: 230904n,
      },
    },
  ] as CheckpointEvent[];
  contract.stubEvents("CreateCheckpoint", checkPointEvents);

  const events = await readHyperdrive.getCheckpointEvents({});

  expect(events).toEqual(checkPointEvents);
});

// No need to explicitly set return types as they are alread set in the Stubs
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const contract = new ReadContractStub(IHyperdrive.abi);
  const cachedContract = new CachedReadContract({ contract });

  const mathContract = new ReadContractStub(MockHyperdriveMath.abi);
  const cachedMathContract = new CachedReadContract({ contract: mathContract });

  const network = new NetworkStub();

  const readHyperdrive = new ReadHyperdrive({
    contract: cachedContract,
    mathContract: cachedMathContract,
    network: network,
  });

  return { contract, mathContract, network, readHyperdrive };
}
