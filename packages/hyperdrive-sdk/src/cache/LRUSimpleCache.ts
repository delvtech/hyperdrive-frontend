import { LRUCache } from "lru-cache";
import { SimpleCache, SimpleCacheKey } from "src/cache/SimpleCache";

export class LRUSimpleCache<
  TValue extends NonNullable<unknown> = NonNullable<unknown>,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> implements SimpleCache<TValue, TKey>
{
  private cache: LRUCache<TKey, TValue, void>;

  constructor(options: LRUCache.Options<TKey, TValue, void>) {
    this.cache = new LRUCache(options);
  }

  get(key: TKey): TValue | undefined {
    return this.cache.get(key);
  }

  set(key: TKey, value: TValue): void {
    this.cache.set(key, value);
  }

  delete(key: TKey): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  find(predicate: (value: TValue, key: TKey) => boolean): TValue | undefined {
    return this.cache.find(predicate);
  }
}
