import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";

interface UsePreviewRemoveLiquidityOptions {
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewRemoveLiquidityResult {
  previewRemoveLiquidityStatus: MutationStatus;
  proceeds: bigint | undefined;
  withdrawalShares: bigint | undefined;
}

export function usePreviewRemoveLiquidity({
  hyperdriveAddress,
  lpSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled = true,
}: UsePreviewRemoveLiquidityOptions): UsePreviewRemoveLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const queryEnabled =
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive &&
    !!hyperdriveModel;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRemoveLiquidity", {
      market: hyperdriveAddress,
      lpSharesIn: lpSharesIn?.toString(),
      minOutputPerShare: minOutputPerShare?.toString(),
      destination,
      asBase,
    }),
    queryFn: queryEnabled
      ? () =>
          asBase
            ? hyperdriveModel.previewRemoveLiquidityWithBase({
                lpSharesIn,
                minOutputPerShare,
                destination,
              })
            : hyperdriveModel.previewRemoveLiquidityWithShares({
                lpSharesIn,
                minOutputPerShare,
                destination,
              })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    previewRemoveLiquidityStatus: status,
    proceeds: data?.proceeds,
    withdrawalShares: data?.withdrawalShares,
  };
}
