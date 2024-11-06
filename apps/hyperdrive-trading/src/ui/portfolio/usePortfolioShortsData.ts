import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { usePublicClients } from "src/ui/hyperdrive/hooks/usePublicClients";
import { useAccount } from "wagmi";

type OpenShortPositionsData = {
  hyperdrive: HyperdriveConfig;
  openShorts: OpenShort[];
}[];

export function usePortfolioShortsData(): {
  openShortPositions: OpenShortPositionsData | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();

  const appConfigForConnectedChain = useAppConfigForConnectedChain();

  const clients = usePublicClients(
    Object.keys(appConfigForConnectedChain.chains).map(Number),
  );
  const queryEnabled = !!account && !!appConfigForConnectedChain && !!clients;

  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey("portfolioShorts", { account }),
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
                    openShorts: [],
                  };
                }

                const readHyperdrive = await getHyperdrive({
                  address: hyperdrive.address,
                  publicClient,
                  cache: sdkCache,
                });

                return {
                  hyperdrive,
                  openShorts: await readHyperdrive.getOpenShorts({
                    account,
                  }),
                };
              }),
            )
        : undefined,
    });
  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}
