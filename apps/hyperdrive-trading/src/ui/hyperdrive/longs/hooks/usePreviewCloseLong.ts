import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UsePreviewCloseLongOptions {
  hyperdriveAddress: Address | undefined;
  /**
   * Time in seconds, as the contracts require
   */
  maturityTime: bigint | undefined;
  bondAmountIn: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UsePreviewCloseLongResult {
  amountOut: bigint | undefined;
  flatPlusCurveFee: bigint | undefined;
  previewCloseLongStatus: QueryStatusWithIdle;
  previewCloseLongError: Error;
}

export function usePreviewCloseLong({
  hyperdriveAddress,
  maturityTime,
  bondAmountIn,
  asBase = true,
  enabled = true,
}: UsePreviewCloseLongOptions): UsePreviewCloseLongResult {
  const appConfig = useAppConfig();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const queryEnabled =
    !!hyperdriveAddress &&
    !!appConfig &&
    !!maturityTime &&
    !!bondAmountIn &&
    !!readHyperdrive &&
    enabled;

  const { data, status, fetchStatus, error } = useQuery({
    queryKey: makeQueryKey("previewCloseLong", {
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      bondAmountIn: bondAmountIn?.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.previewCloseLong({
            maturityTime,
            bondAmountIn,
            asBase,
          });

          if (!asBase) {
            return {
              ...result,
              amountOut: await prepareSharesOut({
                appConfig,
                hyperdriveAddress,
                sharesAmount: result.amountOut,
                readHyperdrive,
              }),
            };
          }

          return result;
        }
      : undefined,
  });

  return {
    amountOut: data?.amountOut,
    flatPlusCurveFee: data?.flatPlusCurveFee,
    previewCloseLongStatus: getStatus(status, fetchStatus),
    previewCloseLongError: error as Error,
  };
}
