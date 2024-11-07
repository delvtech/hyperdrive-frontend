import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  getHyperdrive,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-js-core";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useAccount } from "wagmi";

type OpenLongPositionsData = {
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
