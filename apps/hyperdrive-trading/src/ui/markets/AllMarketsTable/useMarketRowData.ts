import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  HyperdriveConfig,
  Protocol,
  TokenConfig,
  findToken,
} from "@hyperdrive/appconfig";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export interface MarketTableRowData {
  market: HyperdriveConfig;
  baseToken: TokenConfig;
  liquidity: bigint;
  yieldSourceShortName: string;
  yieldSourceProtocol: Protocol;
  longAPR: string;
}

export function useMarketRowData(): UseQueryResult<MarketTableRowData[]> {
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!appConfig && !!publicClient;
  return useQuery<MarketTableRowData[]>({
    queryKey: makeQueryKey("app/markets", {
      hyperdrives: appConfig?.hyperdrives.map(
        (hyperdrive) => hyperdrive.address,
      ),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          Promise.all(
            appConfig.hyperdrives.map(
              async (hyperdrive): Promise<MarketTableRowData> => {
                const readHyperdrive = new ReadHyperdrive({
                  address: hyperdrive.address,
                  publicClient,
                  cache: sdkCache,
                });
                const baseToken = findToken({
                  baseTokenAddress: hyperdrive.poolConfig.baseToken,
                  tokens: appConfig.tokens,
                });
                const liquidity = await readHyperdrive.getPresentValue();

                const longApr = await readHyperdrive.getFixedApr();

                const yieldSource =
                  appConfig.yieldSources[hyperdrive.yieldSource];

                return {
                  market: hyperdrive,
                  baseToken,
                  liquidity,
                  longAPR: formatRate(longApr),
                  yieldSourceShortName: yieldSource.shortName,
                  yieldSourceProtocol:
                    appConfig.protocols[yieldSource.protocol],
                };
              },
            ),
          )
      : undefined,
  });
}
