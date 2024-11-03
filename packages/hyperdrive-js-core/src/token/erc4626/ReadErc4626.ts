import { Contract, ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { Erc4626Abi, erc4626Abi } from "src/token/erc4626/abi";

export class ReadErc4626 extends readErc4626Mixin(ReadErc20) {}

/**
 * @internal
 */
export interface ReadErc4626Mixin {
  erc4626Contract: Contract<Erc4626Abi>;

  /**
   * Get the total supply of assets in the vault.
   */
  getTotalAssets(options?: ContractReadOptions): Promise<bigint>;

  /**
   * Convert a shares amount to an assets amount.
   */
  convertToAssets({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Convert an assets amount to a shares amount.
   */
  convertToShares({
    assetsAmount,
    options,
  }: {
    assetsAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readErc4626Mixin<T extends Constructor<ReadErc20>>(
  Base: T,
): Constructor<ReadErc4626Mixin> & T {
  return class extends Base implements ReadErc4626Mixin {
    erc4626Contract: Contract<Erc4626Abi>;

    constructor(...[options]: any[]) {
      const {
        debugName = "ERC-4626 Tokenized Vault",
        address,
        cache,
        cacheNamespace,
        ...modelOptions
      } = options as ReadErc20Options;
      super({ debugName, address, cache, cacheNamespace, ...modelOptions });
      this.erc4626Contract = this.drift.contract({
        abi: erc4626Abi,
        address,
        cache,
        cacheNamespace,
      });
    }

    getTotalAssets(options?: ContractReadOptions): Promise<bigint> {
      return this.erc4626Contract.read("totalAssets", {}, options);
    }

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
