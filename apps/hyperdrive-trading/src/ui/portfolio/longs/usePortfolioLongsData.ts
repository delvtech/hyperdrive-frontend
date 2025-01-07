import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  getHyperdrive,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useAccount } from "wagmi";

export type OpenLongPositionsData = {
  hyperdrive: HyperdriveConfig;
  openLongs: OpenLongPositionReceived[];
}[];

export function usePortfolioLongsData(): {
  openLongPositions: OpenLongPositionsData | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!appConfigForConnectedChain;

  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey("portfolioLongs", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () =>
            await Promise.all(
              appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
                const readHyperdrive = await getHyperdrive({
                  address: hyperdrive.address,
                  drift: getDrift({ chainId: hyperdrive.chainId }),
                  earliestBlock: hyperdrive.initializationBlock,
                });

                const allLongs = await readHyperdrive.getOpenLongPositions({
                  account,
                });
                const openLongs = await Promise.all(
                  allLongs.map(async (long) => ({
                    ...long,
                    details: await readHyperdrive.getOpenLongDetails({
                      assetId: long.assetId,
                      account: account,
                    }),
                  })),
                );
                return {
                  hyperdrive,
                  openLongs,
                };
              }),
            )
        : undefined,
    },
  );

  return {
    openLongPositions,
    openLongPositionsStatus,
  };
}

export function usePortfolioLongsDataFromHyperdrives(
  hyperdrives: HyperdriveConfig[],
): {
  openLongPositions: OpenLongPositionsData | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const queryEnabled = !!account && !!hyperdrives.length;

  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey2({
        namespace: "portfolio",
        queryId: "openLongPositions",
        params: { account, hyperdrives },
      }),
      queryFn: queryEnabled
        ? async () => {
            const results = await Promise.all(
              hyperdrives.map(async (hyperdrive) => {
                const readHyperdrive = await getHyperdrive({
                  address: hyperdrive.address,
                  drift: getDrift({ chainId: hyperdrive.chainId }),
                  earliestBlock: hyperdrive.initializationBlock,
                });
                const allLongs = await readHyperdrive.getOpenLongPositions({
                  account,
                });

                const openLongs = await Promise.all(
                  allLongs.map(async (long) => ({
                    ...long,
                    details: await readHyperdrive.getOpenLongDetails({
                      assetId: long.assetId,
                      account: account,
                    }),
                  })),
                );

                return {
                  hyperdrive,
                  openLongs,
                };
              }),
            );
            return results;
          }
        : undefined,
      enabled: queryEnabled,
    },
  );

  return {
    openLongPositions,
    openLongPositionsStatus,
  };
}
