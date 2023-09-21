import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";

interface UsePreviewRedeemWithdrawalSharesOptions {
  market: Hyperdrive;
  withdrawalSharesIn: bigint | undefined;
  minBaseAmountOutPerShare: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewRedeemWithdrawalSharesResult {
  previewRedeemWithdrawalSharesStatus: MutationStatus;
  baseAmountOut: bigint | undefined;
  sharesRedeemed: bigint | undefined;
}

export function usePreviewRedeemWithdrawalShares({
  market,
  withdrawalSharesIn,
  minBaseAmountOutPerShare,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled =
    !!withdrawalSharesIn &&
    minBaseAmountOutPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRedeemWithdrawalShares", {
      market: market.address,
      withdrawalSharesIn,
      minBaseAmountOutPerShare,
      destination,
      asUnderlying,
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewRedeemWithdrawalShares({
            withdrawalSharesIn,
            minBaseAmountOutPerShare,
            destination,
            asUnderlying,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    previewRedeemWithdrawalSharesStatus: status,
    baseAmountOut: data?.baseAmountOut,
    sharesRedeemed: data?.sharesRedeemed,
  };
}
