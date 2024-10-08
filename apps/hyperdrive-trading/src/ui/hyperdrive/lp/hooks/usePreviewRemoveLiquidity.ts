import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewRemoveLiquidityOptions {
  chainId: number;
  hyperdriveAddress: Address;
  lpSharesIn: bigint | undefined;
  minOutputPerShare: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewRemoveLiquidityResult {
  previewRemoveLiquidityStatus: MutationStatus;
  proceeds: bigint | undefined;
  withdrawalShares: bigint | undefined;
}

export function usePreviewRemoveLiquidity({
  chainId,
  hyperdriveAddress,
  lpSharesIn,
  minOutputPerShare,
  destination,
  asBase = true,
  enabled = true,
}: UsePreviewRemoveLiquidityOptions): UsePreviewRemoveLiquidityResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!lpSharesIn &&
    minOutputPerShare !== undefined &&
    !!destination &&
    enabled &&
    !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewRemoveLiquidity", {
      chainId,
      market: hyperdriveAddress,
      lpSharesIn: lpSharesIn?.toString(),
      minOutputPerShare: minOutputPerShare?.toString(),
      destination,
      asBase,
    }),
    queryFn: queryEnabled
      ? async () => {
          // If removing lp to shares, make sure the min output per share is
          // prepared before going into the sdk
          const finalMinOutputPerShare = asBase
            ? minOutputPerShare
            : await prepareSharesIn({
                appConfig,
                chainId,
                readHyperdrive,
                sharesAmount: minOutputPerShare,
              });

          const result = await readHyperdrive.previewRemoveLiquidity({
            lpSharesIn,
            minOutputPerShare: finalMinOutputPerShare,
            destination,
            asBase,
          });

          // If removing lp to shares, the shares result needs to be prepared
          // before being returned
          const finalProceeds = asBase
            ? result.proceeds
            : await prepareSharesOut({
                appConfig,
                chainId,
                readHyperdrive,
                sharesAmount: result.proceeds,
              });
          return {
            ...result,

            proceeds: finalProceeds,
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    previewRemoveLiquidityStatus: status,
    proceeds: data?.proceeds,
    withdrawalShares: data?.withdrawalShares,
  };
}
