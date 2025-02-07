import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { getToken } from "@delvtech/hyperdrive-appconfig";
import { hyperdriveRewardsAbi } from "@delvtech/hyperdrive-js";
import { useCallback, useState } from "react";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { Reward } from "src/rewards/generated/HyperdriveRewardsApi";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address } from "viem";

export function useClaimReward({
  account,
  reward,
  enabled = true,
}: {
  account: Address | undefined;
  reward: Reward;
  enabled?: boolean;
}): {
  claim: (() => void) | undefined;
  pendingWalletSignatureStatus: QueryStatusWithIdle;
  isTransactionMined: boolean;
} {
  const { writeContract, status } = useWriteContract();
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient({ chainId: reward.chainId });
  const appConfig = useAppConfigForConnectedChain({ strict: false });
  const [isTransactionMined, setIsTransactionMined] = useState(false);
  const queryEnabled = !!account && !!enabled && !!publicClient;
  const token = getToken({
    tokenAddress: reward.rewardTokenAddress,
    chainId: reward.chainId,
    appConfig,
  });

  const claim = useCallback(() => {
    if (!queryEnabled) {
      return;
    }

    return writeContract(
      {
        abi: hyperdriveRewardsAbi,
        address: reward.claimContractAddress,
        chainId: reward.chainId,
        functionName: "claim",
        args: [
          account,
          reward.rewardTokenAddress,
          BigInt(reward.claimableAmount), // must be the claimable amount, since it's baked into the merkle proof
          reward.merkleProof,
        ],
      },
      {
        onSuccess: async (hash) => {
          addRecentTransaction({
            hash,
            description: "Claim Reward",
          });
          setIsTransactionMined(false);
          toast.loading(
            <TransactionToast
              chainId={reward.chainId}
              message={`Claiming ${token?.symbol} reward...`}
              txHash={hash}
            />,
            { id: hash },
          );

          await waitForTransactionAndInvalidateCache({
            publicClient,
            hash,
            queryClient,
          });
          setIsTransactionMined(true);

          toast.success(
            <TransactionToast
              chainId={reward.chainId}
              message={`Claimed ${token?.symbol} reward`}
              txHash={hash}
            />,
            { id: hash, duration: SUCCESS_TOAST_DURATION },
          );
        },
      },
    );
  }, [
    account,
    addRecentTransaction,
    publicClient,
    queryEnabled,
    reward.chainId,
    reward.claimContractAddress,
    reward.claimableAmount,
    reward.merkleProof,
    reward.rewardTokenAddress,
    token?.symbol,
    writeContract,
  ]);

  return {
    claim,
    pendingWalletSignatureStatus: status,
    isTransactionMined,
  };
}
