import { Abi } from "abitype";
import {
  ContractEvent,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  IReadContract,
} from "src/contract/Contract";
import { SimpleCache, SimpleCacheKey } from "src/cache/SimpleCache";
import { LruSimpleCache } from "src/cache/LruSimpleCache";
import {
  EventName,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
} from "src/base/abitype";
import { createSimpleCacheKey } from "src/cache/utils/createSimpleCacheKey";

/**
 * Extended readable contract interface that provides capabilities
 * for cache management on contract reads.
 */
export interface ICachedReadContract<TAbi extends Abi = Abi>
  extends IReadContract<TAbi> {
  deleteRead: (...args: Parameters<IReadContract<TAbi>["read"]>) => void;
  clearCache: () => void;
}

// TODO: Figure out a good default cache size
const DEFAULT_CACHE_SIZE = 100;

export interface CachedReadContractOptions<TAbi extends Abi = Abi> {
  contract: IReadContract<TAbi>;
  cache?: SimpleCache;
}

/**
 * A wrapped Ethereum contract reader that provides caching capabilities.
 * Useful for reducing the number of actual reads from a contract by caching
 * and reusing previous read results.
 *
 * @example
 * const cachedContract = new CachedReadContract({ contract: myContract });
 * const result1 = await cachedContract.read("functionName", args);
 * const result2 = await cachedContract.read("functionName", args); // Fetched from cache
 */
export class CachedReadContract<TAbi extends Abi = Abi>
  implements ICachedReadContract<TAbi>
{
  address: `0x${string}`;
  abi: TAbi;

  /** Internal cache for contract reads. */
  protected readonly _cache: SimpleCache;
  protected readonly _contract: IReadContract<TAbi>;

  constructor({ contract, cache }: CachedReadContractOptions<TAbi>) {
    this.address = contract.address;
    this.abi = contract.abi;
    this._contract = contract;
    this._cache = cache || new LruSimpleCache({ max: DEFAULT_CACHE_SIZE });
  }

  /**
   * Reads data from the contract. First checks the cache, and if not present,
   * fetches from the contract and then caches the result.
   */
  async read<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this._query({
      key: createSimpleCacheKey(["read", { functionName, args, options }]),
      callback: () => this._contract.read(functionName, args, options),
    });
  }

  /**
   * Deletes a specific read from the cache.
   *
   * @example
   * const cachedContract = new CachedReadContract({ contract: myContract });
   * const result1 = await cachedContract.read("functionName", args);
   * const result2 = await cachedContract.read("functionName", args); // Fetched from cache
   *
   * cachedContract.deleteRead("functionName", args);
   * const result3 = await cachedContract.read("functionName", args); // Fetched from contract
   */
  deleteRead<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): void {
    const key = createSimpleCacheKey(["read", { functionName, args, options }]);
    this._cache.delete(key);
  }

  /**
   * Gets events from the contract. First checks the cache, and if not present,
   * fetches from the contract and then caches the result.
   */
  async getEvents<TEventName extends EventName<TAbi>>(
    eventName: TEventName,
    options?: ContractGetEventsOptions<TAbi, TEventName>,
  ): Promise<ContractEvent<TAbi, TEventName>[]> {
    return this._query({
      key: createSimpleCacheKey(["getEvents", { eventName, options }]),
      callback: () => this._contract.getEvents(eventName, options),
    });
  }

  /**
   * Clears the entire cache.
   */
  clearCache(): void {
    this._cache.clear();
  }

  /**
   * Simulates a contract write operation. This method directly delegates
   * to the underlying contract without interacting with the cache.
   */
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
   * Retrieves a value from the cache or sets it if not present.
   */
  private async _query<TValue = any>({
    key,
    callback,
  }: QueryOptions<TValue>): Promise<TValue> {
    let value = this._cache.get(key);
    if (value) {
      return value;
    }

    value = await callback();
    this._cache.set(key, value);

    return value;
  }
}

interface QueryOptions<TValue = any> {
  key: SimpleCacheKey;
  callback: () => Promise<TValue> | TValue;
}
