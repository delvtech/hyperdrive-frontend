import { expect, test } from "vitest";
import * as dnum from "dnum";
import { ReadContractStub } from "src/contract/stubs/ReadContractStub/ReadContractStub";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { CachedReadContract } from "src/contract/cached/CachedReadContract/CachedReadContract";
import { NetworkStub } from "src/network/stubs/NetworkStub";
import { simplePoolConfig } from "src/pool/testing/simplePoolConfig";
import { simplePoolInfo } from "src/pool/testing/simplePoolInfo";
import { ALICE, BOB } from "src/base/testing/accounts";

// The sdk should return the exact PoolConfig from the contracts. It should not
// do any conversions or transformations, eg: converting seconds to ms,
// formatting bigints, etc..
test("Should return the PoolConfig from the contract as-is when getPoolConfig is called", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // stub out the contract call the sdk is going to make
  contract.stubRead("getPoolConfig", [simplePoolConfig]);

  // The sdk should return the correct data
  const value = await readHyperdrive.getPoolConfig();
  expect(value).toBe(simplePoolConfig);
});

// The sdk should return the exact PoolInfo from the contracts. It should not do
// any conversions or transformations, eg: converting seconds into ms,
// formatting bigints, etc..
test("Should return the PoolInfo from the contract as-is when getPoolInfo is called", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubRead("getPoolInfo", [simplePoolInfo]);

  const value = await readHyperdrive.getPoolInfo();
  expect(value).toBe(simplePoolInfo);
});

// The sdk should return the exact APR from the contracts. It should not do any
// conversions or transformations, eg: formatting bigints, etc..
test("Should get the fixed rate when getFixedRate is called", async () => {
  const { contract, mathContract, readHyperdrive } = setupReadHyperdrive();

  // These are necessary to stub, but the values won't be used since we stub
  // calculateAPRFromReserves directly
  contract.stubRead("getPoolConfig", [simplePoolConfig]);
  contract.stubRead("getPoolInfo", [simplePoolInfo]);

  mathContract.stubRead("calculateAPRFromReserves", [1n]);

  const value = await readHyperdrive.getFixedRate();
  expect(value).toBe(1n);
});

test("Should get the trading volume in terms of bonds when getTradingVolume is called", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubEvents("OpenLong", [
    {
      eventName: "OpenLong",
      args: {
        assetId: 1n,
        baseAmount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("1.3", 18)[0],
        maturityTime: 1729209600n,
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
        trader: BOB,
      },
    },
  ]);

  const value = await readHyperdrive.getTradingVolume();

  expect(value).toEqual({
    totalVolume: dnum.from("292.7", 18)[0],
    shortVolume: dnum.from("290", 18)[0],
    longVolume: dnum.from("2.7", 18)[0],
  });
});

function setupReadHyperdrive() {
  const contract = new ReadContractStub(HyperdriveABI);
  const cachedContract = new CachedReadContract({ contract });

  const mathContract = new ReadContractStub(HyperdriveMathABI);
  const cachedMathContract = new CachedReadContract({ contract: mathContract });

  const network = new NetworkStub();

  const readHyperdrive = new ReadHyperdrive({
    contract: cachedContract,
    mathContract: cachedMathContract,
    network: network,
  });

  return { contract, mathContract, network, readHyperdrive };
}
