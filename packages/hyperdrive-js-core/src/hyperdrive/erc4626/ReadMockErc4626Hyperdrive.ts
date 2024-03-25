import { ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadErc4626Hyperdrive } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadMockErc4626 } from "src/token/erc4626/ReadMockErc4626";

export class ReadMockErc4626Hyperdrive extends readMockErc4626HyperdriveMixin(
  ReadErc4626Hyperdrive,
) {}

/**
 * The public interface of the Mock ERC-4626 Hyperdrive mixin.
 * @internal
 */
export interface ReadMockErc4626HyperdriveMixin {
  getSharesToken(options?: ContractReadOptions): Promise<ReadMockErc4626>;
  getYieldSourceRate(options?: {
    options?: ContractReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readMockErc4626HyperdriveMixin<
  T extends Constructor<ReadErc4626Hyperdrive>,
>(Base: T): T & Constructor<ReadMockErc4626HyperdriveMixin> {
  return class extends Base {
    constructor(...[options]: any[]) {
      super({ name: options.name ?? "Mock ERC-4626 Hyperdrive", ...options });
    }

    async getSharesToken(
      options?: ContractReadOptions,
    ): Promise<ReadMockErc4626> {
      const address = await this.erc4626HyperdriveContract.read(
        "vault",
        {},
        options,
      );

      return new ReadMockErc4626({
        address,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }

    async getYieldSourceRate({
      options,
    }: {
      options?: ContractReadOptions;
    }): Promise<bigint> {
      const vault = await this.getSharesToken();
      return vault.getRate({ options });
    }
  };
}
