import { OpenShort, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useAccount, usePublicClient } from "wagmi";

type OpenShortPositionsData = Record<`0x${string}`, OpenShort[]>;

export function usePortfolioShortsData(): {
  openShortPositions: OpenShortPositionsData | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!account && !!appConfig && !!publicClient;

  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey("portfolioShorts", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () => {
            const result: OpenShortPositionsData = {};
            await Promise.all(
              appConfig.hyperdrives.map(async (hyperdrive) => {
                const readHyperdrive = new ReadHyperdrive({
                  address: hyperdrive.address,
                  publicClient,
                  cache: sdkCache,
                });

                result[hyperdrive.address] = await readHyperdrive.getOpenShorts(
                  {
                    account: account,
                  },
                );
              }),
            );
            return result;
          }
        : undefined,
    });
  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}
