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
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
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
      ? async () => {
          const hyperdrives = findYieldSourceHyperdrives({
            yieldSourceId: protocol.id,
            hyperdrives: appConfig.hyperdrives,
            tokens: appConfig.tokens,
          });
          const rows = await Promise.all(
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

                const vaultRate = await getYieldSourceRate(readHyperdrive);

                const fixedApr = await readHyperdrive.getSpotRate();

                let shortApy = 0n;
                if (vaultRate) {
                  shortApy = await readHyperdrive.getImpliedRate({
                    bondAmount: parseUnits("1", hyperdrive.decimals),
                    variableApy: vaultRate,
                    timestamp: BigInt(Math.floor(Date.now() / 1000)),
                  });
                }
                return {
                  market: hyperdrive,
                  liquidity,
                  fixedApr,
                  shortApy,
                };
              },
            ),
          );
          return sortBy(rows, "market.poolConfig.positionDuration");
        }
      : undefined,
  });
}
