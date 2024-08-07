import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { Override } from "src/base/types";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { ReadFactory, ReadFactoryOptions } from "src/factory/ReadFactory";
import { FactoryAbi } from "src/factory/abi";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";

export interface ReadWriteFactoryOptions
  extends Override<ReadFactoryOptions, ReadWriteContractModelOptions> {}

export class ReadWriteFactory extends ReadFactory {
  declare contract: CachedReadWriteContract<FactoryAbi>;
  declare contractFactory: ReadWriteContractFactory;

  constructor(options: ReadWriteFactoryOptions) {
    super(options);
  }

  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * deployed by the deployer factory.
   */
  async getInstances(
    options?: ContractReadOptions
  ): Promise<ReadWriteHyperdrive[]> {
    const hyperdriveAddresses = await this.getInstanceAddresses(options);
    return hyperdriveAddresses.map(
      (address) =>
        new ReadWriteHyperdrive({
          address,
          contractFactory: this.contractFactory,
          network: this.network,
        })
    );
  }
}
