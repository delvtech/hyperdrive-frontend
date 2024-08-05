import type {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import type { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import {
  type ReadEzEthHyperdriveMixin,
  readEzEthHyperdriveMixin,
} from "src/hyperdrive/ezeth/ReadEzEthHyperdrive";
import type { EzEthHyperdriveAbi } from "src/hyperdrive/ezeth/abi";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export class ReadWriteEzEthHyperdrive extends readWriteEzEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteEzEthHyperdriveMixin
  extends ReadEzEthHyperdriveMixin {
  ezEthHyperdriveContract: CachedReadWriteContract<EzEthHyperdriveAbi>;
  getBaseToken(options?: ContractReadOptions): Promise<ReadWriteEth>;
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteErc20>;
}

/**
 * @internal
 */
export function readWriteEzEthHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteEzEthHyperdriveMixin> & T {
  return class extends readEzEthHyperdriveMixin(Base) {
    declare ezEthHyperdriveContract: CachedReadWriteContract<EzEthHyperdriveAbi>;

    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteErc20> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteErc20({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
