import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { QueryStatusType } from "src/ui/base/types";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenShortResult {
  status: QueryStatusType;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  market,
  amountBondShorts,
  maxBaseAmountIn,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const requiresEth =
    asUnderlying === true && market.baseToken.address === ZERO_ADDRESS;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      market.address,
      amountBondShorts?.toString(),
      maxBaseAmountIn?.toString(),
      destination,
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            account,
            functionName: "openShort",
            args: [
              amountBondShorts,
              maxBaseAmountIn,
              destination,
              asUnderlying,
            ],
            // Used when ETH is the base asset (e.g. StethHyperdrive) and
            // asUnderlying is true.
            value: requiresEth && maxBaseAmountIn ? maxBaseAmountIn : 0n,
          });

          return result[1];
        }
      : undefined,
  });
  return { baseAmountIn: data, status };
}
