import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { Erc20Abi } from "src/token/erc20/abi";
import { Constructor } from "src/base/types";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ExpectedWriteContractError } from "src/errors/ExpectedReadWriteContractError";
import { isReadWriteContract } from "src/evm-client/utils/isReadWriteContract";

export interface IReadWriteErc20 extends ReadErc20 {
  contract: CachedReadWriteContract<Erc20Abi>;
  contractFactory: ReadWriteContractFactory;
}

export interface ReadWriteErc20Options extends ReadWriteContractModelOptions {}

/**
 * A mixin that adds write methods to a {@linkcode ReadErc20} class.
 *
 * The write methods depend on `this.contract` being a
 * {@linkcode CachedReadWriteContract} after the constructor is called. If it's
 * not, an error will be thrown.
 *
 * @param ReadErc20 - The class with read methods to extend.
 * @returns A new class that extends the original class and adds write
 * methods.
 * @throws An {@linkcode ExpectedWriteContractError} If the contract is not a
 * {@linkcode CachedReadWriteContract}.
 */
export function readWriteErc20Mixin<TReadErc20 extends Constructor<ReadErc20>>(
  ReadErc20: TReadErc20,
): Constructor<IReadWriteErc20> & TReadErc20 {
  return class extends ReadErc20 implements ReadWriteToken {
    declare contract: CachedReadWriteContract<Erc20Abi>;
    declare contractFactory: ReadWriteContractFactory;

    constructor(...args: any[]) {
      const [options] = args as [ReadWriteErc20Options];
      super(options);
      if (!isReadWriteContract(this.contract)) {
        throw new ExpectedWriteContractError(options.address);
      }
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
        options,
      );
      this.contract.deleteRead("allowance", {
        owner: await this.contract.getSignerAddress(),
        spender,
      });
      return hash;
    }
  };
}

export class ReadWriteErc20 extends readWriteErc20Mixin(ReadErc20) {
  constructor(options: ReadWriteErc20Options) {
    super(options);
  }
}
