import { OptionConfig } from "clide-js";

export const maxMintAmountOption = {
  alias: ["max-mint-amount"],
  description: "The maximum amount that can be minted at once.",
  type: "string",
  default: "1000000", // 1,000,000.0
} as const satisfies OptionConfig;
