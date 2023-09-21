import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, useAccount, usePublicClient } from "wagmi";
interface UsePreviewOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
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
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewOpenShortOptions): UsePreviewOpenShortResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled =
    !!amountBondShorts &&
    !!maxBaseAmountIn &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenShort", {
      market: market.address,
      amountBondShorts,
      maxBaseAmountIn,
      destination,
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? async () =>
          await readHyperdrive.previewOpenShort({
            amountOfBondsToShort: amountBondShorts,
            maxBaseAmountIn,
            destination: destination,
            asUnderlying: true,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return { baseAmountIn: data, status };
}
