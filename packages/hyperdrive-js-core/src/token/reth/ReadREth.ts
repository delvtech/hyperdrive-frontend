import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { REthAbi, rEthAbi } from "src/token/reth/abi";

export class ReadREth extends readREthMixin(ReadErc20) {}

/**
 * @internal
 */
export interface ReadREthMixin {
  rEthContract: CachedReadContract<REthAbi>;

  /**
   * Get the total supply of underlying eth in the rETH contract.
   */
  getTotalEthSupply(options?: ContractReadOptions): Promise<bigint>;

  /**
   * Get the underlying eth balance of an account.
   */
  getEthBalanceOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Get the amount of ETH backing an amount of rETH.
   */
  getEthValue({
    rEthAmount,
    options,
  }: {
    rEthAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint>;

  /**
   * Get the amount of rETH backing an amount of ETH.
   */
  getREthValue({
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
export function readREthMixin<T extends Constructor<ReadErc20>>(
  Base: T,
): Constructor<ReadREthMixin> & T {
  return class extends Base implements ReadREthMixin {
    rEthContract: CachedReadContract<REthAbi>;

    constructor(...[options]: any[]) {
      const { contractFactory, address, cache, namespace } =
        options as ReadErc20Options;
      super({ address, contractFactory, cache, namespace });
      this.rEthContract = contractFactory({
        abi: rEthAbi,
        address,
        cache,
        namespace,
      });
    }

    async getTotalEthSupply(options?: ContractReadOptions): Promise<bigint> {
      return this.rEthContract.read("getTotalCollateral", {}, options);
    }

    async getEthBalanceOf({
      account,
      options,
    }: {
      account: `0x${string}`;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      const rEthBalance = await this.getBalanceOf({ account, options });
      return this.rEthContract.read(
        "getEthValue",
        { _rethAmount: rEthBalance },
        options,
      );
    }

    async getEthValue({
      rEthAmount,
      options,
    }: {
      rEthAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.rEthContract.read(
        "getEthValue",
        {
          _rethAmount: rEthAmount,
        },
        options,
      );
    }

    async getREthValue({
      ethAmount,
      options,
    }: {
      ethAmount: bigint;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return this.rEthContract.read(
        "getRethValue",
        {
          _ethAmount: ethAmount,
        },
        options,
      );
    }
  };
}
