import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";

export const supportedChainIds = [
  42069, // cloud chain
  foundry.id,
  mainnet.id,
  sepolia.id,
  baseSepolia.id,
  b3Sepolia.id,
] as const;

export type SupportedChainId = (typeof supportedChainIds)[number];
