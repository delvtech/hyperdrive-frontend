import {
  ContractWriteOptions,
  Drift,
  ReadWriteAdapter,
  ReadWriteContract,
} from "@delvtech/drift";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { Erc20Abi } from "src/token/erc20/abi";

export interface ReadWriteErc20Options extends ReadWriteContractModelOptions {}

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
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "approve",
      { spender, amount },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.invalidateReadsMatching("allowance");
          options?.onMined?.(receipt);
        },
      },
    );
    return hash;
  }
}
