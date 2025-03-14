import { Contract, ContractReadOptions } from "@delvtech/drift";
import { Address } from "abitype";
import { ReadContractClientOptions } from "src/drift/ContractClient";
import { ReadClient } from "src/drift/ReadClient";
import { ReadFactory } from "src/factory/ReadFactory";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";
import { RegistryAbi, registryAbi } from "src/registry/abi";
import {
  FactoryInfoWithMetadata,
  ReadInstanceInfoWithMetadata,
} from "src/registry/types";

export interface ReadRegistryOptions extends ReadContractClientOptions {}

export class ReadRegistry extends ReadClient {
  address: Address;
  contract: Contract<RegistryAbi>;

  constructor({
    debugName = "Hyperdrive Registry",
    address,
    cache,
    cacheNamespace,
    ...rest
  }: ReadRegistryOptions) {
    super({ debugName, ...rest });
    this.address = address;
    this.contract = this.drift.contract({
      abi: registryAbi,
      address,
      cache,
      cacheNamespace,
    });
  }

  /**
   * Get a {@linkcode ReadFactory} instance for each registered factory.
   */
  async getFactories(options?: ContractReadOptions): Promise<ReadFactory[]> {
    const factoryAddresses = await this.getFactoryAddresses(options);
    return factoryAddresses.map(
      (address) =>
        new ReadFactory({
          address,
          drift: this.drift,
          cache: this.contract.cache,
          cacheNamespace: this.contract.cacheNamespace,
        }),
    );
  }

  /**
   * Get the address of all registered factories.
   */
  async getFactoryAddresses(options?: ContractReadOptions): Promise<Address[]> {
    const count = await this.contract.read("getNumberOfFactories", {}, options);

    if (count === 0n) {
      return [];
    }

    const readOnlyAddresses = await this.contract.read(
      "getFactoriesInRange",
      {
        _startIndex: 0n,
        _endIndex: count,
      },
      options,
    );
    return readOnlyAddresses.slice();
  }

  /**
   * Gets the Hyperdrive factory info with associated metadata for a factory.
   */
  async getFactoryInfo(
    factoryAddress: Address,
    options?: ContractReadOptions,
  ): Promise<FactoryInfoWithMetadata> {
    return this.contract.read(
      "getFactoryInfoWithMetadata",
      { _factory: factoryAddress },
      options,
    );
  }

  /**
   * Gets the Hyperdrive factory info with associated metadata for a list of
   * factories
   */
  async getFactoryInfos(
    factoryAddresses: Address[],
    options?: ContractReadOptions,
  ): Promise<FactoryInfoWithMetadata[]> {
    const readonlyInfos = await this.contract.read(
      "getFactoryInfosWithMetadata",
      { __factories: factoryAddresses },
      options,
    );
    return readonlyInfos.slice();
  }

  /**
   * Get a {@linkcode ReadHyperdrive} instance for each Hyperdrive instance
   * registered in the registry.
   */
  async getInstances(options?: ContractReadOptions): Promise<ReadHyperdrive[]> {
    const hyperdriveAddresses = await this.getInstanceAddresses(options);
    return hyperdriveAddresses.map(
      (address) =>
        new ReadHyperdrive({
          address,
          drift: this.drift,
          cache: this.contract.cache,
          cacheNamespace: this.contract.cacheNamespace,
        }),
    );
  }

  /**
   * Get the address of all Hyperdrive instances registered in the registry.
   */
  async getInstanceAddresses(
    options?: ContractReadOptions,
  ): Promise<Address[]> {
    const count = await this.contract.read("getNumberOfInstances", {}, options);

    if (count === 0n) {
      return [];
    }

    const readOnlyAddresses = await this.contract.read(
      "getInstancesInRange",
      {
        _startIndex: 0n,
        _endIndex: count,
      },
      options,
    );
    return readOnlyAddresses.slice();
  }

  /**
   * Gets the instance info with associated metadata for an instance.
   */
  async getInstanceInfo(
    instanceAddress: Address,
    options?: ContractReadOptions,
  ): Promise<ReadInstanceInfoWithMetadata> {
    const { factory, ...rest } = await this.contract.read(
      "getInstanceInfoWithMetadata",
      { _instance: instanceAddress },
      options,
    );
    return {
      factory: new ReadFactory({
        address: factory,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
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
  ): Promise<ReadInstanceInfoWithMetadata[]> {
    const infos = await this.contract.read(
      "getInstanceInfosWithMetadata",
      { __instances: instanceAddresses },
      options,
    );
    return infos.map(({ factory, ...rest }) => ({
      factory: new ReadFactory({
        address: factory,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      }),
      ...rest,
    }));
  }
}
