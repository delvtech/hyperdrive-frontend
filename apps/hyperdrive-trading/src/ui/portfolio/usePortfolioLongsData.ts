import { OpenLongPositionReceived } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { usePublicClients } from "src/ui/hyperdrive/hooks/usePublicClients";
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

  const clients = usePublicClients(
    Object.keys(appConfigForConnectedChain.chains).map(Number),
  );
  const queryEnabled = !!account && !!appConfigForConnectedChain && !!clients;

  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey("portfolioLongs", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () =>
            await Promise.all(
              appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
                const publicClient = clients[hyperdrive.chainId]?.publicClient;

                if (!publicClient) {
                  console.error(
                    `No public client found for chainId ${hyperdrive.chainId}`,
                  );
                  return {
                    hyperdrive,
                    openLongs: [],
                  };
                }

                const readHyperdrive = await getReadHyperdrive({
                  appConfig: appConfigForConnectedChain,
                  hyperdriveAddress: hyperdrive.address,
                  publicClient,
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
