import {
  HyperdriveConfig,
  Protocol,
  findYieldSourceHyperdrives,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import sortBy from "lodash.sortby";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClient } from "wagmi";

export interface YieldSourceMarketsTableRowData {
  market: HyperdriveConfig;
  liquidity: bigint;
  fixedApr: bigint;
}

export function useRowData(
  protocol: Protocol
): UseQueryResult<YieldSourceMarketsTableRowData[]> {
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!appConfig && !!publicClient;
  return useQuery<YieldSourceMarketsTableRowData[]>({
    queryKey: makeQueryKey("yield-source-markets", {
      protocol: protocol.id,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const hyperdrives = findYieldSourceHyperdrives({
            yieldSourceId: protocol.id,
            appConfig,
          });
          const rows = await Promise.all(
            hyperdrives.map(
              async (hyperdrive): Promise<YieldSourceMarketsTableRowData> => {
                const sharesToken = findYieldSourceToken({
                  yieldSourceTokenAddress: hyperdrive.sharesToken,
                  tokens: appConfig.tokens,
                });
                const readHyperdrive = await getReadHyperdrive({
                  hyperdriveAddress: hyperdrive.address,
                  publicClient,
                  sharesToken,
                });
                const liquidity = await readHyperdrive.getPresentValue();

                const fixedApr = await readHyperdrive.getFixedApr();

                return {
                  market: hyperdrive,
                  liquidity,
                  fixedApr,
                };
              }
            )
          );
          return sortBy(rows, "market.poolConfig.positionDuration");
        }
      : undefined,
  });
}
