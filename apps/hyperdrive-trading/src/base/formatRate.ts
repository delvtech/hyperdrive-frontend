import { fixed } from "@delvtech/fixed-point-wasm";

export function formatRate(
  rate: bigint,
  decimals = 18,
  includePercentSign = true,
): string {
  const formatted = fixed(rate, decimals).format({
    percent: true,
    decimals: 2,
  });
  if (includePercentSign) {
    return formatted;
  }
  return formatted.split("%")[0];
}
