import { NetworkGetBlockOptions } from "@delvtech/evm-client";

export class BlockNotFoundError extends Error {
  constructor(options?: NetworkGetBlockOptions) {
    const block =
      options?.blockHash ?? options?.blockNumber ?? options?.blockTag;
    super(`Block${block !== undefined ? ` ${block}` : ""} not found`);
    this.name = "BlockNotFound";
  }
}
