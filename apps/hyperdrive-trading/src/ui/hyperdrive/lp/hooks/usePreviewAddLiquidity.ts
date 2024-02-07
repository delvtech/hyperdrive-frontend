import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewAddLiquidityOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  minLpSharePrice: bigint | undefined;
  maxAPR: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewAddLiquidityResult {
  status: "error" | "idle" | "loading" | "success";
  lpSharesOut: bigint | undefined;
}

export function usePreviewAddLiquidity({
  hyperdriveAddress,
  destination,
  contribution,
  minAPR,
  minLpSharePrice,
  maxAPR,
  asBase = true,
  enabled = true,
}: UsePreviewAddLiquidityOptions): UsePreviewAddLiquidityResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryEnabled =
    minAPR !== undefined &&
    minLpSharePrice !== undefined &&
    !!maxAPR &&
    !!contribution &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewAddLiquidity", {
      market: hyperdriveAddress,
      destination,
      contribution: contribution?.toString(),
      minAPR: minAPR?.toString(),
      maxAPR: maxAPR?.toString(),
      asUnderlying: asBase,
    }),
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewAddLiquidity({
            destination,
            contribution,
            minAPR,
            minLpSharePrice,
            maxAPR,
            asBase,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return { status, lpSharesOut: data };
}
