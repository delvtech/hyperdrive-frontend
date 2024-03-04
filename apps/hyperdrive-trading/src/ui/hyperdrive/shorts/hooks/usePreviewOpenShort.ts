import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewOpenShortOptions {
  hyperdriveAddress: Address;
  amountOfBondsToShort: bigint | undefined;
  asBase: boolean;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  depositAmount: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
}

export function usePreviewOpenShort({
  hyperdriveAddress,
  amountOfBondsToShort,
  asBase,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const appConfig = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!amountOfBondsToShort;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      hyperdrive: hyperdriveAddress,
      amountBondShorts: amountOfBondsToShort?.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return readHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountOfBondsToShort,
            decimals: hyperdrive.decimals,
            asBase,
          });
        }
      : undefined,
  });
  return {
    depositAmount: data?.traderDeposit,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    status,
  };
}
