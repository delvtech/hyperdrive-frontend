import { OptionConfig } from "clide-js";

export const competitionModeOption = {
  alias: ["competition-mode"],
  description:
    "Enable competition mode. This will restrict mint, burn, and setRate functions to the contract owner.",
  type: "boolean",
  default: false,
} as const satisfies OptionConfig;
