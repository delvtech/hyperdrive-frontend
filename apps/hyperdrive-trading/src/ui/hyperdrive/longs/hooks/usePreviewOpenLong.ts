import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";
interface UsePreviewOpenLongOptions {
  market: Hyperdrive;
  baseAmount: bigint | undefined;
  minBondAmountOut: bigint | undefined;
  minSharePrice: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
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
  minSharePrice,
  destination,
  asBase = true,
  enabled,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled =
    !!readWriteHyperdrive &&
    !!baseAmount &&
    !!minBondAmountOut &&
    minSharePrice !== undefined &&
    !!destination &&
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
          readWriteHyperdrive.previewOpenLong({
            baseAmount,
            minBondAmountOut,
            minSharePrice,
            destination,
            asBase,
            extraData: ZERO_ADDRESS,
          })
      : undefined,
  });
  return {
    longAmountOut: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    status,
  };
}
