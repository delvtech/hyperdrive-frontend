import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { StEthAbi } from "src/token/steth/abi";
import { readStEthMixin } from "src/token/steth/ReadStEth";

export class ReadWriteStEth extends readStEthMixin(ReadWriteErc20) {
  declare stEthContract: CachedReadWriteContract<StEthAbi>;
}
