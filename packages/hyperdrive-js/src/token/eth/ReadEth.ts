import { ReadOptions } from "@delvtech/drift";
import { ReadClient, ReadClientOptions } from "src/drift/ReadClient";
import { ReadToken } from "src/token/ReadToken";
import { MAX_U256 } from "src/utils/constants";

export interface ReadEthOptions extends ReadClientOptions {}

export class ReadEth extends ReadClient implements ReadToken {
  static address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" as const;
  address = ReadEth.address;

  constructor({ debugName = "ETH", ...restOptions }: ReadEthOptions) {
    super({ debugName, ...restOptions });
  }

  async getName(): Promise<string> {
    return "Ethereum";
  }

  async getSymbol(): Promise<string> {
    return "ETH";
  }

  async getDecimals(): Promise<number> {
    return 18;
  }

  /**
   * @remarks
   * Native ETH does not require allowances as it is sent directly as the
   * message value when used in Hyperdrive. This method returns a maximum
   * value to indicate the absence of an allowance mechanism for ETH.
   */
  async getAllowance(): Promise<bigint> {
    return MAX_U256;
  }

  async getBalanceOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ReadOptions;
  }): Promise<bigint> {
    return this.drift.getBalance({
      address: account,
      ...options,
    });
  }
}
