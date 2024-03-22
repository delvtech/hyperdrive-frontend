import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadStEth } from "src/token/steth/ReadStEth";
import { writeErc20Mixin } from "src/token/erc20/ReadWriteErc20";
import { StEthAbi } from "src/token/steth/abi";

export interface ReadWriteStEthOptions extends ReadWriteContractModelOptions {}

export class ReadWriteStEth extends writeErc20Mixin(ReadStEth) {
  declare stEthContract: CachedReadWriteContract<StEthAbi>;

  constructor(options: ReadWriteStEthOptions) {
    super(options);
  }
}
