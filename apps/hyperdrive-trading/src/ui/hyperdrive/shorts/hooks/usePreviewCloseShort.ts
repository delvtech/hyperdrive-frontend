import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useAccount } from "wagmi";

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
  maxAmountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
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
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const { address: account } = useAccount();
  const queryEnabled =
    !!account &&
    !!readHyperdrive &&
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
    maxAmountOut: data?.maxAmountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseShortStatus: status,
  };
}
