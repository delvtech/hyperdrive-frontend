import { foundry, mainnet, sepolia } from "viem/chains";

export const supportedChainIds = [
  42069, // cloud chain
  foundry.id,
  mainnet.id,
  sepolia.id,
] as const;

export type SupportedChainId = (typeof supportedChainIds)[number];
