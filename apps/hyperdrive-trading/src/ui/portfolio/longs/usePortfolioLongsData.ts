import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  getHyperdrive,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Address } from "viem";

export type OpenLongPositionsData = {
  hyperdrive: HyperdriveConfig;
  openLongs: OpenLongPositionReceived[];
}[];

export function usePortfolioLongsData({
  account,
}: {
  account: Address | undefined;
}): {
  openLongPositions: OpenLongPositionsData | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
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
                  zapContractAddress:
                    appConfigForConnectedChain.zaps[hyperdrive.chainId].address,
                });

                const allLongs = await readHyperdrive.getOpenLongPositions({
                  account,
                });
                const openLongs = await Promise.all(
                  allLongs.map(async (long) => ({
                    ...long,
                    details: await readHyperdrive.getOpenLongDetails({
                      assetId: long.assetId,
                      account,
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

export function usePortfolioLongsDataFromHyperdrives({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): {
  openLongPositions:
    | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account && !!hyperdrives.length;
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
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
                  zapContractAddress:
                    appConfigForConnectedChain.zaps[hyperdrive.chainId].address,
                });
                const allLongs = await readHyperdrive.getOpenLongPositions({
                  account,
                });

                const openLongs = await Promise.all(
                  allLongs.map(async (long) => ({
                    ...long,
                    hyperdrive,
                    details: await readHyperdrive.getOpenLongDetails({
                      assetId: long.assetId,
                      account: account,
                    }),
                  })),
                );

                return openLongs;
              }),
            );
            return results.flat();
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
