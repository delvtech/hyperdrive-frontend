import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { ReadContractModelOptions } from "src/model/ReadModel";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import {
  erc4626HyperdriveAbi,
  Erc4626HyperdriveAbi,
} from "src/hyperdrive/erc4626/abi";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";

export interface ReadErc4626HyperdriveOptions
  extends ReadContractModelOptions {}

export class ReadErc4626Hyperdrive extends ReadHyperdrive {
  erc4626HyperdriveContract: CachedReadContract<Erc4626HyperdriveAbi>;

  constructor({
    name = "ERC-4626 Hyperdrive",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadErc4626HyperdriveOptions) {
    super({ address, contractFactory, network, cache, name, namespace });
    this.erc4626HyperdriveContract = contractFactory({
      abi: erc4626HyperdriveAbi,
      address,
      cache,
      namespace,
    });
  }

  /**
   * Get a model of the tokenized vault for this Hyperdrive instance.
   */
  async getSharesToken(options?: ContractReadOptions): Promise<ReadErc4626> {
    const address = await this.erc4626HyperdriveContract.read(
      "vault",
      {},
      options,
    );

    return new ReadErc4626({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }
}
