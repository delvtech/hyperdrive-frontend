import { MockERC4626 } from "@delvtech/hyperdrive-artifacts/MockERC4626";
import { TokenConfig } from "@hyperdrive/appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { Address } from "viem";
import { usePublicClient, useWriteContract } from "wagmi";

export function useDepositBaseForShares({
  sharesToken,
  baseTokenSymbol,
  destination,
  baseAmount,
  enabled = true,
}: {
  sharesToken: TokenConfig<any>;
  destination: Address | undefined;
  baseTokenSymbol: string;
  baseAmount: bigint | undefined;
  enabled?: boolean;
}): { depositBaseForShares: (() => void) | undefined } {
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();

  const isEnabled =
    !!destination && baseAmount !== undefined && !!publicClient && !!enabled;

  const { writeContract } = useWriteContract();

  const depositBaseForShares = isEnabled
    ? () => {
        return writeContract(
          {
            address: sharesToken.address,
            abi: MockERC4626.abi,
            functionName: "deposit",
            args: [baseAmount, destination],
          },
          {
            onSuccess: async (hash) => {
              toast.loading(
                <TransactionToast
                  message={`Depositing ${baseTokenSymbol} for ${sharesToken.symbol}`}
                  txHash={hash}
                />,
                { id: hash },
              );
              addRecentTransaction({
                hash: hash,
                description: `Deposit ${baseTokenSymbol} for ${sharesToken.symbol}`,
              });
              await waitForTransactionAndInvalidateCache({
                publicClient,
                queryClient,
                hash,
              });
              toast.success(
                <TransactionToast
                  message={`Deposited ${baseTokenSymbol} for ${sharesToken.symbol}`}
                  txHash={hash}
                />,
                { id: hash },
              );
            },
          },
        );
      }
    : undefined;

  return { depositBaseForShares: depositBaseForShares };
}
