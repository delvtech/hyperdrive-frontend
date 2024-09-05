import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  // TODO: We should be getting a specific public client for the chain the
  // hyperdrive is on

  const appConfig = useAppConfig();
  const clients = usePublicClients(appConfig);
  const queryEnabled = !!account && !!appConfig && !!clients;

  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey("portfolioShorts", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () => {
            const results = await Promise.all(
              appConfig.hyperdrives.map(async (hyperdrive) => {
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

                const readHyperdrive = await getReadHyperdrive({
                  appConfig,
                  hyperdriveAddress: hyperdrive.address,
                  publicClient,
                });

                return {
                  hyperdrive,
                  openShorts: await readHyperdrive.getOpenShorts({
                    account: account,
                  }),
                };
              }),
            );
            return results;
          }
        : undefined,
    });
  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}
