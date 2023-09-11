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

/**
 * Interface for a writable contract that also provides caching capabilities.
 * This extends both readable cached contracts and writable contracts.
 */
export interface ICachedWritableContract<TAbi extends Abi = Abi>
  extends ICachedReadableContract<TAbi>,
    IWritableContract<TAbi> {}

export interface CachedWritableContractOptions<TAbi extends Abi = Abi>
  extends CachedReadableContractOptions<TAbi> {
  contract: IWritableContract<TAbi>;
}

/**
 * Provides a cached wrapper around an Ethereum writable contract. This class is
 * useful for both reading (with caching) and writing to a contract. It extends
 * the functionality provided by CachedReadableContract by adding write
 * capabilities.
 */
export class CachedWritableContract<TAbi extends Abi = Abi>
  extends CachedReadableContract<TAbi>
  implements ICachedWritableContract<TAbi>
{
  /** The wrapped writable contract instance. */
  protected readonly _contract: IWritableContract<TAbi>;

  constructor({ contract, cache }: CachedWritableContractOptions<TAbi>) {
    super({ contract, cache });
    this._contract = contract;
  }

  /**
   * Writes data to the contract. This method directly delegates to the
   * underlying contract without interacting with the cache since writes
   * inherently modify state and cannot be cached.
   */
  write<TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">>(
    fn: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this._contract.write(fn, args, options);
  }
}
