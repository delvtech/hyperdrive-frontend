import { createReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  EmptyExtensions,
  HyperdriveConfig,
  Protocol,
  TokenConfig,
  findBaseToken,
  findYieldSourceToken,
  protocols,
} from "@hyperdrive/appconfig";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { querySdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export interface MarketTableRowData {
  market: HyperdriveConfig;
  baseToken: TokenConfig<EmptyExtensions>;
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
                const readHyperdrive = createReadHyperdrive({
                  address: hyperdrive.address,
                  publicClient,
                  cache: querySdkCache,
                });
                const baseToken = findBaseToken({
                  baseTokenAddress: hyperdrive.baseToken,
                  tokens: appConfig.tokens,
                });
                const liquidity = await readHyperdrive.getLiquidity({
                  decimals: baseToken.decimals,
                });

                const longApr = await readHyperdrive.getSpotRate();

                const yieldSource = findYieldSourceToken({
                  yieldSourceTokenAddress: hyperdrive.sharesToken,
                  tokens: appConfig.tokens,
                });
                return {
                  market: hyperdrive,
                  baseToken,
                  liquidity,
                  longAPR: formatRate(longApr),
                  yieldSourceShortName: yieldSource.extensions.shortName,
                  yieldSourceProtocol:
                    protocols[yieldSource.extensions.protocol],
                };
              },
            ),
          )
      : undefined,
  });
}
