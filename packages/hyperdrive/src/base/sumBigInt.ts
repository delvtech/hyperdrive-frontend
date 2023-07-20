export function sumBigInt(list: bigint[]): bigint {
  return list.reduce((prev, current) => prev + current, 0n);
}
