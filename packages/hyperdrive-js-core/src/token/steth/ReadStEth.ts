import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { StEthAbi, stEthAbi } from "src/token/steth/abi";

export class ReadStEth extends stEthMixin(ReadErc20) {}

/**
 * The public interface of the stETH mixin.
 * @internal
 */
export interface StEthMixin {
  stEthContract: CachedReadContract<StEthAbi>;

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
export function stEthMixin<T extends Constructor<ReadErc20>>(
  Base: T,
): T & Constructor<StEthMixin> {
  return class extends Base implements StEthMixin {
    stEthContract: CachedReadContract<StEthAbi>;

    constructor(...[options]: any[]) {
      const {
        name = "stETH Token",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadErc20Options;
      super({
        address,
        contractFactory,
        network,
        cache,
        name,
        namespace,
      });
      this.stEthContract = contractFactory({
        abi: stEthAbi,
        address,
        cache,
        namespace,
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
