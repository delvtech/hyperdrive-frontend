import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseShortOptions {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseShortResult {
  previewCloseShortStatus: QueryStatusWithIdle;
  previewCloseShortError: Error;
  amountOut: bigint | undefined;
  marketEstimate: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
}

export function usePreviewCloseShort({
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readHyperdrive && !!maturityTime && !!shortAmountIn && enabled;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      shortAmountIn: shortAmountIn?.toString(),
      asBase,
    }),

    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          readHyperdrive.previewCloseShort({
            maturityTime,
            shortAmountIn,
            asBase,
          })
      : undefined,
  });

  return {
    amountOut: data?.amountOut,
    marketEstimate: data?.marketEstimate,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseShortStatus: getStatus(status, fetchStatus),
    previewCloseShortError: error as Error,
  };
}
