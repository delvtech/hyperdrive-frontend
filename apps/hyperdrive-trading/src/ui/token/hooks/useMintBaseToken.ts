import { TokenConfig } from "@hyperdrive/appconfig";
import { ERC20Mintable } from "@hyperdrive/artifacts/ERC20Mintable";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import { Address, formatUnits } from "viem";
import { usePublicClient, useWriteContract } from "wagmi";

export function useMintBaseToken({
  baseToken,
  destination,
  amount,
}: {
  baseToken: TokenConfig;
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
            address: baseToken.address,
            abi: ERC20Mintable.abi,
            functionName: "mint",
            args: [destination, amount],
          },
          {
            onSuccess: (hash) => {
              addRecentTransaction({
                hash: hash,
                description: `Mint ${formatUnits(amount, baseToken.decimals)} ${
                  baseToken.symbol
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
