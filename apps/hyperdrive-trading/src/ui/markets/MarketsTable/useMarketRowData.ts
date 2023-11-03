import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export interface MarketTableRowData {
  market: Hyperdrive;
  liquidity: bigint;
  yieldSource: YieldSource;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}
export type MarketStatistics = Omit<MarketTableRowData, "market" | "liquidity">;

export function useMarketRowData(
  hyperdrives: Hyperdrive[] | undefined,
): UseQueryResult<MarketTableRowData[]> {
  const publicClient = usePublicClient();
  const { appConfig } = useAppConfig();
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
                mathAddress: appConfig.hyperdriveMath,
                publicClient,
                cache: querySdkCache,
              });
              const liquidity = await readHyperdrive.getLiquidity();
              const longApr = await readHyperdrive.getSpotRate();
              return {
                market: hyperdrive,
                liquidity,
                longAPR: formatRate(longApr),
                yieldSource: appConfig.yieldSources[hyperdrive.yieldSource],
                // TODO: Stubbed for now
                shortAPR: "1.25%",
                lpAPR: "1.25%",
              };
            }),
          )
      : undefined,
  });
}
