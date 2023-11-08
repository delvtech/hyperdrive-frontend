import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UsePreviewCloseLongOptions {
  hyperdriveAddress: Address | undefined;

  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  baseAmountOut: bigint | undefined;
  previewCloseLongStatus: QueryStatus;
}

export function usePreviewCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asBase = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readWriteHyperdrive &&
    !!hyperdriveAddress &&
    !!maturityTime &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewCloseLong", {
      hyperdriveAddress,
      bondAmountIn: bondAmountIn?.toString(),
      minBaseAmountOut: minBaseAmountOut?.toString(),
      destination: destination,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            minBaseAmountOut,
            destination,
            asBase,
          })
      : undefined,
  });

  return { baseAmountOut: data, previewCloseLongStatus: status };
}
