import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseLongOptions {
  hyperdriveAddress: Address | undefined;

  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minOutput: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  amountOut: bigint | undefined;
  previewCloseLongStatus: QueryStatus;
}

export function usePreviewCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  minOutput,
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
    minOutput !== undefined && // check undefined since 0 is valid
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewCloseLong", {
      hyperdriveAddress,
      bondAmountIn: bondAmountIn?.toString(),
      minOutput: minOutput?.toString(),
      destination: destination,
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            minAmountOut: minOutput,
            destination,
            asBase,
          })
      : undefined,
  });

  return { amountOut: data?.previewAmountOut, previewCloseLongStatus: status };
}
