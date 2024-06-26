import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { syncCacheWithTransaction } from "src/evm-client/syncCacheWithTransaction";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { Erc20Abi } from "src/token/erc20/abi";

export interface ReadWriteErc20Options extends ReadWriteContractModelOptions {}

export class ReadWriteErc20 extends ReadErc20 implements ReadWriteToken {
  declare contract: CachedReadWriteContract<Erc20Abi>;
  declare contractFactory: ReadWriteContractFactory;

  constructor(options: ReadWriteErc20Options) {
    super(options);
  }

  @syncCacheWithTransaction<Erc20Abi>({
    cacheEntries: [{ functionName: "allowance" }],
  })
  async approve({
    spender,
    amount,
    options,
  }: {
    owner?: `0x${string}`;
    spender: `0x${string}`;
    amount: bigint;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "approve",
      { spender, amount },
      options,
    );
    return hash;
  }
}
