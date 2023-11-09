/**
 * Recursively converts a primitive type to a new type. The `predicateFn` is
 * used to determine if the `converterFn` should be run on the value. Only the
 * primitive values will passed to the functions, so:
 * - For primitive types, the functions are called with the value itself.
 * - For arrays, the functions are called with each primitive in the array.
 * - For objects, the functions are called with each primitive in the object.
 *
 * @param value - The value to convert primitive types in.
 * @param predicateFn - A function that returns true if the `converterFn` should
 * be run on the value.
 * @param converterFn - A function that converts the value to a new type.
 * @returns - The converted value.
 *
 * @example
 * // Convert all bigints to string.
 * convertType(
 *   { a: 100n, b: { c: 200n }, d: [300n] },
 *   (value): value is bigint => typeof value === "bigint",
 *   (value) => value.toString(),
 * );
 * // => { a: "100", b: { c: "200" }, d: ["300"] }
 */
export function convertType<T, TOriginal, TNew>(
  value: T,
  predicateFn: (value: any) => value is TOriginal,
  converterFn: (value: TOriginal) => TNew,
): Converted<T, TOriginal, TNew> {
  if (predicateFn(value)) {
    return converterFn(value) as Converted<T, TOriginal, TNew>;
  }

  if (Array.isArray(value)) {
    return value.map((item) =>
      convertType(item, predicateFn, converterFn),
    ) as Converted<T, TOriginal, TNew>;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key,
        convertType(value, predicateFn, converterFn),
      ]),
    ) as Converted<T, TOriginal, TNew>;
  }

  return value as Converted<T, TOriginal, TNew>;
}

/**
 * The converted type of `T` where all instances of `TOriginal` are replaced
 * with `TNew`.
 */
export type Converted<T, TOriginal, TNew> = T extends TOriginal
  ? TNew
  : T extends Array<infer U>
  ? Converted<U, TOriginal, TNew>[]
  : T extends object
  ? { [K in keyof T]: Converted<T[K], TOriginal, TNew> }
  : T;
