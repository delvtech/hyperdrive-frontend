import { ERC20Mintable } from "@delvtech/hyperdrive-artifacts/ERC20Mintable";
import { TokenConfig } from "@hyperdrive/appconfig";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address, formatUnits } from "viem";
import { usePublicClient, useWriteContract } from "wagmi";

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
  const isEnabled = !!destination && !!amount && !!publicClient;
  const { writeContract } = useWriteContract();

  const mint = isEnabled
    ? () =>
        writeContract(
          {
            address: token.address,
            abi: ERC20Mintable.abi,
            functionName: "mint",
            args: [destination, amount],
          },
          {
            onSuccess: (hash) => {
              addRecentTransaction({
                hash: hash,
                description: `Mint ${formatUnits(amount, token.decimals)} ${
                  token.symbol
                }`,
              });
              waitForTransactionAndInvalidateCache({
                publicClient,
                queryClient,
                hash,
              });
            },
          },
        )
    : undefined;

  return { mint };
}
