import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Address } from "abitype";
import { FactoryAbi, factoryAbi } from "src/factory/abi";
import { ReadHyperdrive } from "src/hyperdrive/base/ReadHyperdrive";
import { ReadContractModelOptions, ReadModel } from "src/model/ReadModel";

export interface ReadFactoryOptions extends ReadContractModelOptions {}

export class ReadFactory extends ReadModel {
  address: Address;
  contract: CachedReadContract<FactoryAbi>;

  constructor({
    debugName = "Hyperdrive Factory",
    address,
    cache,
    namespace,
    ...modelOptions
  }: ReadFactoryOptions) {
    super({ debugName, ...modelOptions });
    this.address = address;
    this.contract = this.contractFactory({
      abi: factoryAbi,
      address,
      cache,
      namespace,
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
          contractFactory: this.contractFactory,
          network: this.network,
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
