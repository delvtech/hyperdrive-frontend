import {
  AnyReward,
  getAddLiquidityRewardConfigs,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { queryClient } from "src/network/queryClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { getRewardResolverQuery } from "src/ui/rewards/hooks/getRewardResolverQuery";
import { Address } from "viem";
import { useChainId } from "wagmi";

const HIDDEN_POOLS: Address[] = [];
/**
 * Returns a list of hyperdrives that are not paused or hidden. Optionally you
 * can specify if you want to filter out hyperdrives that have rewards
 */
export function useUnpausedPools(): {
  unpausedPools: HyperdriveConfig[] | undefined;
} {
  // Only show testnet and fork pools if the user is connected to a testnet
  // chain
  const appConfig = useAppConfigForConnectedChain();

  // Use the chain id in the query key to make sure the pools list updates when
  // you switch chains
  const connectedChainId = useChainId();
  const { data: unpausedPools } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "unpausedPools",
      params: { chainId: connectedChainId },
    }),
    queryFn: async () => {
      const unpausedPools: (HyperdriveConfig & {
        rewardsAmount: AnyReward[];
      })[] = (
        await Promise.all(
          appConfig.hyperdrives
            .filter((hyperdrive) => !HIDDEN_POOLS.includes(hyperdrive.address))
            .map(async (hyperdrive) => {
              const readHyperdrive = await getHyperdrive({
                address: hyperdrive.address,
                drift: getDrift({ chainId: hyperdrive.chainId }),
                earliestBlock: hyperdrive.initializationBlock,
                zapContractAddress: appConfig.zaps[hyperdrive.chainId]?.address,
              });

              // We only show hyperdrives that are not paused
              const { isPaused } = await readHyperdrive.getMarketState();
              if (isPaused) {
                return;
              }

              // Resolve the rewards information and include it for consumers
              // Add rewards APY if available
              const rewardConfigs = getAddLiquidityRewardConfigs({
                hyperdriveAddress: hyperdrive.address,
                chainId: hyperdrive.chainId,
                appConfig,
              });

              const rewards = !rewardConfigs?.length
                ? []
                : (
                    await Promise.all(
                      rewardConfigs.map((rewardConfig) =>
                        queryClient.fetchQuery(
                          getRewardResolverQuery({
                            rewardConfig,
                            chainId: hyperdrive.chainId,
                          }),
                        ),
                      ),
                    ).catch(() => [])
                  ).flat();

              return { ...hyperdrive, rewardsAmount: rewards };
            }),
        )
      ).filter((pool) => !!pool);

      return unpausedPools;
    },
  });
  return { unpausedPools };
}
