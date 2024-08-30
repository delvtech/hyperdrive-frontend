import { gnosis, mainnet } from "viem/chains";

/**
 * Checks if the given chain ID corresponds to a mainnet chain.
 * @param chainId - The chain ID to check.
 * @returns True if the chain ID corresponds to a mainnet chain, false otherwise.
 */
export function isMainnetChain(chainId: number): boolean {
  const mainnetChainIds: number[] = [mainnet.id, gnosis.id];
  return mainnetChainIds.includes(chainId);
}
