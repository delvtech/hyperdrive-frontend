import { ContractReadOptions, ReadWriteContract } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import {
  ReadEzEthHyperdriveMixin,
  readEzEthHyperdriveMixin,
} from "src/hyperdrive/ezeth/ReadEzEthHyperdrive";
import { EzEthHyperdriveAbi } from "src/hyperdrive/ezeth/abi";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export class ReadWriteEzEthHyperdrive extends readWriteEzEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteEzEthHyperdriveMixin
  extends ReadEzEthHyperdriveMixin {
  ezEthHyperdriveContract: ReadWriteContract<EzEthHyperdriveAbi>;
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
    declare ezEthHyperdriveContract: ReadWriteContract<EzEthHyperdriveAbi>;

    async getBaseToken(): Promise<ReadWriteEth> {
      return new ReadWriteEth({
        drift: this.drift,
      });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteErc20> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadWriteErc20({
        address: vaultSharesToken,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }
  };
}
