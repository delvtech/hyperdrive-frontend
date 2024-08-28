import { cloudChain } from "src/chains/cloudChain";
import { foundry, sepolia } from "viem/chains";

/**
 * Checks if the given chain ID corresponds to a testnet chain.
 * @param chainId - The chain ID to check.
 * @returns True if the chain ID corresponds to a testnet chain, false otherwise.
 */
export function isTestnetChain(chainId: number): boolean {
  const testnetChainIds = [cloudChain.id, sepolia.id, foundry.id, 42069];
  return testnetChainIds.includes(chainId);
}
