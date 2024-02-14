import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseShortResult {
  previewCloseShortStatus: QueryStatus;
  amountOut: bigint | undefined;
}

export function usePreviewCloseShort({
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readWriteHyperdrive &&
    !!maturityTime &&
    !!shortAmountIn &&
    minAmountOut !== undefined && // check against undefined explicitly, because base amount of 0 is valid
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      shortAmountIn: shortAmountIn?.toString(),
      minAmountOut: minAmountOut?.toString(),
      destination,
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          readWriteHyperdrive.previewCloseShort({
            asBase,
            destination,
            maturityTime,
            minAmountOut,
            shortAmountIn,
          })
      : undefined,
  });

  return { amountOut: data, previewCloseShortStatus: status };
}
