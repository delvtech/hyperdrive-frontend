import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useAccount } from "wagmi";

export type OpenShortPositionsData = {
  hyperdrive: HyperdriveConfig;
  openShorts: OpenShort[];
}[];

export function usePortfolioShortsData(): {
  openShortPositions: OpenShortPositionsData | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!appConfigForConnectedChain;

  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey("portfolioShorts", { account }),
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

export function usePortfolioShortsDataFromHyperdrives(
  hyperdrives: HyperdriveConfig[],
): {
  openShortPositions:
    | (OpenShort & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const queryEnabled = !!account && !!hyperdrives.length;
  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey2({
        namespace: "portfolio",
        queryId: "openShortPositions",
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
                });
                const openShorts = await readHyperdrive.getOpenShorts({
                  account,
                });
                return openShorts.map((openShort) => ({
                  ...openShort,
                  hyperdrive,
                }));
              }),
            );
            return results.flat();
          }
        : undefined,
      enabled: queryEnabled,
    });

  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}
