import { ContractWriteOptions } from "@delvtech/evm-client";
import { ReadWriteContractFactory } from "src/contract/contractFactory";
import { ReadToken } from "src/token/ReadToken";

export interface ReadWriteToken extends ReadToken {
  contractFactory: ReadWriteContractFactory;

  /**
   * Give a spending allowance to a given spender.
   * @param spender - The address of the spender.
   * @param amount - The amount of tokens the spender can spend.
   * @returns The transaction hash.
   */
  approve({
    spender,
    amount,
    options,
  }: {
    owner?: `0x${string}`;
    spender: `0x${string}`;
    amount: bigint;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;
}
