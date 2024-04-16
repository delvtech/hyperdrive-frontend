import { formatUnits } from "viem";

/**
 * Replacer for JSON.stringify to convert bigints into strings. Helpful when
 * reproducing events in test.
 *
 * Example:
 * JSON.stringify({ id: 1n, value: 100000000000000000n }, replaceBigintWithString);
 * // -> '{ "id": "1n", "value": "dnum.from("1", 18)[0]" }'
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function replaceBigIntWithString(key: string, value: any): string {
  // bigints for non-amounts can just be suffixed with `n`
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
    // otherwise display the formatted value
    return `dnum.from('${formatUnits(value, 18)}', 18)[0]`;
  }
  return value;
}
