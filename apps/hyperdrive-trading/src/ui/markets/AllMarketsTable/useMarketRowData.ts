import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import {
  YieldSourceProtocolOld,
  yieldSourceProtocolsOld,
} from "src/yieldSources/yieldSourceProtocolsOld";
import { YieldSourceOld, yieldSourcesOld } from "src/yieldSources/yieldSources";
import { usePublicClient } from "wagmi";

export interface MarketTableRowData {
  market: HyperdriveConfigOld;
  liquidity: bigint;
  yieldSource: YieldSourceOld;
  yieldSourceProtocol: YieldSourceProtocolOld;
  longAPR: string;
}

export function useMarketRowData(): UseQueryResult<MarketTableRowData[]> {
  const publicClient = usePublicClient();
  const { appConfig } = useAppConfigOld();
  const hyperdrives = useMemo(
    () => appConfig?.hyperdrives,
    [appConfig?.hyperdrives],
  );
  const queryEnabled = !!hyperdrives && !!appConfig;
  return useQuery<MarketTableRowData[]>({
    queryKey: makeQueryKey("app/markets", hyperdrives),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          Promise.all(
            hyperdrives.map(async (hyperdrive): Promise<MarketTableRowData> => {
              const readHyperdrive = new ViemReadHyperdrive({
                address: hyperdrive.address,
                publicClient,
                cache: querySdkCache,
              });
              const liquidity = await readHyperdrive.getLiquidity({
                decimals: hyperdrive.baseToken.decimals,
              });
              const longApr = await readHyperdrive.getSpotRate();
              const yieldSource = yieldSourcesOld[hyperdrive.yieldSource];
              return {
                market: hyperdrive,
                liquidity,
                longAPR: formatRate(longApr),
                yieldSource,
                yieldSourceProtocol:
                  yieldSourceProtocolsOld[yieldSource.protocol],
              };
            }),
          )
      : undefined,
  });
}
