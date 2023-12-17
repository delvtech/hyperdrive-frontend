import {
  OptionConfig,
  OptionsConfig,
  OptionsGetter,
  UsageError,
} from "clide-js";
import { SupportedChain, supportedChains } from "src/utils/chains.js";
import { Chain } from "viem";

export const chainOption = {
  alias: ["chain"],
  description: "The chain to target.",
  type: "string",
  required: true,
  default: process.env.CHAIN || "localhost",
} satisfies OptionConfig;

// TODO: This type param can be removed once the typescript version of the
// monorepo is updated to >=5.2 (Yay for smarter type inference!)
export async function getChain<T extends OptionsConfig>(
  options: OptionsGetter<T>,
): Promise<Chain> {
  const chosenChain = await options.chain({
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
