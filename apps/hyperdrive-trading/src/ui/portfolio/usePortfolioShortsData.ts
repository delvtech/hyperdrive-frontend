import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
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
