import { OptionConfig, OptionGetter, UsageError } from "clide-js";
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
      choices: [
        { title: "Ethereum", value: "ethereum" },
        { title: "Polygon", value: "polygon" },
      ],
    },
  });

  const chain = supportedChains[chosenChain as SupportedChain];

  if (!chain) {
    throw new UsageError(`Unsupported chain: ${chosenChain}`);
  }

  return chain;
}
