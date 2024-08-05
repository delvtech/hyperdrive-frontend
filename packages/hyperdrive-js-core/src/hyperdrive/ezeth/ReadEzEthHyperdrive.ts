import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
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
  ezEthHyperdriveContract: CachedReadContract<EzEthHyperdriveAbi>;

  /**
   * Get a model of ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a model of the EzETH token for this Hyperdrive instance.
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
    ezEthHyperdriveContract: CachedReadContract<EzEthHyperdriveAbi>;

    constructor(...[options]: any[]) {
      const {
        debugName = "EzETH Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as any;
      super({ address, contractFactory, network, cache, debugName, namespace });
      this.ezEthHyperdriveContract = contractFactory({
        abi: ezEthHyperdriveAbi,
        address,
        cache,
        namespace,
      });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(): Promise<ReadErc20> {
      const { vaultSharesToken } = await this.getPoolConfig();
      return new ReadErc20({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
