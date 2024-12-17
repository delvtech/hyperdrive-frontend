import {
  AnyReward,
  getRewardsFn,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

const HIDDEN_POOLS = [
  // Hide the susde/dai pool on mainnet because the LP APY is -100% after the
  // only LP yoinked their liquidity while a Long was open.
  "0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30",
];
/**
 * Returns a list of hyperdrives that are not paused or hidden. Optionally you
 * can specify if you want to filter out hyperdrives that have rewards
 */
export function useUnpausedPools(): {
  unpausedPools: HyperdriveConfig[] | undefined;
} {
  // Only show testnet and fork pools if the user is connected to a testnet
  // chain
  const appConfigForConnectedChain = useAppConfigForConnectedChain();

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
      const unpausedPools: (HyperdriveConfig & { rewards: AnyReward[] })[] = (
        await Promise.all(
          appConfigForConnectedChain.hyperdrives
            .filter((hyperdrive) => !HIDDEN_POOLS.includes(hyperdrive.address))
            .map(async (hyperdrive) => {
              const readHyperdrive = await getHyperdrive({
                address: hyperdrive.address,
                drift: getDrift({ chainId: hyperdrive.chainId }),
                earliestBlock: hyperdrive.initializationBlock,
              });

              // We only show hyperdrives that are not paused
              const { isPaused } = await readHyperdrive.getMarketState();
              if (isPaused) {
                return;
              }

              // Resolve the rewards information and include it for consumers
              const publicClient = getPublicClient(wagmiConfig as any, {
                chainId: hyperdrive.chainId,
              }) as PublicClient;

              const rewardsFn = getRewardsFn({
                yieldSourceId: hyperdrive.yieldSource,
                appConfig: appConfigForConnectedChain,
              });

              const rewards = !rewardsFn ? [] : await rewardsFn(publicClient);

              return { ...hyperdrive, rewards };
            }),
        )
      ).filter((pool) => !!pool);

      return unpausedPools;
    },
  });
  return { unpausedPools };
}
