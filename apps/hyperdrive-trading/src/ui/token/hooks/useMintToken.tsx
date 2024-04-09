import { ERC20Mintable } from "@delvtech/hyperdrive-artifacts/ERC20Mintable";
import { TokenConfig } from "@hyperdrive/appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { Address, formatUnits } from "viem";
import { usePublicClient, useReadContract, useWriteContract } from "wagmi";

export function useMintToken({
  token,
  destination,
  amount,
}: {
  token: TokenConfig<any>;
  destination: Address | undefined;
  amount: bigint;
}): { mint: (() => void) | undefined } {
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient();
  const { data: maxMintAmount } = useReadContract({
    abi: [
      {
        type: "function",
        name: "maxMintAmount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
    ],
    functionName: "maxMintAmount",
    address: token.address,
    args: [],
  });

  const mintAmount =
    maxMintAmount !== undefined ? dnum.divide(maxMintAmount, [2n, 0])[0] : 0n;

  const isEnabled = !!destination && !!amount && !!publicClient && !!mintAmount;
  const { writeContract } = useWriteContract();

  const mint = isEnabled
    ? () => {
        return writeContract(
          {
            address: token.address,
            abi: ERC20Mintable.abi,
            functionName: "mint",
            args: [destination, mintAmount],
          },
          {
            onSuccess: async (hash) => {
              toast.loading(
                <TransactionToast
                  message={`Minting ${token.symbol}`}
                  txHash={hash}
                />,
                { id: hash },
              );
              addRecentTransaction({
                hash: hash,
                description: `Mint ${formatUnits(amount, token.decimals)} ${token.symbol}`,
              });
              await waitForTransactionAndInvalidateCache({
                publicClient,
                queryClient,
                hash,
              });
              toast.success(
                <TransactionToast
                  message={`Minted ${token.symbol}`}
                  txHash={hash}
                />,
                { id: hash },
              );
            },
          },
        );
      }
    : undefined;

  return { mint };
}
