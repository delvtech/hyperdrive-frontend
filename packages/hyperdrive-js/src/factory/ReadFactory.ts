import { Adapter, Contract, ContractReadOptions } from "@delvtech/drift";
import { Address } from "abitype";
import { SdkClient, SdkContractConfig } from "src/drift/SdkClient";
import { FactoryAbi, factoryAbi } from "src/factory/abi";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";

export class ReadFactory<A extends Adapter = Adapter> extends SdkClient<A> {
  address: Address;
  contract: Contract<FactoryAbi, A>;

  constructor({
    debugName = "Hyperdrive Factory",
    address,
    ...rest
  }: SdkContractConfig<A>) {
    super({ debugName, ...rest });
    this.address = address;
    this.contract = this.drift.contract({
      abi: factoryAbi,
      address,
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
  async getInstances(
    options?: ContractReadOptions,
  ): Promise<ReadHyperdrive<A>[]> {
    const hyperdriveAddresses = await this.getInstanceAddresses(options);
    return hyperdriveAddresses.map(
      (address) =>
        new ReadHyperdrive({
          address,
          drift: this.drift,
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
