import { Block } from "@delvtech/hyperdrive-viem";
import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { isForkChain } from "src/chains/isForkChain";
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
  lpApy:
    | { lpApy: bigint; formatted: string; ratePeriodDays: number }
    | undefined;
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
          const numBlocksForHistoricalRate = isForkChain(chainId)
            ? 1000n // roughly 3 hours for cloudchain
            : appConfig.chains[hyperdrive.chainId].dailyAverageBlocks *
              BigInt(
                appConfig.yieldSources[hyperdrive.yieldSource]
                  .historicalRatePeriod,
              );
          const { lpApy } = await readHyperdrive.getLpApy({
            fromBlock: [31337].includes(chainId)
              ? // local devnets don't have a lot of blocks, so start from the beginning
                1n
              : // Appconfig tells us how many days to look back for historical rates
                blockNumber - numBlocksForHistoricalRate,
          });

          // Figure out if the pool is younger than 1 rate period
          const currentBlock =
            (await readHyperdrive.network.getBlock()) as Block;
          const isPoolYoungerThanOneRatePeriod =
            hyperdrive.initializationBlock >
            currentBlock.blockNumber! - numBlocksForHistoricalRate;

          // If we don't have enough blocks to go back 1 full historical period, then
          // grab the all-time rate instead.
          let ratePeriodDays =
            appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod;
          if (isPoolYoungerThanOneRatePeriod) {
            ratePeriodDays = convertMillisecondsToDays(
              Date.now() - Number(hyperdrive.initializationTimestamp * 1000n),
            );
          }

          return {
            lpApy,
            ratePeriodDays,
            formatted: formatRate(lpApy),
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data,
    lpApyStatus: status,
  };
}
