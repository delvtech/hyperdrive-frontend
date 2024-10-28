import { AnyReward } from "src/rewards/types";

/**
 * Fetches Moonwell rewards for the given mToken and chainId.
 *
 * @param mToken The address of the Moonwell mToken contract.
 * @param chainId The chainId of the Moonwell deployment.
 * @returns An array of AnyReward objects.
 */
export async function fetchMoonwellRewards(
  mToken: `0x${string}`,
  chainId: number,
): Promise<AnyReward[]> {
  return [];
}
