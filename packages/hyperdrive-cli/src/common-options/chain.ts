import { Client, OptionConfig, OptionGetter } from "clide-js";
import { Chain, defineChain } from "viem";
import {
  arbitrum,
  localhost,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "viem/chains";
import { HyphenCase } from "../utils/types.js";

const { CHAIN, LOCALHOST_CHAIN_ID } = process.env;

const viemChains = {
  [formatChainName(localhost.name)]: {
    ...localhost,
    id: LOCALHOST_CHAIN_ID ? Number(LOCALHOST_CHAIN_ID) : localhost.id,
  },
  [formatChainName(mainnet.name)]: mainnet,
  [formatChainName(sepolia.name)]: sepolia,
  [formatChainName(optimism.name)]: optimism,
  [formatChainName(arbitrum.name)]: arbitrum,
  [formatChainName(polygon.name)]: polygon,
};

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

const defaultClient = new Client();

export const chainOption = {
  alias: ["chain"],
  description: `The chain to target. Can be one of ${promptChoices
    .map((choice) => choice.title)
    .join(", ")}, "other", or "other:<chain-id>".`,
  type: "string",
  required: true,
  default: CHAIN || promptChoices[0].value,
} as const satisfies OptionConfig;

export async function getChain(
  chainOptionGetter: OptionGetter<string>,
  client = defaultClient,
): Promise<Chain> {
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

function formatChainName<K extends string>(name: K): HyphenCase<K> {
  return name.replace(" ", "-").toLowerCase() as HyphenCase<K>;
}

type ViemChain = keyof typeof viemChains;
