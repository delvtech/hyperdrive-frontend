import { HyperdriveConfig, appConfig } from "@delvtech/hyperdrive-appconfig";
import { useBlockNumber } from "wagmi";

/**
 * Returns true or false if the pool is younger than 1 day old.
 */
export function useIsNewPool({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): boolean {
  const { data: currentBlockNumber } = useBlockNumber({
    chainId: hyperdrive.chainId,
  });

  const blocksSinceInitialization =
    (currentBlockNumber || 0n) - hyperdrive.initializationBlock;

  // if the pool was deployed less than one day ago, it's new.
  const isYoungerThanOneDay =
    blocksSinceInitialization <
    appConfig.chains[hyperdrive.chainId].dailyAverageBlocks;

  return isYoungerThanOneDay;
}
