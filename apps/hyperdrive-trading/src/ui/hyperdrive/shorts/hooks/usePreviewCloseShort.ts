import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, useAccount, usePublicClient } from "wagmi";
interface UsePreviewCloseShortOptions {
  hyperdriveAddress: Address;
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
  const publicClient = usePublicClient();
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!maturityTime &&
    !!shortAmountIn &&
    minBaseAmountOut !== undefined && // check against undefined explicitly, because base amount of 0 is valid
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
      maturityTime,
      shortAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? async () =>
          await readHyperdrive.previewCloseShort({
            maturityTime,
            shortAmountIn,
            minBaseAmountOut,
            destination,
            asUnderlying: true,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return { baseAmountOut: data, previewCloseShortStatus: status };
}
