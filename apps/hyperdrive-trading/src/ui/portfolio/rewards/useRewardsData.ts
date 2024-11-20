import { parseFixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address, zeroAddress } from "viem";
import { base } from "viem/chains";

interface RewardsResponse {
  userAddress: Address;
  rewards: Reward[];
}

export interface Reward {
  chainId: number;
  claimContract: Address;
  claimable: bigint;
  total: bigint;
  claimed: bigint;
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
        chainId: base.id,
        claimContract: zeroAddress,
        claimable: parseFixed("1000000").bigint,
        total: parseFixed("1000000").bigint,
        claimed: parseFixed("0").bigint,
        claimableLastUpdated: 123456789,
        rewardToken: appConfig.tokens.find(
          (token) => token.chainId === 8453 && token.symbol === "MORPHO",
        )!.address,
        merkleProof: ["0xProof", "0xProof", "0xProof"],
        merkleProofLastUpdated: 123892327,
      },
      {
        // rewards are accumulating, but the merkle root hasn't been added
        // to the claimContract yet
        chainId: base.id,
        claimContract: zeroAddress,
        total: parseFixed("1000000").bigint,
        claimed: parseFixed("0").bigint,
        claimable: parseFixed("0").bigint,
        claimableLastUpdated: 123456789,
        rewardToken: appConfig.tokens.find(
          (token) => token.chainId === 8453 && token.symbol === "USDC",
        )!.address,
        merkleProof: null,
        merkleProofLastUpdated: 123892327,
      },
    ],
  };

  return dummyRewardsResponse;
}

export function usePortfolioRewardsData({
  account,
}: {
  account: Address | undefined;
}): {
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
