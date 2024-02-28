import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { Address } from "viem";
import { useReadContract } from "wagmi";

/**
 * Convert stETH shares to stETH tokens for position closings.  Users typically
 * interact with their wallet's ERC20 balanceOf value, denoting stETH tokens.
 * However, Hyperdrive mandates stETH shares as output, necessitating this
 * conversion for withdrawal purposes.
 */
export function useConvertStethSharesToStethTokens({
  lidoAddress,
  enabled,
  stethShares,
}: {
  enabled: boolean;
  stethShares: bigint | undefined;
  lidoAddress: Address;
}): {
  stethTokenAmount: bigint | undefined;
  stethSharesStatus: "error" | "success" | "loading";
} {
  const queryEnabled = stethShares !== undefined && enabled;

  const { data: stethTokenAmount, status } = useReadContract({
    abi: MockLido.abi,
    functionName: "getPooledEthByShares",
    address: lidoAddress,
    args: queryEnabled ? [stethShares] : undefined,
    query: {
      enabled: queryEnabled,
    },
  });
  return { stethTokenAmount, stethSharesStatus: status };
}
