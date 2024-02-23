import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewOpenShortOptions {
  hyperdriveAddress: Address;
  amountOfBondsToShort: bigint | undefined;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  hyperdriveAddress,
  amountOfBondsToShort,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!amountOfBondsToShort;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      market: hyperdriveAddress,
      amountBondShorts: amountOfBondsToShort?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return readHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountOfBondsToShort,
          });
        }
      : undefined,
  });
  return { baseAmountIn: data?.traderDeposit, status };
}
