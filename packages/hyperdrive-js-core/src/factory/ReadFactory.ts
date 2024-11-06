import { Contract, ContractReadOptions } from "@delvtech/drift";
import { Address } from "abitype";
import { ReadContractClientOptions } from "src/client/ContractClient";
import { ReadClient } from "src/client/ReadClient";
import { FactoryAbi, factoryAbi } from "src/factory/abi";
import { ReadHyperdrive } from "src/hyperdrive/base/ReadHyperdrive";

export interface ReadFactoryOptions extends ReadContractClientOptions {}

export class ReadFactory extends ReadClient {
  address: Address;
  contract: Contract<FactoryAbi>;

  constructor({
    debugName = "Hyperdrive Factory",
    address,
    cache,
    cacheNamespace,
    ...rest
  }: ReadFactoryOptions) {
    super({ debugName, ...rest });
    this.address = address;
    this.contract = this.drift.contract({
      abi: factoryAbi,
      address,
      cache,
      cacheNamespace,
    });
  }

  /**
   * Find out if the given address is an instance deployed by the factory.
   */
  async getIsInstance(address: Address): Promise<boolean> {
    return this.contract.read("isInstance", { _instance: address });
  }

  /**
   * Find out if the given address is a deployer coordinator registered with the
   * factory.
   */
  async getIsDeployerCoordinator(address: Address): Promise<boolean> {
    return this.contract.read("isDeployerCoordinator", {
      _deployerCoordinator: address,
    });
  }

  /**
   * Get the address of all registered deployer coordinators.
   */
  async getDeployerCoordinatorAddresses({
    instances,
    options,
  }: {
    /**
     * Only return deployer coordinators that deployed the given instances.
     */
    instances?: Address[];
    options?: ContractReadOptions;
  } = {}): Promise<Address[]> {
    if (instances) {
      const readOnlyAddresses = await this.contract.read(
        "getDeployerCoordinatorByInstances",
        {
          __instances: instances,
        },
      );
      return readOnlyAddresses.slice();
    }

    const count = await this.contract.read(
      "getNumberOfDeployerCoordinators",
      {},
      options,
    );

    if (count === 0n) {
      return [];
    }

    const readOnlyAddresses = await this.contract.read(
      "getDeployerCoordinatorsInRange",
      {
        _startIndex: 0n,
        _endIndex: count,
      },
      options,
    );
    return readOnlyAddresses.slice();
  }

  /**
   * Get a {@linkcode ReadHyperdrive} instance for each Hyperdrive instance
   * deployed by the deployer factory.
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
   * Get the address of all Hyperdrive instances deployed by the factory.
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
}
