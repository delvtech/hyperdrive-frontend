import { ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";

export class ReadErc4626Hyperdrive extends readErc4626HyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadErc4626HyperdriveMixin {
  /**
   * Get a client for the tokenized vault for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadErc4626>;
}

/**
 * @internal
 */
export function readErc4626HyperdriveMixin<
  T extends Constructor<ReadHyperdrive>,
>(Base: T): Constructor<ReadErc4626HyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName = "ERC-4626 Hyperdrive", ...restOptions } =
        options as ReadHyperdriveOptions;
      super({ debugName, ...restOptions });
    }

    async getSharesToken(options?: ContractReadOptions): Promise<ReadErc4626> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadErc4626({
        address: vaultSharesToken,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }
  };
}
