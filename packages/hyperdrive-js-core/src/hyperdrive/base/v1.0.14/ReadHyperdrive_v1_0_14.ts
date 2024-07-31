import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { fixed } from "src/fixed-point";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";

/**
 * A Hyperdrive instance that is compatible with Hyperdrive <= v1.0.14.
 */
export class ReadHyperdrive_v1_0_14 extends readHyperdriveMixin_v1_0_14(
  ReadHyperdrive
) {}

/**
 * Overrides for compatibility with Hyperdrive <= v1.0.14.
 */
export function readHyperdriveMixin_v1_0_14<
  T extends Constructor<ReadHyperdrive>
>(Base: T): T {
  return class extends Base {
    /**
     * @hidden
     */
    constructor(...[options]: any[]) {
      const {
        debugName = "Hyperdrive v1.0.14",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({
        debugName,
        address,
        contractFactory,
        network,
        cache,
        namespace,
      });
    }

    async convertToBase({
      sharesAmount,
      options,
    }: {
      sharesAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      const { vaultSharePrice } = await this.getPoolInfo(options);
      const decimals = await this.getDecimals();
      return fixed(sharesAmount, decimals).mul(vaultSharePrice, decimals)
        .bigint;
    }

    async convertToShares({
      baseAmount,
      options,
    }: {
      baseAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      const { vaultSharePrice } = await this.getPoolInfo(options);
      const decimals = await this.getDecimals();
      return fixed(baseAmount, decimals).mul(vaultSharePrice).bigint;
    }
  };
}
