import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { cloudChain } from "src/chains/cloudChain";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber } from "wagmi";

export function useLpApy({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): {
  lpApy: number | undefined;
  lpApyStatus: "error" | "success" | "loading";
} {
  const { poolInfo: currentPoolInfo } = usePoolInfo({
    hyperdriveAddress,
    chainId,
  });
  const appConfig = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    hyperdrives: appConfig.hyperdrives,
  });
  const { data: blockNumber } = useBlockNumber({ chainId });
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!blockNumber && !!currentPoolInfo;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("getLpApy", {
      chainId,
      blockNumber: blockNumber?.toString(),
      hyperdrive: hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const numBlocksForHistoricalRate =
            chainId === cloudChain.id
              ? 1000n // roughly 3 hours for cloudchain
              : DAILY_AVERAGE_BLOCK_TOTAL *
                BigInt(
                  appConfig.yieldSources[hyperdrive.yieldSource]
                    .historicalRatePeriod,
                );
          return readHyperdrive.getLpApy({
            fromBlock: [31337].includes(chainId)
              ? // local devnets don't have a lot of blocks, so start from the beginning
                1n
              : // Appconfig tells us how many days to look back for historical rates
                blockNumber - numBlocksForHistoricalRate,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data?.lpApy,
    lpApyStatus: status,
  };
}
