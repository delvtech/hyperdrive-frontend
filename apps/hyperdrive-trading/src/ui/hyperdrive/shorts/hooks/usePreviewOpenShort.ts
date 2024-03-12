import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useHyperdriveModel } from "src/ui/hyperdrive/hooks/useHyperdriveModel";
import { Address } from "viem";

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
  const hyperdriveModel = useHyperdriveModel(hyperdriveAddress);
  const queryEnabled = !!hyperdriveModel && !!amountOfBondsToShort;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      hyperdrive: hyperdriveAddress,
      amountBondShorts: amountOfBondsToShort?.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return asBase
            ? hyperdriveModel.previewOpenShortWithBase({
                bondAmount: amountOfBondsToShort,
              })
            : hyperdriveModel.previewOpenShortWithShares({
                bondAmount: amountOfBondsToShort,
              });
        }
      : undefined,
  });
  return {
    traderDeposit: data?.traderDeposit,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status,
  };
}
