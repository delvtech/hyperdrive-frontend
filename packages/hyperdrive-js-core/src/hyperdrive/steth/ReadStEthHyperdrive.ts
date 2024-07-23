import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { fixed } from "src/fixed-point";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadStEth } from "src/token/steth/ReadStEth";

export interface ReadStEthHyperdriveOptions extends ReadHyperdriveOptions {
  /**
   * The `StETHHyperdrive` contract stores and operates on Lido balances in
   * shares. However, since users are most familiar with stETH public balances,
   * this model will accept and return balances in stETH by default and convert
   * them to shares when interacting with the contract to ease UI integration.
   *
   * To use shares instead of stETH, set this to `true`.
   *
   * @default false
   *
   * @see
   * https://docs.lido.fi/guides/lido-tokens-integration-guide#bookkeeping-shares
   */
  useSharesAccounting?: boolean;
}

export class ReadStEthHyperdrive extends readStEthHyperdriveMixin(
  ReadHyperdrive,
) {
  constructor(options: ReadStEthHyperdriveOptions) {
    super(options);
  }
}

/**
 * @internal
 */
export interface ReadStEthHyperdriveMixin {
  /**
   * Get a model of ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a model of the Lido stETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadStEth>;
}

/**
 * @internal
 */
export function readStEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadStEthHyperdriveMixin> & T {
  return class extends Base implements ReadStEthHyperdriveMixin {
    constructor(...[options]: any[]) {
      const {
        name = "stETH Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadStEthHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(): Promise<ReadStEth> {
      const { vaultSharesToken } = await this.getPoolConfig();
      return new ReadStEth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }

    // Calculations

    async getMaxShort(
      options?: Parameters<ReadHyperdrive["getMaxShort"]>[0],
    ): ReturnType<ReadHyperdrive["getMaxShort"]> {
      const result = await super.getMaxShort(options);
      return {
        ...result,
        // FIXME: MockLido updates its price based on the current timestamp, so
        // the accuracy of max calculations will slowly drift every second.
        // This pads the max shares to avoid errors trying to open the max,
        // but may not be needed for mainnet.
        maxSharesIn: fixed(result.maxSharesIn).mul(1e18 - 1e12).bigint,
      };
    }

    async getMaxLong(
      options?: Parameters<ReadHyperdrive["getMaxLong"]>[0],
    ): ReturnType<ReadHyperdrive["getMaxLong"]> {
      const result = await super.getMaxLong(options);
      return {
        ...result,
        // FIXME: MockLido updates its price based on the current timestamp, so
        // the accuracy of max calculations will slowly drift every second.
        // This pads the max shares to avoid errors trying to open the max,
        // but may not be needed for mainnet.
        maxSharesIn: fixed(result.maxSharesIn).mul(1e18 - 1e12).bigint,
      };
    }
  };
}
