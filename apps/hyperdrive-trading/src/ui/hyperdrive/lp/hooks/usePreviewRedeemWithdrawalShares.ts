import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";

interface UsePreviewRedeemWithdrawalSharesOptions {
  hyperdriveAddress: Address;
  withdrawalSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewRedeemWithdrawalSharesResult {
  previewRedeemWithdrawalSharesStatus: MutationStatus;
  proceeds: bigint | undefined;
  withdrawalSharesRedeemed: bigint | undefined;
}

export function usePreviewRedeemWithdrawalShares({
  hyperdriveAddress,
  withdrawalSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!withdrawalSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRedeemWithdrawalShares", {
      market: hyperdriveAddress,
      withdrawalSharesIn: withdrawalSharesIn?.toString(),
      minBaseAmountOutPerShare: minOutputPerShare?.toString(),
      destination,
      asBase,
    }),
    queryFn: queryEnabled
      ? () =>
          readWriteHyperdrive.previewRedeemWithdrawalShares({
            withdrawalSharesIn,
            minOutputPerShare,
            destination,
            asBase,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    previewRedeemWithdrawalSharesStatus: status,
    proceeds: data?.proceeds,
    withdrawalSharesRedeemed: data?.withdrawalSharesRedeemed,
  };
}
