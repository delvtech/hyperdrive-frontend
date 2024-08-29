import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { foundry, mainnet, sepolia } from "viem/chains";

export const supportedChainIds = [
  cloudChain.id,
  gnosisFork.id,
  foundry.id,
  mainnet.id,
  sepolia.id,
] as const;

/**
 * @deprecated Can't strongly type this because custom chains have their chain
 * ID set via an environment variable.
 */
export type SupportedChainId = (typeof supportedChainIds)[number];
