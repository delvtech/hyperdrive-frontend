import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
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
  const appConfig = useAppConfig();

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
      ? async () => {
          const result = await readHyperdrive.previewOpenShort({
            amountOfBondsToShort,
            asBase,
          });

          // All shares from the sdk need to be prepared for the UI
          const finalTraderDeposit = asBase
            ? result.traderDeposit
            : await prepareSharesOut({
                appConfig,
                hyperdriveAddress,
                readHyperdrive,
                sharesAmount: result.traderDeposit,
              });

          return { ...result, traderDeposit: finalTraderDeposit };
        }
      : undefined,
  });

  return {
    traderDeposit: data?.traderDeposit,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status: getStatus(status, fetchStatus),
  };
}
