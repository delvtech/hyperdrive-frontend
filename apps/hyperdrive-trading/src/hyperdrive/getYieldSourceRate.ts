import { Block } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AppConfig,
  findHyperdriveConfig,
  findYieldSource,
  getRewardsFn,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { getPublicClient } from "@wagmi/core";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isForkChain } from "src/chains/isForkChain";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
  appConfig: AppConfig,
): Promise<{ rate: bigint; ratePeriodDays: number; netRate: bigint }> {
  const hyperdriveChainId = await readHyperdrive.drift.getChainId();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId,
    hyperdriveAddress: readHyperdrive.address,
    hyperdrives: appConfig.hyperdrives,
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

  const yieldSource = findYieldSource({
    appConfig,
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
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
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId: hyperdrive.chainId,
    }) as PublicClient;
    const rewards = await rewardsFn(publicClient);
    rewards?.forEach((reward) => {
      if (reward.type === "transferableToken") {
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
  const yieldSource = findYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });
  const historicalRatePeriod = yieldSource.historicalRatePeriod;

  const numBlocksForHistoricalRate = isForkChain(hyperdrive.chainId)
    ? 1000n // roughly 3 hours for cloudchain
    : blocksPerDay * BigInt(historicalRatePeriod);

  return numBlocksForHistoricalRate;
}
