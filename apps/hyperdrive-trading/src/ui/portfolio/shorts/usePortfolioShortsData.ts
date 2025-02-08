import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/network/drift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Address } from "viem";

export type OpenShortPositionsData = {
  hyperdrive: HyperdriveConfig;
  openShorts: OpenShort[];
}[];

export function usePortfolioShortsData({
  account,
}: {
  account: Address | undefined;
}): {
  openShortPositions: OpenShortPositionsData | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
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

export function usePortfolioShortsDataFromHyperdrives({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): {
  openShortPositions:
    | (OpenShort & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
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
