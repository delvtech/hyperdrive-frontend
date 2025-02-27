import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { usePublicClient, useWriteContract } from "wagmi";

import { getToken } from "@delvtech/hyperdrive-appconfig";
import { useCallback, useState } from "react";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { ClaimableReward } from "src/rewards/ClaimableReward";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { merklDistributorAbi } from "src/ui/rewards/merklDistributorAbi";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address } from "viem";

export function useClaimReward({
  account,
  reward,
  enabled = true,
}: {
  account: Address | undefined;
  reward: ClaimableReward;
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

    writeContract(
      {
        address: reward.claimContractAddress,
        abi: merklDistributorAbi,
        functionName: "claim",
        args: [
          [account],
          [reward.rewardTokenAddress],
          [BigInt(reward.claimableAmount)],
          [reward.merkleProof],
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
    reward,
    token?.symbol,
    writeContract,
  ]);

  return {
    claim,
    pendingWalletSignatureStatus: status,
    isTransactionMined,
  };
}
