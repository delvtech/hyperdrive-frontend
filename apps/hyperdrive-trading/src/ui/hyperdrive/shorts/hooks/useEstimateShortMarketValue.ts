import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseEstimateShortMarketValue {
  chainId: number;
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
  chainId,
  hyperdriveAddress,
  maturityTime,
  shortAmountIn,
  asBase = true,
  enabled = true,
}: UseEstimateShortMarketValue): UseEstimateShortMarketValueResult {
  const appConfig = useAppConfigForConnectedChain();
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!readHyperdrive && !!maturityTime && !!shortAmountIn && enabled;

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("estimateShortMarketValue", {
      chainId,
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
                chainId,
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
