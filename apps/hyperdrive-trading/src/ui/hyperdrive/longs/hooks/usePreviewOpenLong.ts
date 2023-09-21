import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address, useAccount, usePublicClient } from "wagmi";

import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
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
  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled =
    !!baseAmount &&
    !!bondAmountOut &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      market: market.address,
      baseAmount,
      bondAmountOut,
      destination,
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? async () =>
          await readHyperdrive.previewOpenLong({
            baseAmount,
            minBaseAmountOut: bondAmountOut,
            destination,
            asUnderlying,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return { longAmountOut: data, status };
}
