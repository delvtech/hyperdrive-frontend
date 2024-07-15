import { NetworkGetBlockOptions } from "@delvtech/evm-client";
import { HyperdriveSdkError } from "./HyperdriveSdkError";

export class BlockNotFoundError extends HyperdriveSdkError {
  constructor(options?: NetworkGetBlockOptions) {
    const block =
      options?.blockHash ?? options?.blockNumber ?? options?.blockTag;
    super(`Block${block !== undefined ? ` ${block}` : ""} not found`);
    this.name = "BlockNotFound";
  }
}
