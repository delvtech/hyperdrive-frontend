import { Drift, ReadWriteAdapter } from "@delvtech/drift";
import { ReadWriteClientOptions } from "src/drift/ReadWriteClient";
import { HyperdriveSdkError } from "src/HyperdriveSdkError";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadWriteToken } from "src/token/ReadWriteToken";

export interface ReadWriteEthOptions extends ReadWriteClientOptions {}

export class ReadWriteEth extends ReadEth implements ReadWriteToken {
  declare drift: Drift<ReadWriteAdapter>;

  constructor(options: ReadWriteEthOptions) {
    super(options);
  }

  /**
   * This method is not available for the native ETH token.
   * @throws A {@linkcode HyperdriveSdkError}
   */
  async approve(): Promise<`0x${string}`> {
    throw new HyperdriveSdkError(
      "This method is not available for the native ETH token.",
    );
  }
}

export interface MethodNotImplementedErrorOptions {
  /**
   * The name of the object that the method was not implemented in.
   */
  objectName: string;
  /**
   * The name of the method that was not implemented.
   */
  methodName: string;
}
