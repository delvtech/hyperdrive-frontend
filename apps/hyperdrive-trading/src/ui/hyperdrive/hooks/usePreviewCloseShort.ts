import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { HyperdriveMarket } from "src/appconfig/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";
import { getAssetTimestampFromTokenId } from "src/ui/hyperdrive/utils";
import { Address, useAccount, usePublicClient } from "wagmi";

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
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!tokenID &&
    !!shortAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
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
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            account,
            functionName: "closeShort",
            args: [
              BigInt(getAssetTimestampFromTokenId(tokenID)),
              shortAmountIn,
              minBaseAmountOut,
              destination,
              asUnderlying,
            ],
          });

          return result;
        }
      : undefined,
  });

  return { baseAmountOut: data, previewCloseShortStatus: status };
}
