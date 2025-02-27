import { fetchJson } from "src/base/fetchJson";
import { ClaimableReward } from "src/rewards/ClaimableReward";
import { MerklDistributorsByChain } from "src/rewards/MerklDistributorsByChain";
import { Address, Hex } from "viem";
import { gnosis, mainnet } from "viem/chains";

interface MerklRewardConfig {
  id: "bigShortEnergy" | "miles";
  /**
   * The chain on which rewards are distributed
   */
  rewardChainIds: number[];
  /**
   * A function that returns true if the reward matches what we're looking for
   */
  predicate: (reward: MerklUserReward) => boolean;
}

/**
 * The response shape from the merkl user rewards endpoint
 * See: https://api.merkl.xyz/docs#tag/users/GET/v4/users/{address}/rewards
 */
interface MerklUserReward {
  token: {
    symbol: string;
    name: string | null;
    id: string;
    icon: string;
    chainId: number;
    address: Address;
    decimals: number;
    displaySymbol: string;
  };
  proofs: Hex[];
  claimed: string;
  amount: string;
  pending: string;
}

const merklRewards: MerklRewardConfig[] = [
  {
    id: "miles",
    // Merkl.xyz accumulates Miles across all chains and hyperdrives onto Gnosis
    // chain only. This makes things easier for turning them into HD later if
    // they're all just on one chain.
    rewardChainIds: [gnosis.id],
    predicate: (reward) => {
      return reward.token.symbol === "Miles";
    },
  },
  {
    id: "bigShortEnergy",
    // Big Short Energy distributes dai on mainnet or xdai on gnosis chain
    rewardChainIds: [gnosis.id, mainnet.id],
    predicate: (reward) => {
      return ["dai", "wxdai"].includes(reward.token.symbol.toLowerCase());
    },
  },
];

export async function fetchMerklRewards(
  account: Address,
): Promise<ClaimableReward[]> {
  // url encoded comma-separated list of unique chain ids to check for rewards
  const chainIds = encodeURIComponent(
    [...new Set(merklRewards.flatMap((r) => r.rewardChainIds)).values()].join(
      ",",
    ),
  );

  const response = await fetchJson<{ rewards: MerklUserReward[] }[]>(
    `https://api.merkl.xyz/v4/users/${account}/rewards?chainId=${chainIds}`,
  );

  // Extract the list of all rewards the user has that match what we care about
  const rewards = response.flatMap(({ rewards }) => {
    return rewards.filter((reward) => {
      const hasRewardBalance = !!Number(reward.amount);
      const matchesKnownReward = merklRewards.some(({ predicate }) =>
        predicate(reward),
      );
      return hasRewardBalance && matchesKnownReward;
    });
  });

  // Convert the rewards into ClaimableRewards that we can use
  const claimableRewards = rewards
    .map((reward): ClaimableReward => {
      const chainId = reward.token.chainId;
      return {
        chainId,
        merkleProof: reward.proofs,
        claimableAmount: reward.amount,
        pendingAmount: reward.pending,
        rewardTokenAddress: reward.token.address,
        claimContractAddress: MerklDistributorsByChain[chainId],
      };
    })
    .flat();

  return claimableRewards;
}
