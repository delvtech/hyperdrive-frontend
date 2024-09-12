import { appConfig, HyperdriveConfig } from "@hyperdrive/appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ReactElement } from "react";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

export function PoolsList(): ReactElement {
  const { hyperdrives, status } = usePoolsListHyperdriveConfigs();
  return (
    <div className="flex w-full flex-col gap-5">
      {
        // Show the newest pools first
        status === "loading" && !hyperdrives ? (
          <LoadingState />
        ) : hyperdrives ? (
          [...hyperdrives]
            .sort((a, b) => {
              return (
                Number(b.initializationTimestamp) -
                Number(a.initializationTimestamp)
              );
            })
            .map((hyperdrive) => (
              <PoolRow
                // Combine address and chainId for a unique key, as addresses may
                // overlap across chains (e.g. cloudchain and mainnet)
                key={`${hyperdrive.address}-${hyperdrive.chainId}`}
                hyperdrive={hyperdrive}
              />
            ))
        ) : null
      }
    </div>
  );
}

function usePoolsListHyperdriveConfigs(): {
  hyperdrives: HyperdriveConfig[] | undefined;
  status: QueryStatus;
} {
  // Only show testnet and fork pools if the user is connected to a testnet
  // chain
  const appConfigForConnectedChain = useAppConfigForConnectedChain();

  // Use the chain id in the query key to make sure the pools list updates when
  // you switch chains
  const connectedChainId = useChainId();

  const { data, status } = useQuery({
    queryKey: ["poolsListHyperdriveConfigs", { connectedChainId }],
    queryFn: async () => {
      // We only show hyperdrives that are not paused
      const marketStates = await Promise.all(
        appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId: hyperdrive.chainId,
          });
          const readHyperdrive = await getReadHyperdrive({
            hyperdriveAddress: hyperdrive.address,
            appConfig: appConfig,
            publicClient: publicClient as PublicClient,
          });

          return readHyperdrive.getMarketState();
        }),
      );

      return appConfigForConnectedChain.hyperdrives.filter(
        (hyperdrive, i) => !marketStates[i].isPaused,
      );
    },
  });

  return { hyperdrives: data, status };
}
