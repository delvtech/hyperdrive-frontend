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

  const queryEnabled = !!readHyperdrive && !!amountOfBondsToShort;
  const { data: blockNumber } = useBlockNumber({
    watch: true,
    query: { enabled: queryEnabled },
  });

  const { data, status, fetchStatus } = useQuery({
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
  let queryStatus: UsePreviewOpenShortResult["status"] = status;
  if (fetchStatus === "idle" && status === "loading") {
    queryStatus = "idle";
  }
  return {
    traderDeposit: data?.traderDeposit,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status: queryStatus,
  };
}
