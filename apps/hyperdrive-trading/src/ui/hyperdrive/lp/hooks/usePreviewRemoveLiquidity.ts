import { MutationStatus, useQuery } from "@tanstack/react-query";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UsePreviewRemoveLiquidityOptions {
  market: HyperdriveConfig;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
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
  asBase = true,
  enabled = true,
}: UsePreviewRemoveLiquidityOptions): UsePreviewRemoveLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled =
    !!lpSharesIn &&
    minBaseAmountOut !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRemoveLiquidity", {
      market: market.address,
      lpSharesIn: lpSharesIn?.toString(),
      minBaseAmountOut: minBaseAmountOut?.toString(),
      destination,
      asUnderlying: asBase,
    }),
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewRemoveLiquidity({
            lpSharesIn,
            minBaseAmountOut,
            destination,
            asBase,
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
