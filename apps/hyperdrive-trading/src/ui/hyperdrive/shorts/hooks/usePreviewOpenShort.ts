import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getStatus } from "src/base/queryStatus";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";

type UsePreviewOpenShortOptions = {
  chainId: number;
  hyperdriveAddress: Address;
  asBase: boolean;
  amountToDeposit?: bigint | undefined;
  amountOfBondsToShort?: bigint | undefined;
};

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  traderDeposit: bigint | undefined;
  shortedBonds: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
  fixedRatePaid: bigint | undefined;
}

export function usePreviewOpenShort({
  chainId,
  hyperdriveAddress,
  amountOfBondsToShort,
  amountToDeposit,
  asBase,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!readHyperdrive && (!!amountOfBondsToShort || !!amountToDeposit);
  const { data: blockNumber } = useBlockNumber({
    watch: false,
    query: { enabled: queryEnabled },
    chainId,
  });

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "previewOpenShort",
      params: {
        chainId,
        hyperdriveAddress,
        amountOfBondsToShort,
        asBase,
        blockNumber,
      },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const finalShortBonds =
            amountOfBondsToShort ??
            (await readHyperdrive.getShortBondsGivenDeposit({
              // queryEnabled checks that one of the two is truthy
              amountIn: amountToDeposit as bigint,
              asBase,
            }));

          const result = await readHyperdrive.previewOpenShort({
            amountOfBondsToShort: finalShortBonds,
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

          return {
            ...result,
            shortedBonds: finalShortBonds,
            traderDeposit: finalTraderDeposit,
          };
        }
      : undefined,
  });
  return {
    traderDeposit: data?.traderDeposit,
    shortedBonds: data?.shortedBonds,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    fixedRatePaid: data?.fixedRatePaid,
    status: getStatus(status, fetchStatus),
  };
}
