import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address, PublicClient } from "viem";
import { useAccount } from "wagmi";

type OpenLpPositionsData = Record<
  Address,
  { lpShares: bigint; withdrawalShares: bigint }
>;

export function usePortfolioLpData(): {
  openLpPositions: OpenLpPositionsData | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const appConfig = useAppConfig();
  const chainIds = Object.keys(appConfig.registries).map(Number);
  const { address: account } = useAccount();
  const queryEnabled = !!account && !!appConfig;
  const clients: Map<
    number,
    {
      publicClient: PublicClient;
    }
  > = new Map();

  for (const chainId of chainIds) {
    // TODO: Cleanup type casting
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId,
    }) as PublicClient;

    clients.set(chainId, {
      publicClient,
    });
  }

  const { data, error, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    placeholderData: [],
    queryFn: queryEnabled
      ? async () => {
          const result: OpenLpPositionsData = {};
          const results = await Promise.all(
            appConfig.hyperdrives.map(async (hyperdrive) => {
              const { publicClient } = clients.get(hyperdrive.chainId) || {};

              // Return available static data if no registry is found
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

              const lpShares = await readHyperdrive.getLpShares({
                account: account,
              });

              const withdrawalShares = await readHyperdrive.getWithdrawalShares(
                {
                  account: account,
                },
              );
              // console.log({ lpShares, withdrawalShares }, "all");
              result[hyperdrive.address] = {
                lpShares,
                withdrawalShares,
              };

              return result;
            }),
          );
          return Object.assign({}, ...results.filter(Boolean));
        }
      : undefined,
  });

  return {
    openLpPositions: data,
    openLpPositionStatus: status,
  };
}
