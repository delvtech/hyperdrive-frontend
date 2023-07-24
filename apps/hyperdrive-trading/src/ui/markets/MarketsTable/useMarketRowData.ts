import { getLiquidity } from "@hyperdrive/core";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AppConfig, Hyperdrive } from "src/appconfig/types";
import { YieldSource } from "src/appconfig/yieldSources/yieldSources";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PublicClient } from "viem";

export interface MarketTableRowData {
  market: Hyperdrive;
  liquidity: string;
  yieldSource: YieldSource;
  longAPR: string;
  shortAPR: string;
  lpAPR: string;
}
export type MarketStatistics = Omit<MarketTableRowData, "market" | "liquidity">;

// TODO: stubbed function for now
// ideally fetched from an api
function getMarketStatistics(
  market: Hyperdrive,
  yieldSource: YieldSource,
): Promise<MarketStatistics> {
  return Promise.resolve({
    yieldSource,
    longAPR: "1.25%",
    shortAPR: "1.25%",
    lpAPR: "1.25%",
  });
}

async function fetchMarketRowData(
  hyperdrives: Hyperdrive[],
  publicClient: PublicClient,
  appConfig: AppConfig,
) {
  return await Promise.all(
    hyperdrives.map(async (hyperdrive) => {
      const statsPromise = getMarketStatistics(
        hyperdrive,
        appConfig.yieldSources[hyperdrive.yieldSource],
      );
      const liquidityPromise = getLiquidity(hyperdrive.address, publicClient);

      const [stats, liquidity] = await Promise.all([
        statsPromise,
        liquidityPromise,
      ]);

      return {
        market: hyperdrive,
        liquidity: liquidity.formatted,
        ...stats,
      };
    }),
  );
}

export function useMarketRowData(
  hyperdrives: Hyperdrive[] | undefined,
  publicClient: PublicClient,
): UseQueryResult<MarketTableRowData[]> {
  const { appConfig } = useAppConfig();
  const queryEnabled = !!hyperdrives && !!appConfig;

  return useQuery<MarketTableRowData[]>({
    queryKey: hyperdrives,
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () => fetchMarketRowData(hyperdrives, publicClient, appConfig)
      : undefined,
  });
}
