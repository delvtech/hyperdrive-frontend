import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

interface UsePreviewOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  enabled?: boolean;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  market,
  amountBondShorts,
  enabled = true,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled = !!readWriteHyperdrive && !!amountBondShorts && enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      market: market.address,
      amountBondShorts: amountBondShorts?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return readWriteHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountBondShorts,
          });
        }
      : undefined,
  });
  return { baseAmountIn: data?.traderDeposit, status };
}
