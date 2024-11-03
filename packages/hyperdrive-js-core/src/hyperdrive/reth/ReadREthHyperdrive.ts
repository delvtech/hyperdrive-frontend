import { ContractReadOptions } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadREth } from "src/token/reth/ReadREth";

export class ReadREthHyperdrive extends readREthHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadREthHyperdriveMixin {
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
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName = "rETH Hyperdrive", ...restOptions } =
        options as ReadHyperdriveOptions;
      super({ debugName, ...restOptions });
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        drift: this.drift,
      });
    }

    async getSharesToken(options?: ContractReadOptions): Promise<ReadREth> {
      const { vaultSharesToken } = await this.getPoolConfig(options);
      return new ReadREth({
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
      options: Parameters<ReadHyperdrive["getMaxShort"]>[0]["options"];
    }): ReturnType<ReadHyperdrive["getMaxShort"]> {
      const result = await super.getMaxShort({ budget, options });
      const decimals = await this.getDecimals();
      return {
        ...result,
        // FIXME: MockRocketPool updates its price based on the current
        // timestamp, so the accuracy of max calculations will slowly drift
        // every second. This pads the max shares to avoid errors trying to open
        // the max, but may not be needed for mainnet.
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
        // FIXME: MockRocketPool updates its price based on the current
        // timestamp, so the accuracy of max calculations will slowly drift
        // every second. This pads the max shares to avoid errors trying to open
        // the max, but may not be needed for mainnet.
        maxSharesIn: fixed(result.maxSharesIn, decimals).mul(1e18 - 1e12, 18)
          .bigint,
      };
    }
  };
}
