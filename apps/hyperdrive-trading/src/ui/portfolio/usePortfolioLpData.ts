import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePublicClients } from "src/ui/hyperdrive/hooks/usePublicClients";
import { useAccount } from "wagmi";

type LpPosition = {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  withdrawalShares: bigint;
};

export function usePortfolioLpData(): {
  openLpPositions: LpPosition[] | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const queryEnabled = !!account && !!appConfig.hyperdrives.length;
  const clients = usePublicClients(Object.keys(appConfig.chains).map(Number));
  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
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
                  lpShares: 0n,
                  withdrawalShares: 0n,
                };
              }

              const readHyperdrive = await getReadHyperdrive({
                appConfig,
                hyperdriveAddress: hyperdrive.address,
                publicClient,
              });

              const [lpShares, withdrawalShares] = await Promise.all([
                readHyperdrive.getLpShares({ account }),
                readHyperdrive.getWithdrawalShares({ account }),
              ]);

              return {
                hyperdrive,
                lpShares,
                withdrawalShares,
              };
            }),
          );

          return results;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    openLpPositions: data,
    openLpPositionStatus: status,
  };
}
