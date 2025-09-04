import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { POSITION_BLOCK_BOUNDARIES_BY_CHAIN_ID } from "src/base/latestBlocks";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
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
      retry: false,
      refetchOnWindowFocus: false,
      queryFn: queryEnabled
        ? async () =>
            await Promise.all(
              appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
                try {
                  const readHyperdrive = await getHyperdrive({
                    address: hyperdrive.address,
                    drift: await getDrift({ chainId: hyperdrive.chainId }),
                    epochBlock: hyperdrive.initializationBlock,
                    eventQueryRetries: 9,
                    zapContractAddress:
                      appConfigForConnectedChain.zaps[hyperdrive.chainId]
                        ?.address,
                  });

                  return {
                    hyperdrive,
                    openShorts: await readHyperdrive.getOpenShorts({
                      account,
                      options:
                        POSITION_BLOCK_BOUNDARIES_BY_CHAIN_ID[
                          hyperdrive.chainId
                        ].short,
                    }),
                  };
                } catch (e) {
                  console.error(e);
                  return {
                    hyperdrive,
                    openShorts: [],
                  };
                }
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
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!hyperdrives.length;
  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey2({
        namespace: "portfolio",
        queryId: "openShortPositions",
        params: { account, hyperdrives },
      }),
      retry: false,
      refetchOnWindowFocus: false,
      queryFn: queryEnabled
        ? async () => {
            const results = await Promise.all(
              hyperdrives.map(async (hyperdrive) => {
                try {
                  const readHyperdrive = await getHyperdrive({
                    address: hyperdrive.address,
                    drift: await getDrift({ chainId: hyperdrive.chainId }),
                    epochBlock: hyperdrive.initializationBlock,
                    eventQueryRetries: 9,
                    debugName: hyperdrive.name,
                    zapContractAddress:
                      appConfigForConnectedChain.zaps[hyperdrive.chainId]
                        ?.address,
                  });
                  const openShorts = await readHyperdrive.getOpenShorts({
                    account,
                    options:
                      POSITION_BLOCK_BOUNDARIES_BY_CHAIN_ID[hyperdrive.chainId]
                        .short,
                  });
                  return openShorts.map((openShort) => ({
                    ...openShort,
                    hyperdrive,
                  }));
                } catch (e) {
                  console.error(e);
                  return [];
                }
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
