export function sumBigInt(values: bigint[]): bigint {
  return values.reduce((prev, current) => prev + current, 0n);
}
