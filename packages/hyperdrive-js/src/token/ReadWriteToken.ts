import { Replace, WriteOptions } from "@delvtech/drift";
import { ReadWriteClient } from "src/drift/ReadWriteClient";
import { ReadToken } from "src/token/ReadToken";

export interface ReadWriteToken extends Replace<ReadToken, ReadWriteClient> {
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
    options?: WriteOptions;
  }): Promise<`0x${string}`>;
}
