import { fixed } from "@delvtech/fixed-point-wasm";

export function formatRate(
  rate: bigint,
  decimals = 18,
  includePercentSign = true,
): string {
  const [sign, abs] = rate >= 0n ? ["", rate] : ["-", -rate];

  const formatted = `${sign}${fixed(abs, decimals).format({
    percent: true,
    decimals: 2,
  })}`;
  if (includePercentSign) {
    return formatted;
  }
  return formatted.split("%")[0];
}
