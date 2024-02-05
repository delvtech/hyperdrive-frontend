import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

interface UsePreviewOpenShortOptions {
  market: HyperdriveConfigOld;
  amountBondShorts: bigint | undefined;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  market,
  amountBondShorts,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled = !!readHyperdrive && !!amountBondShorts;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      market: market.address,
      amountBondShorts: amountBondShorts?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return readHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountBondShorts,
          });
        }
      : undefined,
  });
  return { baseAmountIn: data?.traderDeposit, status };
}
