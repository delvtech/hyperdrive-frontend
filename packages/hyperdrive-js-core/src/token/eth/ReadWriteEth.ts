import { MethodNotImplementedError } from "src/errors/MethodNotImplementedError";
import type { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import type { ReadWriteModelOptions } from "src/model/ReadWriteModel";
import type { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadEth } from "src/token/eth/ReadEth";

export interface ReadWriteEthOptions extends ReadWriteModelOptions {}

export class ReadWriteEth extends ReadEth implements ReadWriteToken {
  declare contractFactory: ReadWriteContractFactory;

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
