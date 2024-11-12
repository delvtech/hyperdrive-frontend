import { cloudChain } from "./cloudChain";
import { gnosisFork } from "./gnosisFork";

/**
 * Checks if the given chain ID corresponds to a fork chain.
 * @param chainId - The chain ID to check.
 * @returns True if the chain ID corresponds to a fork chain, false otherwise.
 */
export function isForkChain(chainId: number): boolean {
  const forkChainIds = [cloudChain.id, gnosisFork.id];
  return forkChainIds.includes(chainId);
}
