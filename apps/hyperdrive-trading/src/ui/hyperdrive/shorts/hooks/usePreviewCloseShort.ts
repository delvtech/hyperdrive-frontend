import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UsePreviewCloseShortOptions {
  hyperdriveAddress: Address | undefined;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseShortResult {
  previewCloseShortStatus: QueryStatus;
  baseAmountOut: bigint | undefined;
}

export function usePreviewCloseShort({
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readWriteHyperdrive &&
    !!maturityTime &&
    !!shortAmountIn &&
    minBaseAmountOut !== undefined && // check against undefined explicitly, because base amount of 0 is valid
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
      shortAmountIn: shortAmountIn?.toString(),
      minBaseAmountOut: minBaseAmountOut?.toString(),
      destination,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          readWriteHyperdrive.previewCloseShort({
            asUnderlying,
            destination,
            maturityTime,
            minBaseAmountOut,
            shortAmountIn,
          })
      : undefined,
  });

  return { baseAmountOut: data, previewCloseShortStatus: status };
}
