import { OptionConfig, OptionGetter } from "clide-js";
import { Chain } from "viem";
import { SupportedChain, supportedChains } from "../utils/chains.js";

export const chainOption = {
  alias: ["chain"],
  description: "The chain to target.",
  type: "string",
  required: true,
  default: process.env.CHAIN || "localhost",
} as const satisfies OptionConfig;

export async function getChain(getter: OptionGetter<string>): Promise<Chain> {
  const chosenChain = await getter({
    prompt: {
      message: "Select chain",
      type: "select",
      choices: Object.keys(supportedChains).map((chainName) => {
        return {
          title: chainName,
          value: chainName,
        };
      }),
    },
  });
  const chain = supportedChains[chosenChain as SupportedChain];
  return chain;
}
