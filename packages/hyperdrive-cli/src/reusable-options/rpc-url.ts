import { OptionConfig, OptionsConfig, OptionsGetter } from "clide-js";

export const rpcUrlOption = {
  alias: ["rpc", "rpc-url"],
  description: "A RPC URL to send the transaction request to",
  type: "string",
  required: true,
  default: process.env.RPC_URL || "http://127.0.0.1:8545",
} satisfies OptionConfig;

// TODO: This type param can be removed once the typescript version of the
// monorepo is updated to >=5.2 (Yay for smarter type inference!)
export function getRpcUrl<T extends OptionsConfig>(
  options: OptionsGetter<T>,
): Promise<string> {
  return options.rpcUrl({
    prompt: "Enter RPC URL",
  }) as Promise<string>;
}
