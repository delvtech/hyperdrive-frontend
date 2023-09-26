import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewOpenLongOptions {
  market: Hyperdrive;
  baseAmount: bigint | undefined;
  minBondAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  longAmountOut: bigint | undefined;
  maturityTime: bigint | undefined;
}

export function usePreviewOpenLong({
  market,
  baseAmount,
  minBondAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled =
    !!readHyperdrive &&
    !!baseAmount &&
    !!minBondAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      market: market.address,
      baseAmount: baseAmount?.toString(),
      minBondAmountOut: minBondAmountOut?.toString(),
      destination,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewOpenLong({
            baseAmount,
            minBondAmountOut,
            destination,
            asUnderlying,
            options: {
              // all preview methods require a `from` option in order to call
              // the simulateContract successfully
              from: account,
            },
          })
      : undefined,
  });
  return {
    longAmountOut: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    status,
  };
}
