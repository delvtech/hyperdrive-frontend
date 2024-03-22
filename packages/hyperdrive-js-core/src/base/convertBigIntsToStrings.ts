import { Converted, convertType } from "src/base/convertType";

export function convertBigIntsToStrings<T>(
  value: T,
): Converted<T, bigint, string> {
  return convertType(
    value,
    (value): value is bigint => typeof value === "bigint",
    (value) => value.toString(),
  );
}
