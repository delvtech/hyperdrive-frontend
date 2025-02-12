import { hyperdriveRewardsAbi } from "@delvtech/hyperdrive-js";
import { Address } from "viem";
import { useReadContract } from "wagmi";

export function useClaimedRewards({
  rewardTokenAddress,
  claimContractAddress,
  chainId,
  account,
}: {
  rewardTokenAddress: Address | undefined;
  claimContractAddress: Address | undefined;
  chainId: number | undefined;
  account: Address | undefined;
}): { claimed: bigint | undefined; status: "loading" | "error" | "success" } {
  const enabled = !!rewardTokenAddress && !!account;
  const { data: claimed, status } = useReadContract({
    address: claimContractAddress,
    abi: hyperdriveRewardsAbi,
    functionName: "claimed",
    chainId,
    args: enabled ? [account, rewardTokenAddress] : undefined,
    query: {
      enabled,
    },
  });

  return { claimed, status };
}
