import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";
import { Address } from "wagmi";

interface UsePreviewCloseShortOptions {
  market: HyperdriveMarket;
  tokenID: bigint | undefined;
  shortAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseShortResult {
  previewCloseShortStatus: QueryStatusType;
  baseAmountOut: bigint | undefined;
}

export function usePreviewCloseShort({
  market,
  tokenID,
  shortAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  // const { data: signer } = useSigner();

  const queryEnabled =
    !!tokenID &&
    !!shortAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    // !!hyperdriveContract &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-close-short",
      market.address,
      shortAmountIn?.toString(),
      minBaseAmountOut?.toString(),
      destination?.toString(),
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          // const closeShortResult =
          //   (await hyperdriveContract.callStatic.closeShort(
          //     BigNumber.from(getAssetTimestampFromTokenId(tokenID)),
          //     BigNumber.from(shortAmountIn),
          //     BigNumber.from(minBaseAmountOut),
          //     destination,
          //     asUnderlying,
          //   )) as unknown as BigNumber;
          // return closeShortResult.toBigInt();

          return 0n;
        }
      : undefined,
  });

  return { baseAmountOut: data, previewCloseShortStatus: status };
}
