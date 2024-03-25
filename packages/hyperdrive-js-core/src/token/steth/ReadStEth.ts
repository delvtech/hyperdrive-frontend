import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { ReadErc20, ReadErc20Options } from "src/token/erc20/ReadErc20";
import { StEthAbi, stEthAbi } from "src/token/steth/abi";

export class ReadStEth extends stEthMixin(ReadErc20) {}

/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function stEthMixin<T extends Constructor<ReadErc20>>(Base: T) {
  return class extends Base {
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

    async getSharesOf({
      account,
      options,
    }: {
      account: `0x${string}`;
      options?: ContractReadOptions;
    }): Promise<bigint> {
      return await this.stEthContract.read(
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
