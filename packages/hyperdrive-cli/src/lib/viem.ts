import {
  arbitrum,
  localhost,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "viem/chains";
import { HyphenCase } from "../utils/types.js";

export const viemChains = {
  [formatChainName(localhost.name)]: localhost,
  [formatChainName(mainnet.name)]: mainnet,
  [formatChainName(sepolia.name)]: sepolia,
  [formatChainName(optimism.name)]: optimism,
  [formatChainName(arbitrum.name)]: arbitrum,
  [formatChainName(polygon.name)]: polygon,
};

export type ViemChain = keyof typeof viemChains;

export function formatChainName<K extends string>(name: K): HyphenCase<K> {
  return name.replace(" ", "-").toLowerCase() as HyphenCase<K>;
}
