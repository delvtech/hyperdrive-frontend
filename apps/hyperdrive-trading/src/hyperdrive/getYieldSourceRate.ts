import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  AppConfig,
  findHyperdriveConfig,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isForkChain } from "src/chains/isForkChain";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
  appConfig: AppConfig,
): Promise<{ rate: bigint; ratePeriodDays: number }> {
  const hyperdriveChainId = await readHyperdrive.network.getChainId();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId,
    hyperdriveAddress: readHyperdrive.address,
    hyperdrives: appConfig.hyperdrives,
  });

  const numBlocksForHistoricalRate = getNumBlocksForHistoricalRate({
    appConfig,
    hyperdrive,
  });

  const currentBlock = (await readHyperdrive.network.getBlock()) as Block;
  const initializationBlock = hyperdrive.initializationBlock;

  const isPoolYoungerThanOneRatePeriod =
    initializationBlock >
    currentBlock.blockNumber! - numBlocksForHistoricalRate;

  // If we don't have enough blocks to go back 1 full historical period, then
  // grab the all-time rate instead.
  if (isPoolYoungerThanOneRatePeriod) {
    const blocksSinceInitialization =
      currentBlock.blockNumber! - initializationBlock;

    const daysSinceInitialization = convertMillisecondsToDays(
      Date.now() - Number(hyperdrive.initializationTimestamp * 1000n),
    );

    return {
      rate: await readHyperdrive.getYieldSourceRate({
        blockRange: blocksSinceInitialization,
      }),
      ratePeriodDays: daysSinceInitialization,
    };
  }

  const rate = await readHyperdrive.getYieldSourceRate({
    blockRange: numBlocksForHistoricalRate,
  });

  return {
    rate,
    ratePeriodDays:
      appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod,
  };
}

function getNumBlocksForHistoricalRate({
  appConfig,
  hyperdrive,
}: {
  appConfig: AppConfig;
  hyperdrive: HyperdriveConfig;
}) {
  const blocksPerDay = appConfig.chains[hyperdrive.chainId].dailyAverageBlocks;
  const historicalRatePeriod =
    appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod;

  const numBlocksForHistoricalRate = isForkChain(hyperdrive.chainId)
    ? 1000n // roughly 3 hours for cloudchain
    : blocksPerDay * BigInt(historicalRatePeriod);

  return numBlocksForHistoricalRate;
}

function getDaysSinceInitialization({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): number {
  return Number(hyperdrive.initializationTimestamp * 1000n) - Date.now();
}
