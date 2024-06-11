import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";
interface UsePreviewOpenLongOptions {
  hyperdriveAddress: Address;
  amountIn: bigint | undefined;
  asBase: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  bondsReceived: bigint | undefined;
  maturityTime: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function usePreviewOpenLong({
  hyperdriveAddress,
  amountIn,
  asBase,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const appConfig = useAppConfig();
  const queryEnabled = amountIn !== undefined && !!readHyperdrive;
  const { data: blockNumber } = useBlockNumber({
    watch: true,
    query: { enabled: queryEnabled },
  });
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
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
                  appConfig,
                  hyperdriveAddress,
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
