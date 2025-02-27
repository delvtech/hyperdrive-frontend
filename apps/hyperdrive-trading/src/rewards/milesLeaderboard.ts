import { MerklApi } from "@merkl/api";
import groupBy from "lodash.groupby";
import { Address } from "viem";

/**
 * Merkl.xyz API client
 */
export const merklApi = MerklApi("https://api.merkl.xyz").v4;

/**
 * Returns the list of users with Miles and their balances.
 */
export interface LeaderboardEntry {
  address: Address;
  balance: bigint;
  rank: number;
}

export async function fetchMilesLeaderboard(): Promise<LeaderboardEntry[]> {
  const opportunitiesResponse = await fetch(
    "https://api.merkl.xyz/v4/opportunities/campaigns?tokenAddress=0x79385D4B4c531bBbDa25C4cFB749781Bd9E23039",
  );
  const opportunities = (await opportunitiesResponse.json()) as {
    campaigns: { campaignId: string }[];
  }[];
  const campaignIds = Array.from(
    new Set(
      opportunities.flatMap((opportunity) =>
        opportunity.campaigns.map((campaign) => campaign.campaignId),
      ),
    ),
  );

  const users = (
    await Promise.all(
      campaignIds.map(async (campaignId) => {
        const rewardsResponse = await fetch(
          `https://api.merkl.xyz/v4/rewards/?chainId=100&campaignId=${campaignId}`,
        );
        const rewards = (await rewardsResponse.json()) as {
          recipient: Address;
          amount: string;
        }[];
        return rewards;
      }),
    )
  ).flat();

  const rewardsByUser = Object.entries(groupBy(users, (user) => user.recipient))
    .map(([user, rewards]) => {
      const totalRewards = rewards.reduce(
        (total, reward) => total + BigInt(reward.amount),
        0n,
      );
      return { user, totalRewards };
    })
    .filter(({ totalRewards }) => totalRewards > 0n)
    .map(({ user, totalRewards }) => ({
      address: user as Address,
      balance: totalRewards,
    }))
    .toSorted((a, b) => Number(b.balance - a.balance))
    .map((entry, i) => ({ ...entry, rank: i + 1 })) as LeaderboardEntry[];

  return rewardsByUser;
}
