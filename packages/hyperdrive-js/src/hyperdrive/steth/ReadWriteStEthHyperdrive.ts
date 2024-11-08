import { ContractReadOptions, ReplaceProps } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
import {
  ReadStEthHyperdriveMixin,
  readStEthHyperdriveMixin,
  ReadStEthHyperdriveOptions,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";

export class ReadWriteStEthHyperdrive extends readWriteStEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteStEthHyperdriveMixin
  extends ReadStEthHyperdriveMixin {
  getBaseToken(options?: ContractReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteStEth>;
}

export interface ReadWriteStEthHyperdriveOptions
  extends ReplaceProps<
    ReadWriteHyperdriveOptions,
    ReadStEthHyperdriveOptions
  > {}

export function readWriteStEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteStEthHyperdriveMixin> & T {
  return class extends readStEthHyperdriveMixin(Base) {
    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        drift: this.drift,
      });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteStEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteStEth({
        address: vaultSharesToken,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }
  };
}
