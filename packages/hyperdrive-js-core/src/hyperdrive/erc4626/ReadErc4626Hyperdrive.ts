import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import {
  Erc4626HyperdriveAbi,
  erc4626HyperdriveAbi,
} from "src/hyperdrive/erc4626/abi";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";

export class ReadErc4626Hyperdrive extends readErc4626HyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * The public interface of the ERC-4626 Hyperdrive mixin.
 * @internal
 */
export interface ReadErc4626HyperdriveMixin {
  erc4626HyperdriveContract: CachedReadContract<Erc4626HyperdriveAbi>;

  /**
   * Get a model of the tokenized vault for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadErc4626>;
}

/**
 * @internal
 */
export function readErc4626HyperdriveMixin<
  T extends Constructor<ReadHyperdrive>,
>(Base: T): T & Constructor<ReadErc4626HyperdriveMixin> {
  return class extends Base {
    erc4626HyperdriveContract: CachedReadContract<Erc4626HyperdriveAbi>;

    constructor(...[options]: any[]) {
      const {
        name = "ERC-4626 Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });
      this.erc4626HyperdriveContract = contractFactory({
        abi: erc4626HyperdriveAbi,
        address,
        cache,
        namespace,
      });
    }

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
  };
}
