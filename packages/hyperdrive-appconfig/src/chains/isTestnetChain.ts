import { foundry, sepolia } from "viem/chains";
import { isForkChain } from "./isForkChain";

/**
 * Checks if the given chain ID corresponds to a testnet chain.
 * @param chainId - The chain ID to check.
 * @returns True if the chain ID corresponds to a testnet chain, false otherwise.
 */
export function isTestnetChain(chainId: number): boolean {
  const testnetChainIds = [sepolia.id, foundry.id] as number[];
  return isForkChain(chainId) || testnetChainIds.includes(chainId);
}
