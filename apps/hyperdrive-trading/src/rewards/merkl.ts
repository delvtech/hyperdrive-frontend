import { MerklApi } from "@merkl/api";
import groupBy from "lodash.groupby";
import { ClaimableReward } from "src/rewards/ClaimableReward";
import { Address, Hash } from "viem";
import { gnosis } from "viem/chains";

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

/**
 * Merkl Distributor is the contract that you can claim rewards from in the
 * Merkl.xyz ecosystem.
 * See: https://app.merkl.xyz/status
 */
export const MerklDistributorsByChain: Record<number, Address> = {
  [gnosis.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
};

/**
 * Fetches the number of Miles a user has earned
 */
export async function fetchMileRewards(
  account: Address,
): Promise<ClaimableReward[]> {
  // Merkl.xyz accumulates Miles across all chains and hyperdrives onto Gnosis
  // chain only. This makes things easier for turning them into HD later if
  // they're all just on one chain.
  const chainIds = [gnosis.id];

  // Request miles earned on each chain. We have to call this once per chain
  // since the merkl api is buggy, despite accepting an array of chain ids. If
  // this gets fixed, we can remove the Promise.all and simplify this logic.
  const mileRewards = (
    await Promise.all(
      chainIds.map(async (chainId) => {
        const { data } = await merklApi
          .users({
            address: account,
          })
          .rewards.get({
            query: {
              chainId: [chainId],
            },
          });

        return { data, chainId };
      }),
    )
  )
    .filter(
      ({ data }) =>
        data?.length &&
        // since we only request a single chain id, we can just grab the first
        // data item
        data[0].rewards.find(
          // Merkl.xyz has something called HYPOINTS too, but we only care about
          // Miles
          (d) => d.token.symbol === "Miles" && !!Number(d.amount),
        ),
    )
    .map(({ data, chainId }): ClaimableReward => {
      const rewards = data![0].rewards.find(
        (d) => d.token.symbol === "Miles" && !!Number(d.amount),
      );
      return {
        chainId,
        merkleType: "MerklXyz",
        merkleProof: rewards?.proofs as Hash[],
        claimableAmount: rewards?.amount.toString() || "0",
        pendingAmount: rewards?.pending.toString() || "0",
        merkleProofLastUpdated: 0,
        rewardTokenAddress: rewards?.token.address as `0x${string}`,
        // TODO: This won't use the same abi as the hyperdrive rewards api, so
        // we'll need to account for this somehow
        claimContractAddress: MerklDistributorsByChain[chainId],
      };
    })
    .flat();
  return mileRewards;
}
