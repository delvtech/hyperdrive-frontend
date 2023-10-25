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
import stringify from "fast-json-stable-stringify";

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
  /**
   * An ID to distinguish this instance from others. Used to prefix to all cache
   * keys.
   */
  id?: string;

  /**
   * Hold pending promises to avoid over fetching, requests to the cache that
   * don't have an existing entry will await the same, single promise.
   */
  pendingPromisesMap?: Map<SimpleCacheKey, Promise<any>>;
}

/**
 * A wrapped Ethereum contract reader that provides caching capabilities. Useful
 * for reducing the number of actual reads from a contract by caching and
 * reusing previous read results.
 *
 * @example
 * const cachedContract = new CachedReadContract({ contract: myContract });
 * const result1 = await cachedContract.read("functionName", args);
 * const result2 = await cachedContract.read("functionName", args); // Fetched from cache
 */
export class CachedReadContract<TAbi extends Abi = Abi>
  implements ICachedReadContract<TAbi>
{
  readonly address: `0x${string}`;
  readonly abi: TAbi;

  protected readonly _contract: IReadContract<TAbi>;
  protected readonly _id: string;

  /** Internal cache for contract reads. */
  protected readonly _cache: SimpleCache;

  _pendingPromises: Map<SimpleCacheKey, Promise<any>>;

  constructor({
    contract,
    cache,
    id,
    pendingPromisesMap,
  }: CachedReadContractOptions<TAbi>) {
    this.address = contract.address;
    this.abi = contract.abi;
    this._contract = contract;
    this._cache = cache || new LruSimpleCache({ max: DEFAULT_CACHE_SIZE });
    this._pendingPromises = pendingPromisesMap || new Map();
    this._id = id || "";
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
    return this._getOrSet({
      key: createSimpleCacheKey([
        this._id,
        "read",
        {
          address: this.address,
          functionName,
          args,
          options,
        },
      ]),

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
    const key = createSimpleCacheKey([
      this._id,
      "read",
      {
        address: this.address,
        functionName,
        args,
        options,
      },
    ]);

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
    return this._getOrSet({
      key: createSimpleCacheKey([
        this._id,
        "getEvents",
        {
          address: this.address,
          eventName,
          options,
        },
      ]),
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
  private async _getOrSet<TValue = any>({
    key,
    callback,
  }: {
    key: SimpleCacheKey;
    callback: () => Promise<TValue> | TValue;
  }): Promise<TValue> {
    const cacheKey = stringify(key);
    let value = this._cache.get(cacheKey);
    if (value) {
      return value;
    }

    const pendingPromise = this._pendingPromises.get(cacheKey);
    if (pendingPromise) {
      const value = await pendingPromise;
      return value;
    }

    // No pending promise or cache entry found, make the request
    const requestPromise = callback();
    this._pendingPromises.set(cacheKey, requestPromise as any);

    value = await requestPromise;

    this._cache.set(cacheKey, value);
    this._pendingPromises.delete(cacheKey);

    return value;
  }
}
