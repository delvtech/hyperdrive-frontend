import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { REthHyperdriveAbi, rEthHyperdriveAbi } from "src/hyperdrive/reth/abi";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadREth } from "src/token/reth/ReadREth";

export class ReadREthHyperdrive extends readREthHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadREthHyperdriveMixin {
  rEthHyperdriveContract: CachedReadContract<REthHyperdriveAbi>;

  /**
   * Get a model of ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a model of the rETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadREth>;
}

/**
 * @internal
 */
export function readREthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadREthHyperdriveMixin> & T {
  return class extends Base implements ReadREthHyperdriveMixin {
    rEthHyperdriveContract: CachedReadContract<REthHyperdriveAbi>;

    constructor(...[options]: any[]) {
      const {
        name = "rETH Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });
      this.rEthHyperdriveContract = contractFactory({
        abi: rEthHyperdriveAbi,
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

    async getSharesToken(options?: ContractReadOptions): Promise<ReadREth> {
      const address = await this.rEthHyperdriveContract.read(
        "rocketTokenRETH",
        {},
        options,
      );
      return new ReadREth({
        address,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
