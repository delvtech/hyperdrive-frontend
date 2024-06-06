import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseLongOptions {
  hyperdriveAddress: Address | undefined;
  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  amountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
  previewCloseLongStatus: QueryStatusWithIdle;
  previewCloseLongError: Error;
}

export function usePreviewCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!hyperdriveAddress &&
    !!maturityTime &&
    !!bondAmountIn &&
    !!readHyperdrive &&
    enabled;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseLong", {
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      bondAmountIn: bondAmountIn?.toString(),
      asBase,
    }),
    // Don't retry this if it throws an error. Normally react-query will retry a
    // failed request 3 times w/ exponential backoff before showing an error to
    // the user. In this case, retrying isn't helpful, since previewCloseLong
    // throws errors on bad inputs and is pretty much a pure function.
    retry: false,
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            asBase,
          })
      : undefined,
  });

  return {
    amountOut: data?.amountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseLongStatus: getStatus(status, fetchStatus),
    previewCloseLongError: error as Error,
  };
}
