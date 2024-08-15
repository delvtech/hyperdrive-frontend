import { fixed } from "@delvtech/fixed-point-wasm";

export function formatRate(rate: bigint, decimals = 18): string {
  const [sign, abs] = rate >= 0n ? ["", rate] : ["-", -rate];

  return `${sign}${fixed(abs, decimals).format({
    percent: true,
    decimals: 2,
  })}`;
}
