import {
  Drift,
  ReadOptions,
  ReadWriteAdapter,
  ReadWriteContract,
  type Replace,
} from "@delvtech/drift";
import { ReadWriteContractClientOptions } from "src/drift/ContractClient";
import { ReadFactory, ReadFactoryOptions } from "src/factory/ReadFactory";
import { FactoryAbi } from "src/factory/abi";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";

export interface ReadWriteFactoryOptions
  extends Replace<ReadFactoryOptions, ReadWriteContractClientOptions> {}

export class ReadWriteFactory extends ReadFactory {
  declare contract: ReadWriteContract<FactoryAbi>;
  declare drift: Drift<ReadWriteAdapter>;

  constructor(options: ReadWriteFactoryOptions) {
    super(options);
  }

  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * deployed by the deployer factory.
   */
  async getInstances(options?: ReadOptions): Promise<ReadWriteHyperdrive[]> {
    const hyperdriveAddresses = await this.getInstanceAddresses(options);
    return hyperdriveAddresses.map(
      (address) =>
        new ReadWriteHyperdrive({
          address,
          drift: this.drift,
          epochBlock: this.contract.epochBlock,
        }),
    );
  }
}
