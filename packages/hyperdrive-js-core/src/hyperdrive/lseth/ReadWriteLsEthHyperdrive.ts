import type { ContractReadOptions } from "@delvtech/evm-client";
import type { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import {
  type ReadLsEthHyperdriveMixin,
  readLsEthHyperdriveMixin,
} from "src/hyperdrive/lseth/ReadLsEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteLsEth } from "src/token/lseth/ReadWriteLsEth";

export class ReadWriteLsEthHyperdrive extends readWriteLsEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteLsEthHyperdriveMixin
  extends ReadLsEthHyperdriveMixin {
  getBaseToken(options?: ContractReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteLsEth>;
}

export function readWriteLsEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteLsEthHyperdriveMixin> & T {
  return class extends readLsEthHyperdriveMixin(Base) {
    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteLsEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteLsEth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }

    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }
  };
}
