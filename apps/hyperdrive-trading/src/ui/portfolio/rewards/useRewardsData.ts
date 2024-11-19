import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";

interface RewardsResponse {
  userAddress: Address;
  rewards: Reward[];
}

interface Reward {
  chainId: number;
  claimContract: Address;
  claimable: string;
  total: string;
  claimed: string;
  claimableLastUpdated: number;
  rewardToken: Address;
  merkleProof: string[] | null;
  merkleProofLastUpdated: number;
}

function getDummyRewardsResponse(account: Address) {
  const dummyRewardsResponse: RewardsResponse = {
    userAddress: account,
    rewards: [
      {
        // rewards for this user that they can claim
        chainId: 8543,
        claimContract: "0x0000",
        claimable: "1000000",
        total: "1000000",
        claimed: "0",
        claimableLastUpdated: 123456789,
        rewardToken: "0xTOKEN_A",
        merkleProof: ["0xProof", "0xProof", "0xProof"],
        merkleProofLastUpdated: 123892327,
      },
      {
        // rewards are accumulating, but the merkle root hasn't been added
        // to the claimContract yet
        chainId: 8543,
        claimContract: "0x0000",
        total: "1000000",
        claimed: "0",
        claimable: "0",
        claimableLastUpdated: 123456789,
        rewardToken: "0xTOKEN_B",
        merkleProof: null,
        merkleProofLastUpdated: 123892327,
      },
    ],
  };

  return dummyRewardsResponse;
}

export function useRewardsData({ account }: { account: Address | undefined }): {
  rewards: Reward[] | undefined;
  rewardsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account;
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey("rewards", { account }),
    queryFn: queryEnabled
      ? async () => {
          // TODO: Fetch rewards from server
          const rewardsResponse = getDummyRewardsResponse(account);
          return rewardsResponse.rewards;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
