import { Client, OptionConfig, OptionGetter } from "clide-js";
import { Chain, defineChain } from "viem";
import { ViemChain, viemChains } from "../lib/viem.js";

const promptChoices = [
  ...Object.keys(viemChains).map((chainName) => {
    return {
      title: chainName,
      value: chainName,
    };
  }),
  {
    title: "other",
    value: "other",
  },
];

export const chainOption = {
  alias: ["chain"],
  description: `The chain to target. Can be one of ${promptChoices
    .map((choice) => choice.title)
    .join(", ")}, "other", or "other:<chain-id>".`,
  type: "string",
  required: true,
  default: process.env.CHAIN || "localhost",
} as const satisfies OptionConfig;

export async function getChain(
  chainOptionGetter: OptionGetter<string>,
  client: Client,
): Promise<Chain> {
  promptChoices.push({
    title: "other",
    value: "other",
  });

  const chosenChain = (await chainOptionGetter({
    prompt: {
      message: "Select chain",
      type: "select",
      choices: promptChoices,
    },
  })) as ViemChain | "other" | `other:${number}`;

  if (chosenChain in viemChains) {
    return viemChains[chosenChain as ViemChain];
  }

  const id = chosenChain.startsWith("other:")
    ? parseInt(chosenChain.split(":")[1])
    : await client.prompt({
        message: "Enter chain ID",
        type: "number",
      });

  return defineChain({
    id,
    name: chosenChain,
    network: "other",
    nativeCurrency: {
      decimals: 18,
      name: "Native Currency",
      symbol: "VALUE",
    },
    rpcUrls: {
      default: { http: [] },
      public: { http: [] },
    },
  });
}
