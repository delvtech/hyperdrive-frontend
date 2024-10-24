import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getStatus } from "src/base/queryStatus";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";

interface UsePreviewOpenShortOptions {
  chainId: number;
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
  fixedRatePaid: bigint | undefined;
}

export function usePreviewOpenShort({
  chainId,
  hyperdriveAddress,
  amountOfBondsToShort,
  asBase,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!readHyperdrive && !!amountOfBondsToShort;
  const { data: blockNumber } = useBlockNumber({
    watch: false,
    query: { enabled: queryEnabled },
    chainId,
  });

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      chainId,
      hyperdriveAddress,
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
                chainId,
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
    fixedRatePaid: data?.fixedRatePaid,
    status: getStatus(status, fetchStatus),
  };
}
