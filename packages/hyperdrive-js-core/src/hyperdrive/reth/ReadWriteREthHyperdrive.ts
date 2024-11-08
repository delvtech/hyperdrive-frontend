import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import { readREthHyperdriveMixin } from "src/hyperdrive/reth/ReadREthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteREth } from "src/token/reth/ReadWriteREth";

export class ReadWriteREthHyperdrive extends readWriteREthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteREthHyperdriveMixin {
  getBaseToken(options?: ContractReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteREth>;
}

/**
 * @internal
 */
export function readWriteREthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteREthHyperdriveMixin> & T {
  return class extends readREthHyperdriveMixin(Base) {
    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteREth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteREth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
