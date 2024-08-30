import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, PublicClient } from "viem";
import { useAccount } from "wagmi";

// Move type definitions to the top
type OpenLpPositionsData = Record<
  Address,
  { lpShares: bigint; withdrawalShares: bigint }
>;

type ClientMap = Map<number, { publicClient: PublicClient }>;

export function usePortfolioLpData(): {
  openLpPositions: OpenLpPositionsData | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const queryEnabled = Boolean(account && appConfig);

  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    placeholderData: {},
    queryFn: queryEnabled
      ? () => fetchPortfolioLpData(account as Address, appConfig)
      : undefined,
    enabled: queryEnabled,
  });

  return {
    openLpPositions: data,
    openLpPositionStatus: status,
  };
}

// Helper functions
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

async function fetchPortfolioLpData(
  account: Address,
  appConfig: ReturnType<typeof useAppConfig>,
): Promise<OpenLpPositionsData> {
  const clients = initializeClients(
    Object.keys(appConfig.registries).map(Number),
  );

  const results = await Promise.all(
    appConfig.hyperdrives.map(async (hyperdrive) => {
      const { publicClient } = clients.get(hyperdrive.chainId) || {};

      if (!publicClient) {
        console.error(
          `No public client found for chainId ${hyperdrive.chainId}`,
        );
        return undefined;
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

      return { [hyperdrive.address]: { lpShares, withdrawalShares } };
    }),
  );

  return Object.assign({}, ...results.filter(Boolean));
}
