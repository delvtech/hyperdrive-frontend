import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import {
  YieldSourceProtocol,
  yieldSourceProtocols,
} from "src/yieldSources/yieldSourceProtocols";
import { YieldSource, yieldSources } from "src/yieldSources/yieldSources";
import { usePublicClient } from "wagmi";

export interface MarketTableRowData {
  market: HyperdriveConfig;
  liquidity: bigint;
  yieldSource: YieldSource;
  yieldSourceProtocol: YieldSourceProtocol;
  longAPR: string;
}

export function useMarketRowData(): UseQueryResult<MarketTableRowData[]> {
  const publicClient = usePublicClient();
  const { appConfig } = useAppConfig();
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
              const yieldSource = yieldSources[hyperdrive.yieldSource];
              return {
                market: hyperdrive,
                liquidity,
                longAPR: formatRate(longApr),
                yieldSource,
                yieldSourceProtocol: yieldSourceProtocols[yieldSource.protocol],
              };
            }),
          )
      : undefined,
  });
}
