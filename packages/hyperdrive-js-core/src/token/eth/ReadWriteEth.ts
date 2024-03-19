import { ReadWriteModelOptions } from "src/model/ReadWriteModel";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { MethodNotImplementedError } from "src/base/errors/MethodNotImplementedError";

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
      objectName: this.name,
      methodName: "approve",
    });
  }
}
