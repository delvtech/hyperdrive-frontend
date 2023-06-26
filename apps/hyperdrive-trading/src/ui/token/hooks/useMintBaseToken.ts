import { ERC20MintableABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { Address } from "viem";
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
        description: `Mint ${formatBigInt(amount, data?.decimals)} ${
          data?.symbol
        }`,
      });
    },
  });

  return { mint };
}
