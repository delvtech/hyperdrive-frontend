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

/**
 * Represents possible serializable key types for the SimpleCache. Can be a
 * primitive (string, number, boolean), an array of SimpleCache (with possible
 * null/undefined values), or a record with string keys and SimpleCache (or
 * null) values.
 */
export type SimpleCacheKey =
  | KeyPrimitive
  | (SimpleCacheKey | null | undefined)[]
  | {
      [key: string]: SimpleCacheKey | null;
    };

/** Primitive types that can be used as part of a cache key. */
type KeyPrimitive = string | number | boolean;
