import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";
interface UsePreviewOpenLongOptions {
  chainId: number;
  hyperdriveAddress: Address;
  amountIn: bigint | undefined;
  asBase: boolean;
}

interface UsePreviewOpenLongResult {
  status: QueryStatusWithIdle;
  bondsReceived: bigint | undefined;
  maturityTime: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function usePreviewOpenLong({
  hyperdriveAddress,
  chainId,
  amountIn,
  asBase,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = amountIn !== undefined && !!readHyperdrive;
  const { data: blockNumber } = useBlockNumber({
    watch: false,
    chainId: chainId,
    query: { enabled: queryEnabled },
  });
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      chainId,
      hyperdrive: hyperdriveAddress,
      amountIn: amountIn?.toString(),
      asBase,
      blockNumber: blockNumber?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return readHyperdrive.previewOpenLong({
            amountIn: asBase
              ? amountIn
              : await prepareSharesIn({
                  chainId,
                  appConfig,
                  readHyperdrive,
                  sharesAmount: amountIn,
                }),
            asBase,
          });
        }
      : undefined,
  });

  return {
    bondsReceived: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    curveFee: data?.curveFee,
    status: getStatus(status, fetchStatus),
  };
}
