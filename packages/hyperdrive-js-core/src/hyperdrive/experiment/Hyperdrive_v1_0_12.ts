import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { fixed } from "src/fixed-point";
import { Hyperdrive } from "src/hyperdrive/experiment/Hyperdrive";

export class Hyperdrive_v1_0_12 extends hyperdrive_v1_0_12Mixin(Hyperdrive) {}

export function hyperdrive_v1_0_12Mixin<T extends Constructor<Hyperdrive>>(
  Base: T,
): Constructor<Hyperdrive> & T {
  return class extends Base {
    // Newer versions have a first-class method for converting, however in v1.0.12
    // we must calculate this ourselves from pool info
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
  };
}
