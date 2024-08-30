import { gnosis, mainnet, sepolia } from "viem/chains";

/**
 * Base URLs for known block explorers by chain ID.
 */
export const blockExplorers: Record<number, string> = {
  [mainnet.id]: "https://etherscan.io",
  [sepolia.id]: "https://sepolia.etherscan.io",
  [gnosis.id]: "https://gnosisscan.io",
};
