import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";

interface UsePreviewAddLiquidityOptions {
  market: Hyperdrive;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  maxAPR: bigint | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewAddLiquidityResult {
  status: "error" | "pending" | "success";
  lpSharesOut: bigint | undefined;
}

export function usePreviewAddLiquidity({
  market,
  destination,
  contribution,
  minAPR,
  maxAPR,
  asUnderlying = true,
  enabled = true,
}: UsePreviewAddLiquidityOptions): UsePreviewAddLiquidityResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled =
    minAPR !== undefined &&
    !!maxAPR &&
    !!contribution &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewAddLiquidity", {
      market: market.address,
      destination,
      contribution: contribution?.toString(),
      minAPR: minAPR?.toString(),
      maxAPR: maxAPR?.toString(),
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewAddLiquidity({
            destination,
            contribution,
            minAPR,
            maxAPR,
            asUnderlying,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return { status, lpSharesOut: data };
}
