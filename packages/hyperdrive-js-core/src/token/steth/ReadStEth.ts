import { ReadContractModelOptions } from "src/model/ReadModel";
import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { StEthAbi, stEthAbi } from "src/token/steth/abi";

export interface ReadStEthOptions extends ReadContractModelOptions {}

export class ReadStEth extends ReadErc20 {
  stEthContract: CachedReadContract<StEthAbi>;

  constructor({
    name = "stETH Token",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadStEthOptions) {
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
}
