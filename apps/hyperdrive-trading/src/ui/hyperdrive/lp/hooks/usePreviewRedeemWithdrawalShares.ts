import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";
import { Address } from "viem";

interface UsePreviewRedeemWithdrawalSharesOptions {
  chainId: number;
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
  chainId,
  hyperdriveAddress,
  withdrawalSharesIn,
  minOutputPerShare,
  destination,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const appConfig = useAppConfigForConnectedChain();
  const readWriteHyperdrive = useReadWriteHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const queryEnabled =
    !!withdrawalSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readWriteHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRedeemWithdrawalShares", {
      chainId,
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
              asBase:
                hyperdriveConfig.withdrawOptions.isBaseTokenWithdrawalEnabled,
            });

          return {
            ...result,
            // The shares output need to be prepared before being returned
            sharesProceeds: await prepareSharesOut({
              appConfig,
              chainId,
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
