import { MutationStatus, useQuery } from "@tanstack/react-query";
import { HyperdriveConfig } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "wagmi";

interface UsePreviewRedeemWithdrawalSharesOptions {
  market: HyperdriveConfig;
  withdrawalSharesIn: bigint | undefined;
  minBaseAmountOutPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
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
  asBase = true,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryEnabled =
    !!withdrawalSharesIn &&
    minBaseAmountOutPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRedeemWithdrawalShares", {
      market: market.address,
      withdrawalSharesIn: withdrawalSharesIn?.toString(),
      minBaseAmountOutPerShare: minBaseAmountOutPerShare?.toString(),
      destination,
      asUnderlying: asBase,
    }),
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewRedeemWithdrawalShares({
            withdrawalSharesIn,
            minBaseAmountOutPerShare,
            destination,
            asBase,
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
