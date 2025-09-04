import { ReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import {
  ReadEzEthHyperdriveMixin,
  readEzEthHyperdriveMixin,
} from "src/hyperdrive/ezeth/ReadEzEthHyperdrive";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export class ReadWriteEzEthHyperdrive extends readWriteEzEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteEzEthHyperdriveMixin
  extends ReadEzEthHyperdriveMixin {
  getBaseToken(options?: ReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ReadOptions): Promise<ReadWriteErc20>;
}

/**
 * @internal
 */
export function readWriteEzEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteEzEthHyperdriveMixin> & T {
  return class extends readEzEthHyperdriveMixin(Base) {
    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        drift: this.drift,
      });
    }

    async getSharesToken(options?: ReadOptions): Promise<ReadWriteErc20> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteErc20({
        address: vaultSharesToken,
        drift: this.drift,
      });
    }
  };
}
