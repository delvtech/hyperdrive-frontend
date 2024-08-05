import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadWriteErc4626Hyperdrive } from "src/hyperdrive/erc4626/ReadWriteErc4626Hyperdrive";
import { ReadWriteMockErc4626 } from "src/token/erc4626/ReadWriteMockErc4626";
import {
  ReadMockErc4626HyperdriveMixin,
  readMockErc4626HyperdriveMixin,
} from "./ReadMockErc4626Hyperdrive";

export class ReadWriteMockErc4626Hyperdrive extends readWriteMockErc4626HyperdriveMixin(
  ReadWriteErc4626Hyperdrive,
) {}

export interface ReadWriteMockErc4626HyperdriveMixin
  extends ReadMockErc4626HyperdriveMixin {
  getSharesToken(options?: ContractReadOptions): Promise<ReadWriteMockErc4626>;
}

/**
 * @internal
 */
export function readWriteMockErc4626HyperdriveMixin<
  T extends Constructor<ReadWriteErc4626Hyperdrive>,
>(Base: T): Constructor<ReadWriteMockErc4626HyperdriveMixin> & T {
  // return class extends readErc4626HyperdriveMixin(Base) {
  return class extends readMockErc4626HyperdriveMixin(Base) {
    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteMockErc4626> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadWriteMockErc4626({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
