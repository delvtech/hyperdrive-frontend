import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useAccount } from "wagmi";

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
  maxAmountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
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
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const { address: account } = useAccount();
  const queryEnabled =
    !!account &&
    !!hyperdriveAddress &&
    !!maturityTime &&
    !!bondAmountIn &&
    minOutput !== undefined && // check undefined since 0 is valid
    !!destination &&
    !!readHyperdrive &&
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
          readHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            asBase,
          })
      : undefined,
  });

  return {
    maxAmountOut: data?.maxAmountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseLongStatus: status,
  };
}
