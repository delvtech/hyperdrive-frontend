import { ERC20MintableABI } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { Address, formatUnits } from "viem";
import {
  useChainId,
  useContractSimulate,
  useContractWrite,
  useToken,
} from "wagmi";

export function useMintBaseToken({
  baseToken,
  destination,
  amount,
}: {
  baseToken: Address;
  destination: Address | undefined;
  amount: bigint;
}): { mint: (() => void) | undefined } {
  const addRecentTransaction = useAddRecentTransaction();
  const chainId = useChainId();
  const { data: tokenData } = useToken({
    address: baseToken,
    query: { staleTime: Infinity },
  });

  const isEnabled =
    !!destination && !!amount && chainId === 31337 && !!tokenData;

  const { data } = useContractSimulate({
    address: baseToken,
    abi: ERC20MintableABI,
    functionName: "mint",
    enabled: isEnabled,
    args: isEnabled ? [destination, amount] : undefined,
  });

  const { writeContract: mint } = useContractWrite({
    mutation: {
      onSuccess(data) {
        addRecentTransaction({
          hash: data,
          description: `Mint ${formatUnits(amount, tokenData?.decimals || 0)} ${
            tokenData?.symbol
          }`,
        });
      },
    },
  });

  return { mint: data ? () => mint(data?.request) : undefined };
}
