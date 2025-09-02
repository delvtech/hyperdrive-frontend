import { ZERO_ADDRESS } from "@delvtech/drift";
import {
  createMockDrift,
  createStubBlock,
  type MockContract,
  type MockDrift,
} from "@delvtech/drift/testing";
import type { HyperdriveAbi } from "src/hyperdrive/abi";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";

export function setupReadHyperdrive(): {
  drift: MockDrift;
  contract: MockContract<HyperdriveAbi>;
  readHyperdrive: ReadHyperdrive;
} {
  const drift = createMockDrift();
  const readHyperdrive = new ReadHyperdrive({
    address: ZERO_ADDRESS,
    drift,
  });
  const contract = drift.contract({
    abi: readHyperdrive.contract.abi,
    address: readHyperdrive.contract.address,
  });
  drift.onGetBlock().resolves(createStubBlock());
  contract.onRead("decimals").resolves(18);
  return {
    drift,
    contract,
    readHyperdrive,
  };
}
