import { isHexString, ZERO_ADDRESS } from "@delvtech/drift";
import {
  createMockDrift,
  createStubBlock,
  type MockContract,
  type MockDrift,
} from "@delvtech/drift/testing";
import type { HyperdriveAbi } from "src/hyperdrive/abi";
import {
  ReadWriteHyperdrive,
  type ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";

export interface MockHyperdriveOptions
  extends Partial<ReadWriteHyperdriveOptions> {
  drift?: MockDrift;
}

export class MockHyperdrive extends ReadWriteHyperdrive {
  declare drift: MockDrift;
  declare contract: MockContract<HyperdriveAbi>;

  constructor({
    address = ZERO_ADDRESS,
    debugName = "Mock Hyperdrive",
    drift = createMockDrift(),
    eventQueryRetries = 0,
    ...restOptions
  }: MockHyperdriveOptions = {}) {
    super({ address, debugName, drift, eventQueryRetries, ...restOptions });
    this.drift.onGetBlock().callsFake(async (block) => {
      return createStubBlock({
        number: typeof block === "bigint" ? block : undefined,
        hash: isHexString(block) ? block : undefined,
      });
    });
    this.contract.onRead("decimals").resolves(18);
  }
}
