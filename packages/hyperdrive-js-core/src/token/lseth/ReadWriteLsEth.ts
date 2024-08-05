import type { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { readLsEthMixin } from "src/token/lseth/ReadLsEth";
import type { LsEthAbi } from "src/token/lseth/abi";

export class ReadWriteLsEth extends readLsEthMixin(ReadWriteErc20) {
  declare lsEthContract: CachedReadWriteContract<LsEthAbi>;
}
