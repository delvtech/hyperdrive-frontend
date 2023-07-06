import { HyperdriveABI } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewCloseLongOptions {
  hyperdriveAddress: Address | undefined;

  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
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
  asUnderlying = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!hyperdriveAddress &&
    !!maturityTime &&
    !!bondAmountIn &&
    minBaseAmountOut !== undefined && // check undefined since 0 is valid
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-close-long",
      hyperdriveAddress,
      bondAmountIn?.toString(),
      minBaseAmountOut?.toString(),
      destination?.toString(),
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          // TODO: Refactor this to the math library instead
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: hyperdriveAddress,
            account,
            functionName: "closeLong",
            args: [
              BigInt(maturityTime),
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
