import type { ContractReadOptions } from "@delvtech/evm-client";
import type { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  type ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";
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
   * Get a model of ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a model of the LsETH token for this Hyperdrive instance.
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
      const {
        debugName = "lsETH Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, debugName, namespace });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(options?: ContractReadOptions): Promise<ReadLsEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadLsEth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
