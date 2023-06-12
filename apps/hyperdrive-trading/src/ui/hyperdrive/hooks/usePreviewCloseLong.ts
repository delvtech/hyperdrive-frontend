import { DSRHyperdriveABI, Long } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { QueryStatusType } from "src/ui/base/types";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewCloseLongOptions {
  long: Long;
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
  long,
  bondAmountIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!long &&
    !!bondAmountIn &&
    !!minBaseAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-close-long",
      long.hyperdriveAddress,
      bondAmountIn?.toString(),
      minBaseAmountOut?.toString(),
      destination?.toString(),
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: DSRHyperdriveABI,
            address: long.hyperdriveAddress,
            account,
            functionName: "closeLong",
            args: [
              BigInt(long.maturity / 1000),
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
