import { ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { fixed } from "src/fixed-point";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadStEth } from "src/token/steth/ReadStEth";

export interface ReadStEthHyperdriveOptions extends ReadHyperdriveOptions {}

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
   * Get a client for ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a client for the Lido stETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadStEth>;
}

/**
 * @internal
 */
export function readStEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadStEthHyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName = "stETH Hyperdrive", ...restOptions } =
        options as ReadStEthHyperdriveOptions;
      super({ debugName, ...restOptions });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        drift: this.drift,
      });
    }

    async getSharesToken(): Promise<ReadStEth> {
      const { vaultSharesToken } = await this.getPoolConfig();
      return new ReadStEth({
        address: vaultSharesToken,
        drift: this.drift,
        cache: this.contract.cache,
        cacheNamespace: this.contract.cacheNamespace,
      });
    }

    // Calculations

    async getMaxShort({
      budget,
      options,
    }: {
      budget: bigint;
      options?: Parameters<ReadHyperdrive["getMaxShort"]>[0]["options"];
    }): ReturnType<ReadHyperdrive["getMaxShort"]> {
      const result = await super.getMaxShort({ budget, options });
      const decimals = await this.getDecimals();
      return {
        ...result,
        // FIXME: MockLido updates its price based on the current timestamp, so
        // the accuracy of max calculations will slowly drift every second.
        // This pads the max shares to avoid errors trying to open the max,
        // but may not be needed for mainnet.
        maxSharesIn: fixed(result.maxSharesIn, decimals).mul(1e18 - 1e12, 18)
          .bigint,
      };
    }

    async getMaxLong(
      options?: Parameters<ReadHyperdrive["getMaxLong"]>[0],
    ): ReturnType<ReadHyperdrive["getMaxLong"]> {
      const result = await super.getMaxLong(options);
      const decimals = await this.getDecimals();
      return {
        ...result,
        // FIXME: MockLido updates its price based on the current timestamp, so
        // the accuracy of max calculations will slowly drift every second.
        // This pads the max shares to avoid errors trying to open the max,
        // but may not be needed for mainnet.
        maxSharesIn: fixed(result.maxSharesIn, decimals).mul(1e18 - 1e12, 18)
          .bigint,
      };
    }
  };
}
