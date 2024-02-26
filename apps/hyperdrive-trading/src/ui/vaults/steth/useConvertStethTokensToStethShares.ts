import { MockLido } from "@hyperdrive/artifacts/MockLido";
import { Address } from "viem";
import { useReadContract } from "wagmi";

/**
 * Convert stETH tokens to stETH shares for position openings.  Users typically
 * interact with their wallet's ERC20 balanceOf value, denoting stETH tokens.
 * However, Hyperdrive mandates stETH shares as input, necessitating this
 * conversion for deposit purposes.
 */
export function useConvertStethTokensToStethShares({
  lidoAddress,
  enabled,
  stethTokenAmount,
}: {
  enabled: boolean;
  stethTokenAmount: bigint | undefined;
  lidoAddress: Address;
}): {
  stethShares: bigint | undefined;
  stethSharesStatus: "error" | "success" | "loading";
} {
  const queryEnabled = stethTokenAmount !== undefined && enabled;

  const { data: stethShares, status } = useReadContract({
    abi: MockLido.abi,
    functionName: "getSharesByPooledEth",
    address: lidoAddress,
    args: queryEnabled ? [stethTokenAmount] : undefined,
    query: {
      enabled: queryEnabled,
    },
  });
  return { stethShares, stethSharesStatus: status };
}
