import type {
  CachedReadWriteContract,
  ContractReadOptions,
  FunctionArgs,
  FunctionName,
} from "@delvtech/evm-client";
import type { Abi } from "abitype";

/**
 * Clears the cache and calls the transaction handlers provided to a "Write"
 * method on any CachedReadWriteContract class.
 *
 * This decorator accepts an argument of cache keys to clear. By default it will
 * clear the entire cache.
 *
 * @example
 * ```ts
 * class ReadWriteFooBar extends CachedReadWriteContract {
 *
 *   // Listen for tx complete and clear the entire cache
 *   @syncCacheWithTransaction()
 *   setFoo() {
 *     return this.contract.write("setFoo", []);
 *   }
 *
 *   // Listen for tx complete and clear a partial or specific cache entry
 *   @syncCacheWithTransaction({ cacheEntries: [{ functionName: "getBar" }]})
 *   setBar() {
 *     return this.contract.write("setBar", []);
 *   }
 * }
 * ```
 *
 * @internal
 */
export function syncCacheWithTransaction<TAbi extends Abi>(options?: {
  cacheEntries?: {
    functionName?: FunctionName<TAbi>;
    args?: FunctionArgs<TAbi, FunctionName<TAbi>>;
    options?: ContractReadOptions;
  }[];
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void => {
    const originalMethod = descriptor.value;

    // Wrap the original method in a function that does the transaction
    // side-effects we want after the tx completes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor.value = async function (...args: any[]) {
      // Access the target class instance from within a decorator
      // @ts-expect-error The `this` keyword will be the target class instance
      const network = this.network;
      // @ts-expect-error The `this` keyword will be the target class instance
      const contract = this.contract as CachedReadWriteContract;

      // call the original function and await the hash
      const hash = await originalMethod.apply(this, args);

      // Dont await this part, we want it to happen in the background once the
      // tx is completed
      network.waitForTransaction(hash).then(() => {
        if (options?.cacheEntries) {
          options.cacheEntries.forEach((cacheKey) => {
            return contract.deleteReadsMatching(
              cacheKey.functionName,
              cacheKey.args,
              cacheKey.options,
            );
          });
        } else {
          contract.clearCache();
        }
        args[0]?.onTransactionCompleted?.(hash);
      });

      // Return the original method's result hash
      return hash;
    };
  };
}
