import { OptionConfig } from "clide-js";

export const rpcUrlOption = {
  alias: ["rpc-url"],
  description: "An RPC URL to send the transaction request to.",
  type: "string",
  required: true,
  default: process.env.RPC_URL || "http://localhost:8545",
} as const satisfies OptionConfig;
