import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewOpenLongOptions {
  market: Hyperdrive;
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

  const requiresEth = asUnderlying && market.baseToken.address === ZERO_ADDRESS;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-long",
      {
        market: market.address,
        baseAmount: baseAmount?.toString(),
        boundAmountOut: bondAmountOut?.toString(),
        destination: destination?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            account,
            functionName: "openLong",
            args: [baseAmount, bondAmountOut, destination, asUnderlying],
            // Used when ETH is the base asset (e.g. StethHyperdrive) and
            // asUnderlying is true.
            value: requiresEth && baseAmount ? baseAmount : 0n,
          });

          return result;
        }
      : undefined,
  });
  return { longAmountOut: data?.[1], status };
}
