import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
  appConfig: AppConfig,
): Promise<bigint> {
  const hyperdrive = findHyperdriveConfig({
    hyperdriveAddress: readHyperdrive.address,
    hyperdrives: appConfig.hyperdrives,
  });
  const numBlocksForHistoricalRate =
    DAILY_AVERAGE_BLOCK_TOTAL *
    BigInt(appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod);

  return (
    readHyperdrive
      .getYieldSourceRate({
        blockRange: numBlocksForHistoricalRate,
      })
      // If the 24 hour rate doesn't exist, assume the pool was initialized less
      // than 24 hours ago and try to get the all-time rate
      .catch(async () => {
        const currentBlock = (await readHyperdrive.network.getBlock()) as Block;
        const initializationBlock =
          await readHyperdrive.getInitializationBlock();
        const blocksSinceInitialization =
          currentBlock.blockNumber! - initializationBlock.blockNumber!;

        return readHyperdrive.getYieldSourceRate({
          blockRange: blocksSinceInitialization,
        });
      })
  );
}
