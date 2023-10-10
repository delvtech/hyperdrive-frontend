import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UsePreviewOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  minSharePrice: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewOpenShortResult {
  status: MutationStatus;
  baseAmountIn: bigint | undefined;
}

export function usePreviewOpenShort({
  market,
  amountBondShorts,
  maxBaseAmountIn,
  minSharePrice,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled =
    !!readWriteHyperdrive &&
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    minSharePrice !== undefined &&
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      market: market.address,
      amountBondShorts: amountBondShorts?.toString(),
      maxBaseAmountIn: maxBaseAmountIn?.toString(),
      destination,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const requiresEth =
            asUnderlying && market.baseToken.address === ZERO_ADDRESS;

          return readWriteHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountBondShorts,
            minSharePrice,
            asUnderlying,
            destination,
            maxBaseAmountIn,
            options: {
              value: requiresEth && maxBaseAmountIn ? maxBaseAmountIn : 0n,
            },
          });
        }
      : undefined,
  });
  return { baseAmountIn: data?.traderDeposit, status };
}
