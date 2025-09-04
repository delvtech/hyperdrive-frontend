import { ReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  type ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadEth } from "src/token/eth/ReadEth";

export class ReadEzEthHyperdrive extends readEzEthHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadEzEthHyperdriveMixin {
  /**
   * Get a client for ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ReadOptions): Promise<ReadEth>;

  /**
   * Get a client for the EzETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ReadOptions): Promise<ReadErc20>;
}

/**
 * @internal
 */
export function readEzEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadEzEthHyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName = "EzETH Hyperdrive", ...restOptions } =
        options as ReadHyperdriveOptions;
      super({ debugName, ...restOptions });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        drift: this.drift,
      });
    }

    async getSharesToken(): Promise<ReadErc20> {
      const { vaultSharesToken } = await this.getPoolConfig();
      return new ReadErc20({
        address: vaultSharesToken,
        drift: this.drift,
      });
    }
  };
}
