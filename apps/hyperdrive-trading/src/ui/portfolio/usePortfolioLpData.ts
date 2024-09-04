import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, PublicClient } from "viem";
import { useAccount } from "wagmi";

type LpPosition = {
  hyperdrive: {
    address: Address;
    chainId: number;
  };
  lpShares: bigint;
  withdrawalShares: bigint;
};

type ClientMap = Map<number, { publicClient: PublicClient }>;

export function usePortfolioLpData(): {
  openLpPositions: LpPosition[] | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const queryEnabled = !!account && !!appConfig.hyperdrives.length;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    queryFn: queryEnabled
      ? async () => {
          const clients = initializeClients(
            Object.keys(appConfig.registries).map(Number),
          );

          const results = await Promise.all(
            appConfig.hyperdrives.map(async (hyperdrive) => {
              // We need to fetch different public clients for each chain ID
              // because Hyperdrive pools can exist on multiple chains.
              // Each chain requires its own public client to interact with it.
              const { publicClient } = clients.get(hyperdrive.chainId) || {};

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

// This function initializes public clients for each chain ID.
// It's used to fetch data from different chains using the correct public client.
function initializeClients(chainIds: number[]): ClientMap {
  const clients: ClientMap = new Map();

  for (const chainId of chainIds) {
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId,
    }) as PublicClient;
    clients.set(chainId, { publicClient });
  }

  return clients;
}
