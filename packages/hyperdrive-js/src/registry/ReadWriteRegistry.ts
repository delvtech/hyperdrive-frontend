import {
  Drift,
  ReadOptions,
  ReadWriteAdapter,
  ReadWriteContract,
  Replace,
} from "@delvtech/drift";
import { Address } from "abitype";
import { ReadWriteContractClientOptions } from "src/drift/ContractClient";
import { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadRegistry, ReadRegistryOptions } from "src/registry/ReadRegistry";
import { RegistryAbi } from "src/registry/abi";
import { ReadWriteInstanceInfoWithMetadata } from "src/registry/types";

export interface ReadWriteRegistryOptions
  extends Replace<ReadRegistryOptions, ReadWriteContractClientOptions> {}

export class ReadWriteRegistry extends ReadRegistry {
  declare drift: Drift<ReadWriteAdapter>;
  declare contract: ReadWriteContract<RegistryAbi>;

  constructor(options: ReadWriteRegistryOptions) {
    super(options);
  }

  /**
   * Get a {@linkcode ReadWriteFactory} instance for each registered factory.
   */
  async getFactories(options?: ReadOptions): Promise<ReadWriteFactory[]> {
    const factoryAddresses = await this.getFactoryAddresses(options);
    return factoryAddresses.map(
      (address) =>
        new ReadWriteFactory({
          address,
          drift: this.drift,
          epochBlock: this.contract.epochBlock,
        }),
    );
  }

  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * registered in the registry.
   */
  async getInstances(options?: ReadOptions): Promise<ReadWriteHyperdrive[]> {
    const count = await this.contract.read("getNumberOfInstances", {}, options);

    if (count === 0n) {
      return [];
    }

    const hyperdriveAddresses = await this.contract.read(
      "getInstancesInRange",
      {
        _startIndex: 0n,
        _endIndex: count,
      },
      options,
    );
    return hyperdriveAddresses.map(
      (address) =>
        new ReadWriteHyperdrive({
          address,
          drift: this.drift,
          epochBlock: this.contract.epochBlock,
        }),
    );
  }

  async getInstanceInfo(
    instanceAddress: Address,
    options?: ReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata> {
    const { factory, ...rest } = await this.contract.read(
      "getInstanceInfoWithMetadata",
      { _instance: instanceAddress },
      options,
    );
    return {
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
        epochBlock: this.contract.epochBlock,
      }),
      ...rest,
    };
  }

  /**
   * Gets the instance info with associated metadata for a list of instances.
   */
  async getInstanceInfos(
    instanceAddresses: readonly Address[],
    options?: ReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata[]> {
    const infos = await this.contract.read(
      "getInstanceInfosWithMetadata",
      { __instances: instanceAddresses },
      options,
    );
    return infos.map(({ factory, ...rest }) => ({
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
        epochBlock: this.contract.epochBlock,
      }),
      ...rest,
    }));
  }
}
