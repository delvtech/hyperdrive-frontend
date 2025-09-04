import {
  Drift,
  ReadWriteAdapter,
  ReadWriteContract,
  WriteOptions,
} from "@delvtech/drift";
import { ReadWriteContractClientOptions } from "src/drift/ContractClient";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { Erc20Abi } from "src/token/erc20/abi";

export interface ReadWriteErc20Options extends ReadWriteContractClientOptions {}

export class ReadWriteErc20 extends ReadErc20 implements ReadWriteToken {
  declare drift: Drift<ReadWriteAdapter>;
  declare contract: ReadWriteContract<Erc20Abi>;

  constructor(options: ReadWriteErc20Options) {
    super(options);
  }

  async approve({
    spender,
    amount,
    options,
  }: {
    owner?: `0x${string}`;
    spender: `0x${string}`;
    amount: bigint;
    options?: WriteOptions;
  }): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "approve",
      { spender, amount },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.invalidateReadsMatching("allowance");
          options?.onMined?.(receipt);
        },
      },
    );
    return hash;
  }
}
