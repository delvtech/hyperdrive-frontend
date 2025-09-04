import type { Eval } from "@delvtech/drift";

/**
 * A generic constructor type.
 */
export type Constructor<
  TInstanceType = any,
  TArgs extends any[] = any[],
> = new (...args: TArgs) => TInstanceType;

/**
 * Get a union of all keys from all members of `T`.
 *
 * @example
 * ```ts
 * type Foo = { a: string; b: number };
 * type Bar = { a: boolean; b: bigint; c: string };
 *
 * type FoobarKey = keyof (Foo | Bar);
 * // => "a" | "b" ❌ missing "c"
 *
 * type FoobarKey = keyof (Foo & Bar);
 * // => string | number | symbol ❌ intersecting incompatible types returns never
 *
 * type FoobarKey = UnionKey<Foo | Bar>;
 * // => "a" | "b" | "c" ✅
 * ```
 */
export type UnionKey<T> = T extends T ? keyof T : never;

/**
 * Get a union of all keys that are optional or missing in at least one member
 * of `T`.
 *
 * @example
 * ```ts
 * type Foo = { a: string; b?: number };
 * type Bar = { a: boolean; b: bigint; c: string };
 *
 * type OptionalFoobarKey = OptionalUnionKey<Foo | Bar>;
 * // => "b" | "c"
 * // "c" is included because it doesn't exist in Foo
 * ```
 */
export type OptionalUnionKey<T> = keyof {
  [K in UnionKey<T> as T extends {
    [_ in K]: any;
  }
    ? never
    : K]: never;
};

/**
 * Get a union of all keys that are required in all members of `T`.
 *
 * @example
 * ```ts
 * type Foo = { a: string; b?: number };
 * type Bar = { a: boolean; b: bigint; c: string };
 *
 * type RequiredFoobarKey = RequiredUnionKey<Foo | Bar>;
 * // => "a"
 * ```
 */
export type RequiredUnionKey<T> = Exclude<UnionKey<T>, OptionalUnionKey<T>>;

/**
 * Get a union of all values for `K` from all members of `T`.
 *
 * @example
 * ```ts
 * type Foo = { a: string; b?: number };
 * type Bar = { a: boolean; b: bigint; c: string };
 *
 * type FooBar_A = UnionValue<Foo | Bar, "a">;
 * // => string | boolean
 *
 * type FooBar_B = UnionValue<Foo | Bar, "b">;
 * // => number | bigint | undefined
 *
 * type FooBar_C = UnionValue<Foo | Bar, "c">;
 * // => string | undefined
 * ```
 */
export type UnionValue<T, K extends UnionKey<T>> = T extends T
  ? K extends keyof T
    ? T[K]
    : undefined
  : never;

/**
 * Merge a union or intersection of objects into a single type.
 *
 * @example
 * ```ts
 * type GetBlockOptions = {
 *   includeTransactions?: boolean;
 * } & (
 *   | {
 *       blockHash: string;
 *       blockNumber?: undefined;
 *       blockTag?: undefined;
 *     }
 *   | {
 *       blockHash?: undefined;
 *       blockNumber: bigint;
 *       blockTag?: undefined;
 *     }
 *   | {
 *       blockHash?: undefined;
 *       blockNumber?: undefined;
 *       blockTag: string;
 *     }
 * )
 *
 * type Merged = Merge<GetBlockOptions>;
 * // {
 * //   includeTransactions?: boolean | undefined;
 * //   blockHash?: string | undefined;
 * //   blockNumber?: bigint | undefined;
 * //   blockTag?: string | undefined;
 * // }
 * ```
 */
export type Merge<T> = Eval<
  {
    [K in RequiredUnionKey<T>]: UnionValue<T, K>;
  } & {
    [K in OptionalUnionKey<T>]?: UnionValue<T, K>;
  }
>;
