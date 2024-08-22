import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";

type OpenLpPositionsData = Record<
  Address,
  { lpShares: bigint; withdrawalShares: bigint }
>;

export function usePortfolioLpData(): {
  openLpPosition: OpenLpPositionsData | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const queryEnabled = !!account && !!appConfig && !!publicClient;

  const { data: openLpPosition, status: openLpPositionStatus } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result: OpenLpPositionsData = {};
          await Promise.all(
            appConfig.hyperdrives.map(async (hyperdrive) => {
              const readHyperdrive = new ReadHyperdrive({
                address: hyperdrive.address,
                publicClient,
                cache: sdkCache,
              });
              const lpShares = await readHyperdrive.getLpShares({
                account: account,
              });

              const withdrawalShares = await readHyperdrive.getWithdrawalShares(
                {
                  account: account,
                },
              );

              result[hyperdrive.address] = { lpShares, withdrawalShares };
            }),
          );
          return result;
        }
      : undefined,
  });
  return {
    openLpPosition,
    openLpPositionStatus,
  };
}
