import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseShortOptions {
  chainId: number;
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseShortResult {
  previewCloseShortStatus: QueryStatusWithIdle;
  previewCloseShortError: Error;
  amountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
}

export function usePreviewCloseShort({
  hyperdriveAddress,
  chainId,
  maturityTime,
  shortAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!readHyperdrive && !!maturityTime && !!shortAmountIn && enabled;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
      chainId,
      maturityTime: maturityTime?.toString(),
      shortAmountIn: shortAmountIn?.toString(),
      asBase,
    }),

    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.previewCloseShort({
            maturityTime,
            shortAmountIn,
            asBase,
          });

          // All shares from the sdk need to be prepared for the UI
          const [finalAmountOut, finalFlatPlusCurveFee] = asBase
            ? [result.amountOut, result.flatPlusCurveFee]
            : await Promise.all([
                prepareSharesOut({
                  appConfig,
                  chainId,
                  readHyperdrive,
                  sharesAmount: result.amountOut,
                }),
                prepareSharesOut({
                  appConfig,
                  chainId,
                  readHyperdrive,
                  sharesAmount: result.flatPlusCurveFee,
                }),
              ]);

          return {
            ...result,
            amountOut: finalAmountOut,
            flatPlusCurveFee: finalFlatPlusCurveFee,
          };
        }
      : undefined,
  });

  return {
    amountOut: data?.amountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseShortStatus: getStatus(status, fetchStatus),
    previewCloseShortError: error as Error,
  };
}
