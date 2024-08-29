import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";

export const supportedChainIds = [
  cloudChain.id,
  gnosisFork.id,
  foundry.id,
  mainnet.id,
  sepolia.id,
  baseSepolia.id,
  b3Sepolia.id,
] as const;

export type SupportedChainId = (typeof supportedChainIds)[number];
