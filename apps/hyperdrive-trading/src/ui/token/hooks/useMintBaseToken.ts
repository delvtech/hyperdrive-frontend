import { ERC20MintableABI } from "@hyperdrive/sdk";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { Address, formatUnits } from "viem";
import {
  useChainId,
  useContractWrite,
  usePrepareContractWrite,
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
  const { data } = useToken({
    address: baseToken,
    staleTime: Infinity,
  });

  const isEnabled = !!destination && !!amount && chainId === 31337 && !!data;

  const { config } = usePrepareContractWrite({
    address: baseToken,
    abi: ERC20MintableABI,
    functionName: "mint",
    enabled: isEnabled,
    args: isEnabled ? [destination, amount] : undefined,
  });

  const { write: mint } = useContractWrite({
    ...config,
    onSuccess: (result) => {
      addRecentTransaction({
        hash: result.hash,
        description: `Mint ${formatUnits(amount, data?.decimals || 0)} ${
          data?.symbol
        }`,
      });
    },
  });

  return { mint };
}
