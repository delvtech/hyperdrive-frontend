import { LRUCache } from "lru-cache";
import stringify from "fast-json-stable-stringify";
import { SimpleCache, SimpleCacheKey } from "src/cache/SimpleCache";

export class LRUSimpleCache<
  TValue extends NonNullable<unknown> = NonNullable<unknown>,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> implements SimpleCache<TValue, TKey>
{
  protected cache: LRUCache<string, TValue, void>;

  constructor(options: LRUCache.Options<string, TValue, void>) {
    this.cache = new LRUCache(options);
  }

  get(key: TKey): TValue | undefined {
    return this.cache.get(stringify(key));
  }

  set(key: TKey, value: TValue): void {
    this.cache.set(stringify(key), value);
  }

  delete(key: TKey): boolean {
    return this.cache.delete(stringify(key));
  }

  clear(): void {
    this.cache.clear();
  }

  find(predicate: (value: TValue, key: TKey) => boolean): TValue | undefined {
    return this.cache.find((value, key) => predicate(value, JSON.parse(key)));
  }
}
