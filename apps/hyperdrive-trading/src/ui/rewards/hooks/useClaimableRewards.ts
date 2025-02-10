import { parseFixed } from "@delvtech/fixed-point-wasm";
import { MerklApi } from "@merkl/api";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import {
  HyperdriveRewardsApi,
  Reward,
} from "src/rewards/generated/HyperdriveRewardsApi";
import { Address, Hash } from "viem";
import { base, gnosis, linea, mainnet } from "viem/chains";
import { usePublicClient } from "wagmi";

export function useClaimableRewards({
  account,
}: {
  account: Address | undefined;
}): {
  rewards: Reward[] | undefined;
  rewardsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const queryEnabled = !!account && !!publicClient;
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "unclaimedRewards",
      params: { account },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const hyperdriveRewards = await fetchHyperdriveRewardApi(account);

          const mileRewards = await fetchMileRewards(account);
          const allRewards = [...hyperdriveRewards, ...mileRewards];

          return allRewards;
        }
      : undefined,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
/**
 * Rewards that come from the Hyperdrive Rewards API server. This server also
 * defines the shape used for rewards everywhere else in the app.
 */
async function fetchHyperdriveRewardApi(account: Address): Promise<Reward[]> {
  const rewardsApi = new HyperdriveRewardsApi({
    baseUrl: import.meta.env.VITE_REWARDS_BASE_URL,
  });

  try {
    const response = await rewardsApi.get.rewardsUserDetail(account);
    // TODO: Remove this once claimbableAmount is no longer formatted server side
    return response.rewards.map((r) => ({
      ...r,
      claimableAmount: parseFixed(r.claimableAmount).bigint.toString(),
    }));
  } catch (error: any) {
    // This throws a 404 if the account does not have any rewards, which
    // is fine, just return an empty array and display no rewards
    if (error.error.error === "No rewards found for this address") {
      console.log("No rewards found for this address");
      return [];
    }
    // There are no other well-known errors we can catch, so re-throw
    throw error;
  }
}
/**
 *
 * Rewards that come from the Merkl.xyz API server. This server
 * @param account
 */
const merkl = MerklApi("https://api.merkl.xyz").v4;

/**
 * Merkl Distributor is the contract that you can claim rewards from in the
 * Merkl.xyz ecosystem.
 * See: https://app.merkl.xyz/status
 */
const MerklDistributorsByChain: Record<number, Address> = {
  [mainnet.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
  [gnosis.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
  [base.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
  [linea.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
};

async function fetchMileRewards(account: Address): Promise<Reward[]> {
  const chainIds = [mainnet.id, gnosis.id, linea.id, base.id];

  // Request miles earned on each chain. We have to call this once per chain
  // since the merkl api is buggy, despite accepting an array of chain ids. If
  // this gets fixed, we can remove the Promise.all and simplify this logic.
  const mileRewards = (
    await Promise.all(
      chainIds.map(async (chainId) => {
        const { data } = await merkl
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
          (d) => d.token.symbol === "Miles" && !!Number(d.amount),
        ),
    )
    .map(({ data, chainId }) => {
      const rewards = data![0].rewards.find(
        (d) => d.token.symbol === "Miles" && !!Number(d.amount),
      );
      return {
        chainId,
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
