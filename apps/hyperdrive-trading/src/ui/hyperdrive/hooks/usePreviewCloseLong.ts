import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { QueryStatusType } from "src/ui/base/types";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewCloseLongOptions {
  market: HyperdriveMarket;
  tokenID: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  previewCloseLongStatus: QueryStatusType;
  baseAmountOut: bigint | undefined;
}

export function usePreviewCloseLong({
  market,
  tokenID,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!tokenID &&
    !!bondAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-close-long",
      market.address,
      bondAmountIn?.toString(),
      minBaseAmountOut?.toString(),
      destination?.toString(),
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            //@ts-ignore
            account,
            functionName: "closeLong",
            args: [
              tokenID,
              bondAmountIn,
              minBaseAmountOut,
              destination,
              asUnderlying,
            ],
          });

          return result;
        }
      : undefined,
  });

  return { baseAmountOut: data, previewCloseLongStatus: status };
}
