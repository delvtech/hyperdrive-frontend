import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

export interface MarketTableRowData {
  market: Hyperdrive;
  yieldSource: YieldSource;
  liquidity: string;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}
export type MarketStatistics = Omit<MarketTableRowData, "market">;

// TODO: stubbed function for now
// ideally fetched from an api
function getMarketStatistics(
  market: Hyperdrive,
  yieldSource: YieldSource,
): Promise<MarketStatistics> {
  return Promise.resolve({
    yieldSource,
    liquidity: "$100M",
    longAPR: "1.25%",
    shortAPR: "1.25%",
    lpAPR: "1.25%",
  });
}

export function useMarketRowData(
  hyperdrives: Hyperdrive[] | undefined,
): UseQueryResult<MarketTableRowData[]> {
  const { appConfig } = useAppConfig();
  const queryEnabled = !!hyperdrives && !!appConfig;

  return useQuery<MarketTableRowData[]>({
    queryKey: hyperdrives,
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          return await Promise.all(
            hyperdrives.map(async (hyperdrive) => {
              const stats = await getMarketStatistics(
                hyperdrive,
                appConfig.yieldSources[hyperdrive.yieldSource],
              );
              return {
                market: hyperdrive,
                ...stats,
              };
            }),
          );
        }
      : undefined,
  });
}
