import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadHyperdriveModel";
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
  const hyperdriveModel = useReadHyperdriveModel(hyperdriveAddress);
  const { address: account } = useAccount();
  const queryEnabled =
    !!account &&
    !!hyperdriveModel &&
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
          asBase
            ? hyperdriveModel.previewCloseShortWithBase({
                account,
                destination,
                maturityTime,
                minAmountOut,
                shortAmountIn,
              })
            : hyperdriveModel.previewCloseShortWithShares({
                account,
                destination,
                maturityTime,
                minAmountOut,
                shortAmountIn,
              })
      : undefined,
  });

  return { amountOut: data?.amountOut, previewCloseShortStatus: status };
}
