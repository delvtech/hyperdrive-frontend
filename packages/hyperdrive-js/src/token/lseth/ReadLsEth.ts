import { Contract, ReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { LsEthAbi, lsEthAbi } from "src/token/lseth/abi";

export class ReadLsEth extends readLsEthMixin(ReadErc20) {}

/**
 * @internal
 */
export interface ReadLsEthMixin {
  lsEthContract: Contract<LsEthAbi>;

  /**
   * Get the total supply of underlying eth in the lsEth contract.
   */
  getTotalEthSupply(options?: ReadOptions): Promise<bigint>;

  /**
   * Get the underlying eth balance of an account.
   */
  getEthBalanceOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ReadOptions;
  }): Promise<bigint>;

  /**
   * Get the amount of ETH that would be received for a given number of shares.
   */
  getEthBalanceFromShares({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ReadOptions;
  }): Promise<bigint>;

  /**
   * Get the number of shares that would be received for a given amount of ETH.
   */
  getSharesFromEthBalance({
    ethBalance,
    options,
  }: {
    ethBalance: bigint;
    options?: ReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readLsEthMixin<T extends Constructor<ReadErc20>>(
  Base: T,
): Constructor<ReadLsEthMixin> & T {
  return class extends Base implements ReadLsEthMixin {
    lsEthContract: Contract<LsEthAbi>;

    constructor(...[options]: any[]) {
      const {
        debugName = "lsETH Token",
        drift,
        address,
        epochBlock,
        ...restOptions
      } = options as ReadErc20Options;
      super({ debugName, address, drift, epochBlock, ...restOptions });
      this.lsEthContract = drift.contract({
        abi: lsEthAbi,
        address,
        epochBlock,
      });
    }

    async getTotalEthSupply(options?: ReadOptions): Promise<bigint> {
      return this.lsEthContract.read("totalUnderlyingSupply", {}, options);
    }

    async getEthBalanceOf({
      account,
      options,
    }: {
      account: `0x${string}`;
      options?: ReadOptions;
    }): Promise<bigint> {
      return this.lsEthContract.read(
        "balanceOfUnderlying",
        { _owner: account },
        options,
      );
    }

    async getEthBalanceFromShares({
      sharesAmount,
      options,
    }: {
      sharesAmount: bigint;
      options?: ReadOptions;
    }): Promise<bigint> {
      return this.lsEthContract.read(
        "underlyingBalanceFromShares",
        {
          _shares: sharesAmount,
        },
        options,
      );
    }

    async getSharesFromEthBalance({
      ethBalance,
      options,
    }: {
      ethBalance: bigint;
      options?: ReadOptions;
    }): Promise<bigint> {
      return this.lsEthContract.read(
        "sharesFromUnderlyingBalance",
        {
          _underlyingAssetAmount: ethBalance,
        },
        options,
      );
    }
  };
}
