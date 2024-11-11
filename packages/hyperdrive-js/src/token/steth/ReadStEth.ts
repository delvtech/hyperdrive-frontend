import { Contract, ContractReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { StEthAbi, stEthAbi } from "src/token/steth/abi";

export class ReadStEth extends readStEthMixin(ReadErc20) {}

/**
 * @internal
 */
export interface ReadStEthMixin {
  stEthContract: Contract<StEthAbi>;

  /**
   * Get the number of stETH shares held by an account.
   */
  getSharesOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Get the amount of pooled ETH (stETH) that would be received for a given
   * number of shares.
   */
  getPooledEthByShares({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Get the number of shares that would be received for a given amount of
   * pooled ETH (stETH).
   */
  getSharesByPooledEth({
    ethAmount,
    options,
  }: {
    ethAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readStEthMixin<T extends Constructor<ReadErc20>>(
  Base: T,
): Constructor<ReadStEthMixin> & T {
  return class extends Base implements ReadStEthMixin {
    stEthContract: Contract<StEthAbi>;

    constructor(...[options]: any[]) {
      const {
        debugName = "stETH Token",
        address,
        cache,
        cacheNamespace,
        ...rest
      } = options as ReadErc20Options;
      super({ debugName, address, cache, cacheNamespace, ...rest });
      this.stEthContract = this.drift.contract({
        abi: stEthAbi,
        address,
        cache,
        cacheNamespace,
      });
    }

    getSharesOf({
      account,
      options,
    }: {
      account: `0x${string}`;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.stEthContract.read(
        "sharesOf",
        { _account: account },
        options,
      );
    }

    getPooledEthByShares({
      sharesAmount,
      options,
    }: {
      sharesAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.stEthContract.read(
        "getPooledEthByShares",
        { _sharesAmount: sharesAmount },
        options,
      );
    }

    getSharesByPooledEth({
      ethAmount,
      options,
    }: {
      ethAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.stEthContract.read(
        "getSharesByPooledEth",
        { _ethAmount: ethAmount },
        options,
      );
    }
  };
}
