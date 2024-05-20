import {
  HyperdriveConfig,
  Protocol,
  findYieldSourceHyperdrives,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { parseUnits } from "viem";
import { usePublicClient } from "wagmi";

export interface YieldSourceMarketsTableRowData {
  market: HyperdriveConfig;
  liquidity: bigint;
  fixedApr: bigint;
  shortApy: bigint;
}

export function useRowData(
  protocol: Protocol,
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
      ? () => {
          const hyperdrives = findYieldSourceHyperdrives({
            yieldSourceId: protocol.id,
            hyperdrives: appConfig.hyperdrives,
            tokens: appConfig.tokens,
          });
          return Promise.all(
            hyperdrives.map(
              async (hyperdrive): Promise<YieldSourceMarketsTableRowData> => {
                const sharesToken = findYieldSourceToken({
                  yieldSourceTokenAddress: hyperdrive.sharesToken,
                  tokens: appConfig.tokens,
                });
                const readHyperdrive = getReadHyperdrive({
                  hyperdriveAddress: hyperdrive.address,
                  publicClient,
                  sharesToken,
                });
                const liquidity = await readHyperdrive.getPresentValue();

                const vaultRate = await readHyperdrive.getYieldSourceRate({
                  timeRange: 604_800n, // 1 week in seconds
                });
                const fixedApr = await readHyperdrive.getSpotRate();
                const shortApy = await readHyperdrive.getImpliedRate({
                  bondAmount: parseUnits("1", hyperdrive.decimals),
                  variableApy: vaultRate,
                  timestamp: BigInt(Math.floor(Date.now() / 1000)),
                });
                return {
                  market: hyperdrive,
                  liquidity,
                  fixedApr,
                  shortApy,
                };
              },
            ),
          );
        }
      : undefined,
  });
}
