import type { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { readStEthMixin } from "src/token/steth/ReadStEth";
import type { StEthAbi } from "src/token/steth/abi";

export class ReadWriteStEth extends readStEthMixin(ReadWriteErc20) {
  declare stEthContract: CachedReadWriteContract<StEthAbi>;
}
