import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { StEthAbi } from "src/token/steth/abi";
import { stEthMixin } from "src/token/steth/ReadStEth";

export class ReadWriteStEth extends stEthMixin(ReadWriteErc20) {
  declare stEthContract: CachedReadWriteContract<StEthAbi>;
}
