import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseEstimateShortMarketValue {
  hyperdriveAddress: Address;
  maturityTime: bigint | undefined;
  shortAmountIn: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

interface UseEstimateShortMarketValueResult {
  estimateShortMarketValueStatus: QueryStatusWithIdle;
  marketEstimate: bigint | undefined;
}

export function useEstimateShortMarketValue({
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  asBase = true,
  enabled = true,
}: UseEstimateShortMarketValue): UseEstimateShortMarketValueResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const appConfig = useAppConfig();
  const queryEnabled =
    !!readHyperdrive && !!maturityTime && !!shortAmountIn && enabled;

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("estimateShortMarketValue", {
      hyperdriveAddress,
      maturityTime: maturityTime?.toString(),
      shortAmountIn: shortAmountIn?.toString(),
      asBase,
    }),

    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.estimateShortMarketValue({
            maturityTime,
            shortAmountIn,
            asBase,
          });

          // All shares from the sdk need to be prepared for the UI
          return asBase
            ? result
            : await prepareSharesOut({
                appConfig,
                hyperdriveAddress,
                readHyperdrive,
                sharesAmount: result,
              });
        }
      : undefined,
  });

  return {
    marketEstimate: data,
    estimateShortMarketValueStatus: getStatus(status, fetchStatus),
  };
}
