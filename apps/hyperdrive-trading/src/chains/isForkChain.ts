import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { rewardsFork } from "src/chains/rewardsFork";

/**
 * Checks if the given chain ID corresponds to a fork chain.
 * @param chainId - The chain ID to check.
 * @returns True if the chain ID corresponds to a fork chain, false otherwise.
 */
export function isForkChain(chainId: number): boolean {
  const forkChainIds = [cloudChain.id, gnosisFork.id, rewardsFork.id];
  return forkChainIds.includes(chainId);
}
