import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import {
  ReadErc4626HyperdriveMixin,
  readErc4626HyperdriveMixin,
} from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";

export class ReadWriteErc4626Hyperdrive extends readWriteErc4626HyperdriveMixin(
  ReadWriteHyperdrive,
) {}

export interface ReadWriteErc4626HyperdriveMixin
  extends ReadErc4626HyperdriveMixin {
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteErc4626>;
}

/**
 * @internal
 */
export function readWriteErc4626HyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteErc4626HyperdriveMixin> & T {
  return class extends readErc4626HyperdriveMixin(Base) {
    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteErc4626> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadWriteErc4626({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
