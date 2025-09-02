import { Contract, ReadOptions } from "@delvtech/drift";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { REthAbi, rEthAbi } from "src/token/reth/abi";

export class ReadREth extends readREthMixin(ReadErc20) {}

/**
 * @internal
 */
export interface ReadREthMixin {
  rEthContract: Contract<REthAbi>;

  /**
   * Get the total supply of underlying eth in the rETH contract.
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
   * Get the amount of ETH backing an amount of rETH.
   */
  getEthValue({
    rEthAmount,
    options,
  }: {
    rEthAmount: bigint;
    options?: ReadOptions;
  }): Promise<bigint>;

  /**
   * Get the amount of rETH backing an amount of ETH.
   */
  getREthValue({
    ethAmount,
    options,
  }: {
    ethAmount: bigint;
    options?: ReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readREthMixin<T extends Constructor<ReadErc20>>(
  Base: T,
): Constructor<ReadREthMixin> & T {
  return class extends Base implements ReadREthMixin {
    rEthContract: Contract<REthAbi>;

    constructor(...[options]: any[]) {
      const { drift, address, epochBlock } = options as ReadErc20Options;
      super({ address, drift, epochBlock });
      this.rEthContract = drift.contract({
        abi: rEthAbi,
        address,
        epochBlock,
      });
    }

    async getTotalEthSupply(options?: ReadOptions): Promise<bigint> {
      return this.rEthContract.read("getTotalCollateral", {}, options);
    }

    async getEthBalanceOf({
      account,
      options,
    }: {
      account: `0x${string}`;
      options?: ReadOptions;
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
      options?: ReadOptions;
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
      options?: ReadOptions;
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
