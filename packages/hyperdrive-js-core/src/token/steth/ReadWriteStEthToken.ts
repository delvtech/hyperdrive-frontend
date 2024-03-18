import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadStEthToken } from "src/token/steth/ReadStEthToken";
import { readWriteErc20Mixin } from "src/token/erc20/ReadWriteErc20";
import { StEthAbi } from "src/token/steth/abi";

export interface ReadWriteStEthTokenOptions
  extends ReadWriteContractModelOptions {}

export class ReadWriteStEthToken extends readWriteErc20Mixin(ReadStEthToken) {
  declare stEthContract: CachedReadWriteContract<StEthAbi>;
}
