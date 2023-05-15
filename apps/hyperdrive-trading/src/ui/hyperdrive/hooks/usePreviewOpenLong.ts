import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewOpenLongOptions {
  market: HyperdriveMarket;
  baseAmount: bigint | undefined;
  bondAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  longAmountOut: bigint | undefined;
}

export function usePreviewOpenLong({
  market,
  baseAmount,
  bondAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!baseAmount &&
    !!bondAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-long",
      market.address,
      baseAmount?.toString(),
      bondAmountOut?.toString(),
      destination?.toString(),
      ,
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            //@ts-ignore
            account,
            functionName: "openLong",
            args: [baseAmount, bondAmountOut, destination, asUnderlying],
          });

          return result;
        }
      : undefined,
  });
  return { longAmountOut: data, status };
}
