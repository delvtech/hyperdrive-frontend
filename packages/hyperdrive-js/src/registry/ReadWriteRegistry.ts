import { ContractReadOptions, ReadWriteAdapter } from "@delvtech/drift";
import { Address } from "abitype";
import { SdkContractConfig } from "src/drift/SdkClient";
import { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadRegistry } from "src/registry/ReadRegistry";
import { ReadWriteInstanceInfoWithMetadata } from "src/registry/types";

export class ReadWriteRegistry<
  A extends ReadWriteAdapter = ReadWriteAdapter,
> extends ReadRegistry<A> {
  constructor(options: SdkContractConfig<A>) {
    super(options);
  }

  /**
   * Get a {@linkcode ReadWriteFactory} instance for each registered factory.
   */
  async getFactories(
    options?: ContractReadOptions,
  ): Promise<ReadWriteFactory<A>[]> {
    const factoryAddresses = await this.getFactoryAddresses(options);
    return factoryAddresses.map(
      (address) =>
        new ReadWriteFactory({
          address,
          drift: this.drift,
        }),
    );
  }

  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * registered in the registry.
   */
  async getInstances(
    options?: ContractReadOptions,
  ): Promise<ReadWriteHyperdrive<A>[]> {
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
        }),
    );
  }

  async getInstanceInfo(
    instanceAddress: Address,
    options?: ContractReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata<A>> {
    const { factory, ...rest } = await this.contract.read(
      "getInstanceInfoWithMetadata",
      { _instance: instanceAddress },
      options,
    );
    return {
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
      }),
      ...rest,
    };
  }

  /**
   * Gets the instance info with associated metadata for a list of instances.
   */
  async getInstanceInfos(
    instanceAddresses: Address[],
    options?: ContractReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata<A>[]> {
    const infos = await this.contract.read(
      "getInstanceInfosWithMetadata",
      { __instances: instanceAddresses },
      options,
    );
    return infos.map(({ factory, ...rest }) => ({
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
      }),
      ...rest,
    }));
  }
}
