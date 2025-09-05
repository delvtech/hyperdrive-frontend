import { ReadOptions } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import { Constructor } from "src/utils/types";

/**
 * A Hyperdrive instance that is compatible with Hyperdrive <= v1.0.14.
 */
export class ReadHyperdrive_v1_0_14 extends readHyperdriveMixin_v1_0_14(
  ReadHyperdrive,
) {}

/**
 * Overrides for compatibility with Hyperdrive <= v1.0.14.
 */
export function readHyperdriveMixin_v1_0_14<
  T extends Constructor<ReadHyperdrive>,
>(Base: T): T {
  return class extends Base {
    /**
     * @hidden
     */
    constructor(...[options]: any[]) {
      const { debugName = "Hyperdrive v1.0.14", ...restOptions } =
        options as ReadHyperdriveOptions;
      super({
        debugName,
        ...restOptions,
      });
    }

    async convertToBase({
      sharesAmount,
      options,
    }: {
      sharesAmount: bigint;
      options?: ReadOptions;
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
      options?: ReadOptions;
    }): Promise<bigint> {
      const { vaultSharePrice } = await this.getPoolInfo(options);
      const decimals = await this.getDecimals();
      return fixed(baseAmount, decimals).div(vaultSharePrice).bigint;
    }
  };
}
