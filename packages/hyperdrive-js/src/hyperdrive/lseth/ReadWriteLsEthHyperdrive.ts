import { ReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import {
  ReadLsEthHyperdriveMixin,
  readLsEthHyperdriveMixin,
} from "src/hyperdrive/lseth/ReadLsEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteLsEth } from "src/token/lseth/ReadWriteLsEth";

export class ReadWriteLsEthHyperdrive extends readWriteLsEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteLsEthHyperdriveMixin
  extends ReadLsEthHyperdriveMixin {
  getBaseToken(options?: ReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ReadOptions): Promise<ReadWriteLsEth>;
}

export function readWriteLsEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteLsEthHyperdriveMixin> & T {
  return class extends readLsEthHyperdriveMixin(Base) {
    async getSharesToken(options?: ReadOptions): Promise<ReadWriteLsEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteLsEth({
        address: vaultSharesToken,
        drift: this.drift,
      });
    }

    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        drift: this.drift,
      });
    }
  };
}
