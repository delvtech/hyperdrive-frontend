import { HyperdriveABI } from "@hyperdrive/core";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewRemoveLiquidityOptions {
  market: Hyperdrive;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewRemoveLiquidityResult {
  previewRemoveLiquidityStatus: MutationStatus;
  baseAmountOut: bigint | undefined;
  withdrawalSharesOut: bigint | undefined;
}

export function usePreviewRemoveLiquidity({
  market,
  lpSharesIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UsePreviewRemoveLiquidityOptions): UsePreviewRemoveLiquidityResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!lpSharesIn && minBaseAmountOut !== undefined && !!destination && enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-remove-liquidity",
      {
        market: market.address,
        lpSharesIn: lpSharesIn?.toString(),
        minBaseAmountOut: minBaseAmountOut?.toString(),
        destination: destination?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            account,
            functionName: "removeLiquidity",
            args: [lpSharesIn, minBaseAmountOut, destination, asUnderlying],
          });

          return {
            baseAmountOut: result[0] as bigint,
            withdrawalSharesOut: result[1] as bigint,
          };
        }
      : undefined,
  });

  return {
    previewRemoveLiquidityStatus: status,
    baseAmountOut: data?.baseAmountOut,
    withdrawalSharesOut: data?.withdrawalSharesOut,
  };
}
