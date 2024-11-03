import {
  ContractReadOptions,
  Drift,
  ReadWriteAdapter,
  ReadWriteContract,
  ReplaceProps,
} from "@delvtech/drift";
import { Address } from "abitype";
import { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadRegistry, ReadRegistryOptions } from "src/registry/ReadRegistry";
import { RegistryAbi } from "src/registry/abi";
import { ReadWriteInstanceInfoWithMetadata } from "src/registry/types";

export interface ReadWriteRegistryOptions
  extends ReplaceProps<ReadRegistryOptions, ReadWriteContractModelOptions> {}

export class ReadWriteRegistry extends ReadRegistry {
  declare drift: Drift<ReadWriteAdapter>;
  declare contract: ReadWriteContract<RegistryAbi>;

  constructor(options: ReadWriteRegistryOptions) {
    super(options);
  }

  /**
   * Get a {@linkcode ReadWriteFactory} instance for each registered factory.
   */
  async getFactories(
    options?: ContractReadOptions,
  ): Promise<ReadWriteFactory[]> {
    const factoryAddresses = await this.getFactoryAddresses(options);
    return factoryAddresses.map(
      (address) =>
        new ReadWriteFactory({
          address,
          drift: this.drift,
          cache: this.contract.cache,
          cacheNamespace: this.contract.cacheNamespace,
        }),
    );
  }

  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * registered in the registry.
   */
  async getInstances(
    options?: ContractReadOptions,
  ): Promise<ReadWriteHyperdrive[]> {
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
          cache: this.contract.cache,
          cacheNamespace: this.contract.cacheNamespace,
        }),
    );
  }

  async getInstanceInfo(
    instanceAddress: Address,
    options?: ContractReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata> {
    const { kind, name, version, data, factory } = await this.contract.read(
      "getInstanceInfoWithMetadata",
      { _instance: instanceAddress },
      options,
    );
    return {
      kind,
      name,
      version,
      data: `0x${data.toString(16)}`,
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      }),
    };
  }

  /**
   * Gets the instance info with associated metadata for a list of instances.
   */
  async getInstanceInfos(
    instanceAddresses: Address[],
    options?: ContractReadOptions,
  ): Promise<ReadWriteInstanceInfoWithMetadata[]> {
    const infos = await this.contract.read(
      "getInstanceInfosWithMetadata",
      { __instances: instanceAddresses },
      options,
    );
    return infos.map(({ kind, name, version, data, factory }) => ({
      kind,
      name,
      version,
      data: `0x${data.toString(16)}`,
      factory: new ReadWriteFactory({
        address: factory,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      }),
    }));
  }
}
