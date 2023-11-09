import { expect, test } from "vitest";
import * as dnum from "dnum";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { simplePoolConfig } from "src/pool/testing/simplePoolConfig";
import { simplePoolInfo } from "src/pool/testing/simplePoolInfo";
import { ALICE, BOB } from "src/base/testing/accounts";
import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import {
  CachedReadContract,
  NetworkStub,
  ReadContractStub,
} from "@hyperdrive/evm-client";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";

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
// TODO: Refactor this test once the Rust SDK available
test("getFixedRate should get the fixed rate as-is", async () => {
  const { contract, mathContract, readHyperdrive } = setupReadHyperdrive();

  // These are necessary to stub, but the values won't be used since we stub
  // calculateAPRFromReserves directly
  contract.stubRead({
    functionName: "getPoolConfig",
    args: [],
    value: [simplePoolConfig],
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    args: [],
    value: [simplePoolInfo],
  });

  mathContract.stubRead({
    functionName: "calculateSpotAPR",
    args: [0n, 0n, 0n, 0n, 0n],
    value: [1n],
  });

  const value = await readHyperdrive.getSpotRate();
  expect(value).toBe(1n);
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

function setupReadHyperdrive() {
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
