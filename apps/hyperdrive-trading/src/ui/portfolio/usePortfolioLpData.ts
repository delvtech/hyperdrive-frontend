import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
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
  const { address: account } = useAccount();

  const appConfigForConnectedChain = useAppConfigForConnectedChain();

  const queryEnabled =
    !!account && !!appConfigForConnectedChain.hyperdrives.length;
  const clients = usePublicClients(
    Object.keys(appConfigForConnectedChain.chains).map(Number),
  );
  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    queryFn: queryEnabled
      ? async () => {
          const results = await Promise.all(
            appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
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
                appConfig: appConfigForConnectedChain,
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
