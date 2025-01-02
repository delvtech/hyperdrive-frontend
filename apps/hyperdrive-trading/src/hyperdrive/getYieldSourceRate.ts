import { Block } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AppConfig,
  getHyperdriveConfig,
  getRewardsFn,
  getYieldSource,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { queryClient } from "src/network/queryClient";
import { makeRewardsQuery } from "src/ui/rewards/useRewards";

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
  const rewardsFn = getRewardsFn({
    yieldSourceId: hyperdrive.yieldSource,
    appConfig,
  });
  if (rewardsFn) {
    const rewards = await queryClient.fetchQuery(
      makeRewardsQuery({
        chainId: hyperdrive.chainId,
        hyperdriveAddress: hyperdrive.address,
      }),
    );
    rewards?.forEach((reward) => {
      if (reward.type === "apy") {
        netRate = fixed(reward.apy).add(
          // safe to cast because if we get here then lpApy has been set
          netRate as bigint,
        ).bigint;
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

  // const numBlocksForHistoricalRate = isForkChain(hyperdrive.chainId)
  //   ? 1000n // roughly 3 hours for cloudchain
  //   : blocksPerDay * BigInt(historicalRatePeriod);
  const numBlocksForHistoricalRate =
    blocksPerDay * BigInt(historicalRatePeriod);

  return numBlocksForHistoricalRate;
}
