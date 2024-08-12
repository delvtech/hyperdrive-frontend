import {
  Long,
  OpenLongPositionReceived,
  ReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useAccount, usePublicClient } from "wagmi";

export function usePortfolioLongsData(): UseQueryResult<
  Record<`0x${string}`, Long[]>
> {
  const { address: account } = useAccount();
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!account && !!appConfig && !!publicClient;

  return useQuery({
    queryKey: ["portfolio/longs", account],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          // Type assertion for the result object
          const result: Record<`0x${string}`, OpenLongPositionReceived[]> = {};
          await Promise.all(
            appConfig.hyperdrives.map(async (hyperdrive) => {
              const readHyperdrive = new ReadHyperdrive({
                address: hyperdrive.address,
                publicClient,
                cache: sdkCache,
              });
              const allLongs = await readHyperdrive.getOpenLongPositions({
                account: account,
              });
              const openLongPositionsReceived = await Promise.all(
                allLongs.map(async (long) => ({
                  assetId: long.assetId,
                  value: long.value,
                  maturity: long.maturity,
                  details: await readHyperdrive.getOpenLongDetails({
                    assetId: long.assetId,
                    account: account,
                  }),
                })),
              );
              result[hyperdrive.address] = openLongPositionsReceived;
            }),
          );
          return result;
        }
      : undefined,
  });
}
