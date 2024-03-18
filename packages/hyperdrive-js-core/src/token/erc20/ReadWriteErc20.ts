import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { ReadWriteContractFactory } from "src/contract/contractFactory";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { Erc20Abi } from "src/token/erc20/abi";
import { Constructor } from "src/base/types";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { ReadWriteToken } from "src/token/ReadWriteToken";

export interface ReadWriteErc20Options extends ReadWriteContractModelOptions {}

/**
 * A mixin that adds write functionality to a ReadErc20 class.
 * @param ReadErc20 - The class with read functionality to extend.
 * @returns - A new class that extends the original class and adds write
 * functionality.
 */
// The mixin pattern utilizes class expressions to create a new class type that
// extends the original class and possibly overrides some of its methods.
// Adhering to the explicit-module-boundary-types rule would require creating a
// separate type for the mixin that omits all properties and methods that are
// added to the original class and rewriting the argument and return types of
// of the new fields in the abstract type as well as the class. This would
// create a lot of boilerplate, make the code harder to read and maintain, and
// not provide any real benefit.
// https://www.typescriptlang.org/docs/handbook/mixins.html
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function readWriteErc20Mixin<TReadErc20 extends Constructor<ReadErc20>>(
  ReadErc20: TReadErc20,
) {
  return class extends ReadErc20 implements ReadWriteToken {
    declare contract: CachedReadWriteContract<Erc20Abi>;
    declare contractFactory: ReadWriteContractFactory;

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

export class ReadWriteErc20 extends readWriteErc20Mixin(ReadErc20) {}
