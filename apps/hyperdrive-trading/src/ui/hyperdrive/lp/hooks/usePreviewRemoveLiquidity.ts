import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";

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
  enabled = true,
}: UsePreviewRemoveLiquidityOptions): UsePreviewRemoveLiquidityResult {
  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled =
    !!lpSharesIn &&
    minBaseAmountOut !== undefined &&
    !!destination &&
    enabled &&
    !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRemoveLiquidity", {
      market: market.address,
      lpSharesIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewRemoveLiquidity({
            lpSharesIn,
            minBaseAmountOut,
            destination,
            asUnderlying,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    previewRemoveLiquidityStatus: status,
    baseAmountOut: data?.baseAmountOut,
    withdrawalSharesOut: data?.withdrawalSharesOut,
  };
}
