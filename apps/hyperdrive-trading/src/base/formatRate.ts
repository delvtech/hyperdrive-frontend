import { fixed } from "@delvtech/fixed-point-wasm";

export function formatRate(
  rate: bigint,
  decimals = 18,
  includePercentSign = true,
): string {
  let formatted = fixed(rate, decimals).format({
    percent: true,
    decimals: 2,
  });

  if (formatted === "-0.00%") {
    formatted = "0.00%";
  }

  if (!includePercentSign) {
    formatted = formatted.split("%")[0];
  }

  return formatted;
}
