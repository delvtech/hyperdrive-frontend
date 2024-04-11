import { formatUnits } from "viem";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function replaceBigIntsWithStrings(key: string, value: any): string {
  if (typeof value === "bigint") {
    if (
      key.includes("Time") ||
      key.includes("blockNumber") ||
      key.includes("id") ||
      key.includes("assetId")
    ) {
      // Convert bigint to a string
      return `${value.toString()}n`; // Adding 'n' to differentiate from normal numbers
    }
    return `dnum.from('${formatUnits(value, 18)}', 18)[0]`;
  }
  return value;
}
