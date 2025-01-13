import { fixed } from "@delvtech/fixed-point-wasm";

/**
 * Formats a rate represented as an 18 decimal bigint as a percentage string.
 */
export function formatRate({
  rate,
  includePercentSign = true,
}: {
  rate: bigint;
  includePercentSign?: boolean;
}): string {
  let formatted = fixed(rate).format({
    percent: true,
    decimals: 2,
    trailingZeros: true,
  });

  if (formatted === "-0.00%") {
    formatted = "0.00%";
  }

  if (!includePercentSign) {
    formatted = formatted.split("%")[0];
  }

  return formatted;
}
