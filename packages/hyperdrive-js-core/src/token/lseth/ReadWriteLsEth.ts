import { ReadWriteContract } from "@delvtech/drift";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { readLsEthMixin } from "src/token/lseth/ReadLsEth";
import { LsEthAbi } from "src/token/lseth/abi";

export class ReadWriteLsEth extends readLsEthMixin(ReadWriteErc20) {
  declare lsEthContract: ReadWriteContract<LsEthAbi>;
}
