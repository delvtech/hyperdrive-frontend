import { Adapter, ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { fixed } from "src/fixed-point";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";

/**
 * A Hyperdrive instance that is compatible with Hyperdrive <= v1.0.14.
 */
export class ReadHyperdrive_v1_0_14<
  A extends Adapter = Adapter,
> extends V1_0_14Mixin(ReadHyperdrive)<A> {}

/**
 * Overrides for compatibility with Hyperdrive <= v1.0.14.
 */
export function V1_0_14Mixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): T {
  return class extends Base {
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
      return fixed(baseAmount, decimals).div(vaultSharePrice).bigint;
    }
  };
}
