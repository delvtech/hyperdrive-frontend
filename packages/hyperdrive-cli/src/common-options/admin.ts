import { OptionConfig } from "clide-js";

export const adminOption = {
  alias: ["admin"],
  description:
    "The address of the contract owner. When in competition mode, only the owner can call the mint and burn functions.",
  type: "string",
} as const satisfies OptionConfig;
