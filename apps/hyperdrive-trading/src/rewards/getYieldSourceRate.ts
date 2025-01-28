import { Block } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AppConfig,
  getHyperdriveConfig,
  getYieldSource,
  getYieldSourceRewardConfigs,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { queryClient } from "src/network/queryClient";
import { getRewardResolverQuery } from "src/ui/rewards/hooks/getRewardResolverQuery";

/**
 * Returns the yield source rate and net rate which includes rewards for the
 * given hyperdrive.
 */
export async function getYieldSourceRate({
  readHyperdrive,
  appConfig,
}: {
  readHyperdrive: ReadHyperdrive;
  appConfig: AppConfig;
}): Promise<{ rate: bigint; ratePeriodDays: number; netRate: bigint }> {
  const hyperdriveChainId = await readHyperdrive.drift.getChainId();
  const hyperdrive = getHyperdriveConfig({
    hyperdriveChainId,
    hyperdriveAddress: readHyperdrive.address,
    appConfig,
  });

  const numBlocksForHistoricalRate = getNumBlocksForHistoricalRate({
    appConfig,
    hyperdrive,
  });

  const currentBlock = (await readHyperdrive.drift.getBlock()) as Block;
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

    const rateSinceInitialization = await readHyperdrive.getYieldSourceRate({
      blockRange: blocksSinceInitialization,
    });
    return {
      rate: rateSinceInitialization,
      netRate: await calcNetRate(
        rateSinceInitialization,
        appConfig,
        hyperdrive,
      ),
      ratePeriodDays: daysSinceInitialization,
    };
  }

  const rate = await readHyperdrive.getYieldSourceRate({
    blockRange: numBlocksForHistoricalRate,
  });

  const netRate = await calcNetRate(rate, appConfig, hyperdrive);

  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

  return {
    rate,
    netRate,
    ratePeriodDays: yieldSource.historicalRatePeriod,
  };
}

async function calcNetRate(
  rate: bigint,
  appConfig: AppConfig,
  hyperdrive: HyperdriveConfig,
) {
  let netRate = rate;

  const rewardConfigs = getYieldSourceRewardConfigs({
    yieldSourceId: hyperdrive.yieldSource,
    chainId: hyperdrive.chainId,
    appConfig,
  });

  if (rewardConfigs?.length) {
    const rewards = await Promise.all(
      rewardConfigs.map((rewardConfig) =>
        queryClient.fetchQuery(
          getRewardResolverQuery({
            chainId: hyperdrive.chainId,
            rewardConfig,
          }),
        ),
      ),
    );

    rewards.flat().forEach((reward) => {
      if (reward.type === "apy") {
        netRate = fixed(reward.apy).add(netRate).bigint;
      }
    });
  }
  return netRate;
}

function getNumBlocksForHistoricalRate({
  appConfig,
  hyperdrive,
}: {
  appConfig: AppConfig;
  hyperdrive: HyperdriveConfig;
}) {
  const blocksPerDay = appConfig.chains[hyperdrive.chainId].dailyAverageBlocks;
  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });
  const historicalRatePeriod = yieldSource.historicalRatePeriod;

  const numBlocksForHistoricalRate =
    blocksPerDay * BigInt(historicalRatePeriod);

  return numBlocksForHistoricalRate;
}
