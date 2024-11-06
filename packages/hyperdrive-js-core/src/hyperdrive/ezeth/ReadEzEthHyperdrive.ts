import { Contract, ContractReadOptions, ReadContract } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadHyperdrive } from "src/hyperdrive/base/ReadHyperdrive";
import {
  EzEthHyperdriveAbi,
  ezEthHyperdriveAbi,
} from "src/hyperdrive/ezeth/abi";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadEth } from "src/token/eth/ReadEth";

export class ReadEzEthHyperdrive extends readEzEthHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadEzEthHyperdriveMixin {
  ezEthHyperdriveContract: Contract<EzEthHyperdriveAbi>;

  /**
   * Get a client for ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a client for the EzETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadErc20>;
}

/**
 * @internal
 */
export function readEzEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadEzEthHyperdriveMixin> & T {
  return class extends Base {
    ezEthHyperdriveContract: ReadContract<EzEthHyperdriveAbi>;

    constructor(...[options]: any[]) {
      const {
        debugName = "EzETH Hyperdrive",
        address,
        cache,
        cacheNamespace,
        ...rest
      } = options as ConstructorParameters<typeof ReadHyperdrive>[0];
      super({ debugName, address, cache, cacheNamespace, ...rest });
      this.ezEthHyperdriveContract = this.drift.contract({
        abi: ezEthHyperdriveAbi,
        address,
        cache,
        cacheNamespace,
      });
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
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }
  };
}
