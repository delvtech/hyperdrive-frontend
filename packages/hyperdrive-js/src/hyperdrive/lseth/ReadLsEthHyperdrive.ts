import { ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadLsEth } from "src/token/lseth/ReadLsEth";

export class ReadLsEthHyperdrive extends readLsEthHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadLsEthHyperdriveMixin {
  /**
   * Get a client for ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a client for the LsETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadLsEth>;
}

/**
 * @internal
 */
export function readLsEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadLsEthHyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName = "lsETH Hyperdrive", ...restOptions } =
        options as ReadHyperdriveOptions;
      super({ debugName, ...restOptions });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        drift: this.drift,
      });
    }

    async getSharesToken(options?: ContractReadOptions): Promise<ReadLsEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadLsEth({
        address: vaultSharesToken,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }
  };
}
