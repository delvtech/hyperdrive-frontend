export function formatBigInt(value: bigint, precision = 18): string {
  const str = value.toString();
  if (str.length <= precision) {
    const zeros = "0".repeat(precision - str.length);
    return `0.${zeros}${str}`;
  } else {
    const index = str.length - precision;
    return `${str.slice(0, index)}.${str.slice(index)}`;
  }
}
