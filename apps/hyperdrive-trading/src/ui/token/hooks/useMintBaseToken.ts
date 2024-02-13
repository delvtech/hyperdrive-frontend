import { TokenConfig } from "@hyperdrive/appconfig";
import { ERC20Mintable } from "@hyperdrive/artifacts/ERC20Mintable";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { Address, formatUnits } from "viem";
import { useChainId, useWriteContract } from "wagmi";

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
  const chainId = useChainId();
  const isEnabled = !!destination && !!amount;
  const { writeContract } = useWriteContract();

  const mint = isEnabled
    ? () =>
        writeContract(
          {
            address: baseToken.address,
            abi: ERC20Mintable.abi,
            functionName: "mint",
            // enabled: isEnabled,
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
            },
          },
        )
    : undefined;

  return { mint };
}
