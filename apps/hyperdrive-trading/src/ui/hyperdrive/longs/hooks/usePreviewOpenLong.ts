import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
interface UsePreviewOpenLongOptions {
  market: Hyperdrive;
  baseAmount: bigint | undefined;
  enabled?: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  longAmountOut: bigint | undefined;
  maturityTime: bigint | undefined;
}

export function usePreviewOpenLong({
  market,
  baseAmount,
  enabled,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled = !!readWriteHyperdrive && !!baseAmount && enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      market: market.address,
      baseAmount: baseAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewOpenLong({
            baseAmount,
          })
      : undefined,
  });
  return {
    longAmountOut: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    status,
  };
}
