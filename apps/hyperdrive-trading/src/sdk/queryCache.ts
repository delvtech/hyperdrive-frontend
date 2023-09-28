import { SimpleCache, SimpleCacheKey } from "@hyperdrive/sdk";
import { QueryClient, QueryKey } from "@tanstack/react-query";
import stringify from "fast-json-stable-stringify";

// Convert SimpleCacheKey to QueryKey
function toQueryKey(key: SimpleCacheKey): QueryKey {
  return [stringify(key)];
}

export class QueryCacheSdk<
  TValue extends NonNullable<unknown> = NonNullable<unknown>,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> implements SimpleCache<TValue, TKey>
{
  private queryClient: QueryClient;

  constructor() {
    this.queryClient = new QueryClient();
  }

  get(key: TKey): TValue | undefined {
    const queryKey = toQueryKey(key);
    return this.queryClient.getQueryData<TValue>(queryKey);
  }

  set(key: TKey, value: TValue): void {
    const queryKey = toQueryKey(key);
    this.queryClient.setQueryData(queryKey, value);
  }

  delete(key: TKey): boolean {
    const queryKey = toQueryKey(key);
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

  subscribe(key: TKey): void {
    const queryKey = toQueryKey(key);
    const unsub = this.queryClient.getQueryCache().subscribe((event) => {
      if (
        event.query.getObserversCount() === 0 &&
        event.query.queryKey === queryKey
      ) {
        unsub();
      }
    });
  }
}
