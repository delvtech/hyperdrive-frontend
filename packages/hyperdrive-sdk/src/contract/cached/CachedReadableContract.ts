import { Abi } from "abitype";
import {
  ContractEvent,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  IReadableContract,
} from "src/contract/Contract";
import { SimpleCache, SimpleCacheKey } from "src/cache/SimpleCache";
import { LRUSimpleCache } from "src/cache/LRUSimpleCache";
import {
  EventName,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
} from "src/base/abitype";
import sortKeys from "sort-keys";

export interface ICachedReadableContract<TAbi extends Abi = Abi>
  extends IReadableContract<TAbi> {
  deleteRead: (...args: Parameters<IReadableContract<TAbi>["read"]>) => boolean;
  clearCache: () => void;
}

// TODO: Figure out a good default cache size
const DEFAULT_CACHE_SIZE = 100;

export interface CachedReadableContractOptions<TAbi extends Abi = Abi> {
  contract: IReadableContract<TAbi>;
  cache?: SimpleCache;
}

export class CachedReadableContract<TAbi extends Abi = Abi>
  implements ICachedReadableContract<TAbi>
{
  address: `0x${string}`;
  abi: TAbi;

  /** Internal cache for contract reads. */
  protected readonly _cache: SimpleCache;
  protected readonly _contract: IReadableContract<TAbi>;

  constructor({ contract, cache }: CachedReadableContractOptions<TAbi>) {
    this.address = contract.address;
    this.abi = contract.abi;
    this._contract = contract;
    this._cache = cache || new LRUSimpleCache({ max: DEFAULT_CACHE_SIZE });
  }

  async read<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    const key = this._makeReadKey(functionName, args, options);
    return this._getOrSet(key, () =>
      this._contract.read(functionName, args, options),
    );
  }

  /**
   * Deletes a specific read from the cache.
   */
  deleteRead<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): boolean {
    const key = this._makeReadKey(functionName, args, options);
    return this._cache.delete(key);
  }

  async getEvents<TEventName extends EventName<TAbi>>(
    eventName: TEventName,
    options?: ContractGetEventsOptions<TAbi, TEventName>,
  ): Promise<ContractEvent<TAbi, TEventName>[]> {
    return this._getOrSet({ eventName, options }, () =>
      this._contract.getEvents(eventName, options),
    );
  }

  /**
   * Clears the entire cache.
   */
  clearCache(): void {
    this._cache.clear();
  }

  simulateWrite<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    fn: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this._contract.simulateWrite(fn, args, options);
  }

  /**
   * Generates a unique key for caching read results.
   */
  private _makeReadKey<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): SimpleCacheKey {
    return {
      functionName,
      args: sortKeys(args), // Sorting keys ensures consistent cache key generation
      options: options && sortKeys(options),
    };
  }

  /**
   * Retrieves a value from the cache or sets it if not present.
   */
  private async _getOrSet<TValue = any>(
    key: SimpleCacheKey,
    setter: () => TValue,
  ): Promise<TValue> {
    let value = this._cache.get(key);
    if (value) {
      return value;
    }

    value = await setter();
    this._cache.set(key, value);

    return value;
  }
}
