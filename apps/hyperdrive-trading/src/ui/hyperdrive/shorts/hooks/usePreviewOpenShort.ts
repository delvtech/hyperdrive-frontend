import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";

interface UsePreviewOpenShortOptions {
  hyperdriveAddress: Address;
  amountOfBondsToShort: bigint | undefined;
  asBase: boolean;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  traderDeposit: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function usePreviewOpenShort({
  hyperdriveAddress,
  amountOfBondsToShort,
  asBase,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const { data: blockNumber } = useBlockNumber({ watch: true });
  const queryEnabled = !!readHyperdrive && !!amountOfBondsToShort;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      hyperdrive: hyperdriveAddress,
      amountBondShorts: amountOfBondsToShort?.toString(),
      asBase,
      blockNumber: blockNumber?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          readHyperdrive.previewOpenShort({
            amountOfBondsToShort,
            asBase,
          })
      : undefined,
  });
  return {
    traderDeposit: data?.traderDeposit,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status: queryEnabled ? status : "idle",
  };
}
