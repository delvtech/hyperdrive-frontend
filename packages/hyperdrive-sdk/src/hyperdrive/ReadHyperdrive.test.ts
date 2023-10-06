import { expect, test } from "vitest";
import { ReadContractStub } from "src/contract/stubs/ReadContractStub";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { CachedReadContract } from "src/contract/cached/CachedReadContract";
import { NetworkStub } from "src/network/stubs/NetworkStub";
import { simplePoolConfig } from "src/pool/testing/simplePoolConfig";
import { simplePoolInfo } from "src/pool/testing/simplePoolInfo";

test("Should get the PoolConfig when getPoolConfig is called", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubRead("getPoolConfig", [simplePoolConfig]);

  const value = await readHyperdrive.getPoolConfig();
  expect(value).toBe(simplePoolConfig);
});

test("Should get the PoolInfo when getPoolInfo is called", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubRead("getPoolInfo", [simplePoolInfo]);

  const value = await readHyperdrive.getPoolInfo();
  expect(value).toBe(simplePoolInfo);
});

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

test("Should get the fixed rate when getFixedRate is called", async () => {
  const { contract, mathContract, readHyperdrive } = setupReadHyperdrive();

  // These are necessary to stub, but the values won't be used since we also
  // have to stub calculateAPRFromReserves directly
  contract.stubRead("getPoolConfig", [simplePoolConfig]);
  contract.stubRead("getPoolInfo", [simplePoolInfo]);

  mathContract.stubRead("calculateAPRFromReserves", [1n]);

  const value = await readHyperdrive.getFixedRate();
  expect(value).toBe(1n);
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
