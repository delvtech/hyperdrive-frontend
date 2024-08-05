import type {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import type { Constructor, Override } from "src/base/types";
import {
  ReadWriteHyperdrive,
  type ReadWriteHyperdriveOptions,
} from "src/hyperdrive/base/ReadWriteHyperdrive";
import type { HyperdriveAbi } from "src/hyperdrive/base/abi";
import {
  type ReadStEthHyperdriveMixin,
  type ReadStEthHyperdriveOptions,
  readStEthHyperdriveMixin,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";

export class ReadWriteStEthHyperdrive extends readWriteStEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteStEthHyperdriveMixin
  extends ReadStEthHyperdriveMixin {
  stEthHyperdriveContract: CachedReadWriteContract<HyperdriveAbi>;
  getBaseToken(options?: ContractReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteStEth>;
}

export interface ReadWriteStEthHyperdriveOptions
  extends Override<ReadWriteHyperdriveOptions, ReadStEthHyperdriveOptions> {}

export function readWriteStEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteStEthHyperdriveMixin> & T {
  return class extends readStEthHyperdriveMixin(Base) {
    declare stEthHyperdriveContract: CachedReadWriteContract<HyperdriveAbi>;

    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteStEth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteStEth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
