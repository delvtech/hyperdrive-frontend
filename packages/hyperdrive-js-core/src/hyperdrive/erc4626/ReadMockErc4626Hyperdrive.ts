import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { ReadContractModelOptions } from "src/model/ReadModel";
import {
  mockErc4626HyperdriveAbi,
  MockErc4626HyperdriveAbi,
} from "src/hyperdrive/erc4626/abi";
import { ReadErc4626Hyperdrive } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadMockErc4626 } from "src/token/erc4626/ReadMockErc4626";

export interface ReadMockErc4626HyperdriveOptions
  extends ReadContractModelOptions {}

export class ReadMockErc4626Hyperdrive extends ReadErc4626Hyperdrive {
  mockErc4626HyperdriveContract: CachedReadContract<MockErc4626HyperdriveAbi>;

  constructor({
    name = "Mock ERC-4626 Hyperdrive",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadMockErc4626HyperdriveOptions) {
    super({ address, contractFactory, network, cache, name, namespace });
    this.mockErc4626HyperdriveContract = contractFactory({
      abi: mockErc4626HyperdriveAbi,
      address,
      cache,
      namespace,
    });
  }

  async getSharesToken(
    options?: ContractReadOptions,
  ): Promise<ReadMockErc4626> {
    const address = await this.erc4626HyperdriveContract.read(
      "vault",
      {},
      options,
    );

    return new ReadMockErc4626({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  /**
   * Get a model of the tokenized vault for this Hyperdrive instance.
   */
  async getYieldSourceRate({
    options,
  }: {
    options?: ContractReadOptions;
  }): Promise<bigint> {
    const vault = await this.getSharesToken();
    return await vault.getRate({ options });
  }
}
