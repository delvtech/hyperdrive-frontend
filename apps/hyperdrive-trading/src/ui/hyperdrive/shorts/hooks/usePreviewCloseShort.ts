import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { type QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

interface UsePreviewCloseShortOptions {
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
  maturityTime,
  shortAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseShortOptions): UsePreviewCloseShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const appConfig = useAppConfig();
  const queryEnabled =
    !!readHyperdrive && !!maturityTime && !!shortAmountIn && enabled;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseShort", {
      hyperdriveAddress,
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
                  hyperdriveAddress,
                  readHyperdrive,
                  sharesAmount: result.amountOut,
                }),
                prepareSharesOut({
                  appConfig,
                  hyperdriveAddress,
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
