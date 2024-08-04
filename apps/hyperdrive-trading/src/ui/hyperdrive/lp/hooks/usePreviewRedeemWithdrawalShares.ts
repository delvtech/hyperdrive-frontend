import { type MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import type { Address } from "viem";

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
  baseProceeds: bigint | undefined;
  sharesProceeds: bigint | undefined;
  withdrawalSharesRedeemed: bigint | undefined;
}

export function usePreviewRedeemWithdrawalShares({
  hyperdriveAddress,
  withdrawalSharesIn,
  minOutputPerShare,
  destination,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const appConfig = useAppConfig();
  const queryEnabled =
    !!withdrawalSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRedeemWithdrawalShares", {
      hyperdriveAddress,
      withdrawalSharesIn: withdrawalSharesIn?.toString(),
      minBaseAmountOutPerShare: minOutputPerShare?.toString(),
      destination,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result =
            await readWriteHyperdrive.previewRedeemWithdrawalShares({
              withdrawalSharesIn,
              minOutputPerShare,
              destination,
              // Some hyperdrives can only be exited to shares. So we'll always
              // just set this to false. We'll get a preview amount for both
              // shares and base from the sdk regardless
              asBase: false,
            });

          return {
            ...result,
            // The shares output need to be prepared before being returned
            sharesProceeds: await prepareSharesOut({
              appConfig,
              hyperdriveAddress,
              readHyperdrive: readWriteHyperdrive,
              sharesAmount: result.sharesProceeds,
            }),
          };
        }
      : undefined,
  });

  return {
    previewRedeemWithdrawalSharesStatus: status,
    baseProceeds: data?.baseProceeds,
    sharesProceeds: data?.sharesProceeds,
    withdrawalSharesRedeemed: data?.withdrawalSharesRedeemed,
  };
}
