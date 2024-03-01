import { SimpleCache, SimpleCacheKey } from "@delvtech/hyperdrive-viem";
import { QueryClient, QueryKey } from "@tanstack/query-core";
import stringify from "fast-json-stable-stringify";

// Convert SimpleCacheKey to QueryKey
function convertSimpleCacheKeyToQueryKey(key: SimpleCacheKey): QueryKey {
  return ["@delvtech/hyperdrive-js-core", stringify(key)];
}

export class QueryClientSimpleCache<
  TValue extends NonNullable<unknown> = NonNullable<unknown>,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> implements SimpleCache<TValue, TKey>
{
  private queryClient: QueryClient;

  constructor(queryClient?: QueryClient) {
    this.queryClient = queryClient ?? new QueryClient();
    this.queryClient
      .getQueryCache()
      .getAll()
      .forEach((query) => {
        return [query.queryKey, query.state.data];
      });
  }

  get entries(): [TKey, TValue][] {
    const queries = this.queryClient.getQueryCache().findAll();
    return queries.map((query) => {
      const key = query.queryKey as TKey;
      const value = query.state.data as TValue;
      return [key, value];
    });
  }

  get(key: TKey): TValue | undefined {
    const queryKey = convertSimpleCacheKeyToQueryKey(key);
    const data = this.queryClient.getQueryState(queryKey);
    // don't return invalidated query data from the cache, it's stale and will
    // need to be refetched!
    if (data?.isInvalidated) {
      return;
    }
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
    console.log("entries", [...this.entries]);
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
