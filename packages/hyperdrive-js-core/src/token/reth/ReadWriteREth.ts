import { ReadWriteContract } from "@delvtech/drift";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { readREthMixin } from "src/token/reth/ReadREth";
import { REthAbi } from "src/token/reth/abi";

export class ReadWriteREth extends readREthMixin(ReadWriteErc20) {
  declare rEthContract: ReadWriteContract<REthAbi>;
}
