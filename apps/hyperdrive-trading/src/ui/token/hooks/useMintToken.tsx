import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, formatUnits, parseAbi } from "viem";
import { sepolia } from "viem/chains";
import { usePublicClient, useReadContract, useWriteContract } from "wagmi";

export function useMintToken({
  token,
  destination,
  amount,
}: {
  token: TokenConfig;
  destination: Address | undefined;
  amount: bigint;
}): { mint: (() => void) | undefined } {
  const addRecentTransaction = useAddRecentTransaction();
  const publicClient = usePublicClient({ chainId: token.chainId });
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
    chainId: token.chainId,
    args: [],
    query: {
      enabled:
        token.address !== ETH_MAGIC_NUMBER && token.chainId === sepolia.id,
    },
  });

  let mintAmount = amount;

  // On sepolia, only let users mint half the max amount
  if (token.chainId === sepolia.id) {
    if (maxMintAmount) {
      mintAmount = maxMintAmount / 2n;
    } else {
      mintAmount = 0n;
    }
  }

  const isEnabled = !!destination && !!amount && !!publicClient && !!mintAmount;
  const { writeContract } = useWriteContract();

  const mint = isEnabled
    ? () => {
        return writeContract(
          {
            address: token.address,
            abi: parseAbi([
              "function mint(address destination, uint256 mintAmount)",
            ]),
            functionName: "mint",
            args: [destination, mintAmount],
          },
          {
            onSuccess: async (hash) => {
              toast.loading(
                <TransactionToast
                  chainId={token.chainId}
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
                  chainId={token.chainId}
                  message={`Minted ${token.symbol}`}
                  txHash={hash}
                />,
                { id: hash, duration: SUCCESS_TOAST_DURATION },
              );
            },
          },
        );
      }
    : undefined;

  return { mint };
}
