import { Drift, ReadWriteAdapter } from "@delvtech/drift";
import { ReadWriteClientOptions } from "src/drift/ReadWriteClient";
import { MethodNotImplementedError } from "src/errors/MethodNotImplementedError";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadEth } from "src/token/eth/ReadEth";

export interface ReadWriteEthOptions extends ReadWriteClientOptions {}

export class ReadWriteEth extends ReadEth implements ReadWriteToken {
  declare drift: Drift<ReadWriteAdapter>;

  constructor(options: ReadWriteEthOptions) {
    super(options);
  }

  /**
   * This method is not available for the native ETH token.
   * @throws A {@linkcode MethodNotImplementedError}
   */
  async approve(): Promise<`0x${string}`> {
    throw new MethodNotImplementedError({
      objectName: this.debugName,
      methodName: "approve",
    });
  }
}
