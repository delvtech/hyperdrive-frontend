import type { ContractReadOptions } from "@delvtech/evm-client";
import type { Constructor } from "src/base/types";
import type { ReadHyperdriveOptions } from "src/exports";
import { ReadErc4626Hyperdrive } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadMockErc4626 } from "src/token/erc4626/ReadMockErc4626";

export class ReadMockErc4626Hyperdrive extends readMockErc4626HyperdriveMixin(
  ReadErc4626Hyperdrive,
) {}

/**
 * @internal
 */
export interface ReadMockErc4626HyperdriveMixin {
  getSharesToken(options?: ContractReadOptions): Promise<ReadMockErc4626>;
}

/**
 * @internal
 */
export function readMockErc4626HyperdriveMixin<
  T extends Constructor<ReadErc4626Hyperdrive>,
>(Base: T): Constructor<ReadMockErc4626HyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const { debugName } = options as ReadHyperdriveOptions;
      super({ debugName: debugName ?? "Mock ERC-4626 Hyperdrive", ...options });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadMockErc4626> {
      const { vaultSharesToken } = await this.getPoolConfig(options);

      return new ReadMockErc4626({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }
  };
}
