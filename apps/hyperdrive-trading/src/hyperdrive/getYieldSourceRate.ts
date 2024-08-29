import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";
import { cloudChain } from "src/chains/cloudChain";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
  appConfig: AppConfig,
): Promise<bigint> {
  const hyperdriveChainId = await readHyperdrive.network.getChainId();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId,
    hyperdriveAddress: readHyperdrive.address,
    hyperdrives: appConfig.hyperdrives,
  });
  const numBlocksForHistoricalRate =
    hyperdrive.chainId === cloudChain.id
      ? 1000n // roughly 3 hours for cloudchain
      : DAILY_AVERAGE_BLOCK_TOTAL *
        BigInt(
          appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod,
        );

  return (
    readHyperdrive
      .getYieldSourceRate({
        blockRange: numBlocksForHistoricalRate,
      })
      // If the 24 hour rate doesn't exist, assume the pool was initialized less
      // than 24 hours ago and try to get the all-time rate
      .catch(async (e: any) => {
        const currentBlock = (await readHyperdrive.network.getBlock()) as Block;
        const initializationBlock = hyperdrive.initializationBlock;
        const blocksSinceInitialization =
          currentBlock.blockNumber! - initializationBlock;

        return readHyperdrive.getYieldSourceRate({
          blockRange: blocksSinceInitialization,
        });
      })
  );
}
