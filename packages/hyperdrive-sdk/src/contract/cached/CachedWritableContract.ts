import { Abi } from "abitype";
import { ContractWriteOptions, IWritableContract } from "src/contract/Contract";
import {
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
} from "src/base/abitype";
import {
  CachedReadableContract,
  CachedReadableContractOptions,
  ICachedReadableContract,
} from "src/contract/cached/CachedReadableContract";

export interface ICachedWritableContract<TAbi extends Abi = Abi>
  extends ICachedReadableContract<TAbi>,
    IWritableContract<TAbi> {}

export interface CachedWritableContractOptions<TAbi extends Abi = Abi>
  extends CachedReadableContractOptions<TAbi> {
  contract: IWritableContract<TAbi>;
}

export class CachedWritableContract<TAbi extends Abi = Abi>
  extends CachedReadableContract<TAbi>
  implements ICachedWritableContract<TAbi>
{
  protected readonly _contract: IWritableContract<TAbi>;

  constructor({ contract, cache }: CachedWritableContractOptions<TAbi>) {
    super({ contract, cache });
    this._contract = contract;
  }

  write<TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">>(
    fn: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this._contract.write(fn, args, options);
  }
}
