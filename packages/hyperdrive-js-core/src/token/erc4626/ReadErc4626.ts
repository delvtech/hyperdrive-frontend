import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { Erc4626Abi, erc4626Abi } from "src/token/erc4626/abi";

export class ReadErc4626 extends erc4626Mixin(ReadErc20) {}

/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function erc4626Mixin<T extends Constructor<ReadErc20>>(
  BaseReadErc20: T,
) {
  return class extends BaseReadErc20 {
    erc4626Contract: CachedReadContract<Erc4626Abi>;

    constructor(...[options]: any[]) {
      const {
        name = "ERC-4626 Tokenized Vault",
        contractFactory,
        address,
        cache,
        namespace,
        network,
      } = options as ReadErc20Options;
      super({
        name,
        contractFactory,
        address,
        cache,
        namespace,
        network,
      });
      this.erc4626Contract = contractFactory({
        abi: erc4626Abi,
        address,
        cache,
        namespace,
      });
    }

    /**
     * Get the total supply of assets in the vault.
     */
    getTotalAssets({
      options,
    }: {
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.erc4626Contract.read("totalAssets", {}, options);
    }

    /**
     * Convert a shares amount to an assets amount.
     */
    convertToAssets({
      sharesAmount,
      options,
    }: {
      sharesAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.erc4626Contract.read(
        "convertToAssets",
        { shares: sharesAmount },
        options,
      );
    }

    /**
     * Convert an assets amount to a shares amount.
     */
    convertToShares({
      assetsAmount,
      options,
    }: {
      assetsAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.erc4626Contract.read(
        "convertToShares",
        { assets: assetsAmount },
        options,
      );
    }
  };
}
