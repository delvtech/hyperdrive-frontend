import { SimpleCache, SimpleCacheKey } from "@hyperdrive/sdk";
import { QueryClient, QueryKey } from "@tanstack/query-core";
import stringify from "fast-json-stable-stringify";

// Convert SimpleCacheKey to QueryKey
function convertSimpleCacheKeyToQueryKey(key: SimpleCacheKey): QueryKey {
  return ["@hyperdrive/sdk", stringify(key)];
}

export class QueryClientSimpleCache<
  TValue extends NonNullable<unknown> = NonNullable<unknown>,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> implements SimpleCache<TValue, TKey>
{
  private queryClient: QueryClient;

  constructor(queryClient?: QueryClient) {
    this.queryClient = queryClient ?? new QueryClient();
  }

  get(key: TKey): TValue | undefined {
    const queryKey = convertSimpleCacheKeyToQueryKey(key);
    return this.queryClient.getQueryData<TValue>(queryKey);
  }

  set(key: TKey, value: TValue): void {
    const queryKey = convertSimpleCacheKeyToQueryKey(key);
    this.queryClient.setQueryData(queryKey, value);
  }

  delete(key: TKey): boolean {
    const queryKey = convertSimpleCacheKeyToQueryKey(key);
    this.queryClient.removeQueries(queryKey);
    // Assume success because removeQueries does not return a value
    return true;
  }

  clear(): void {
    this.queryClient.clear();
  }

  find(predicate: (value: TValue, key: TKey) => boolean): TValue | undefined {
    const queries = this.queryClient.getQueryCache().findAll();

    for (const query of queries) {
      const value = query.state.data as TValue;
      const key = query.queryKey as TKey;
      if (predicate(value, key)) {
        return value;
      }
    }
    return undefined;
  }
}
