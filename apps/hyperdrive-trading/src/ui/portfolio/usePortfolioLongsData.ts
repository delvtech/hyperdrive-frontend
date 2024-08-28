import {
  OpenLongPositionReceived,
  ReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useAccount, usePublicClient } from "wagmi";

type OpenLongPositionsData = Record<`0x${string}`, OpenLongPositionReceived[]>;

export function usePortfolioLongsData(): {
  openLongPositions: OpenLongPositionsData | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  // TODO: We should be getting a specific public client for the chain the
  // hyperdrive is on
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!account && !!appConfig && !!publicClient;

  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey("portfolioLongs", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () => {
            const result: OpenLongPositionsData = {};
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
                    ...long,
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
    },
  );
  return {
    openLongPositions,
    openLongPositionsStatus,
  };
}
