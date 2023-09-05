export interface SimpleCache<
  TValue = any,
  TKey extends SimpleCacheKey = SimpleCacheKey,
> {
  get: (key: TKey) => TValue | undefined;
  set: (key: TKey, value: TValue) => void;
  delete: (key: TKey) => boolean;
  clear: () => void;
  find: (
    predicate: (value: TValue, key: TKey) => boolean,
  ) => TValue | undefined;
}

export type SimpleCacheKey = string | any[] | object;
