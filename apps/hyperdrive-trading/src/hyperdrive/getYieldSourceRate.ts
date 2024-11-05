import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AppConfig,
  findHyperdriveConfig,
  HyperdriveConfig,
  rewardFunctions,
} from "@delvtech/hyperdrive-appconfig";
import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { getPublicClient } from "@wagmi/core";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isForkChain } from "src/chains/isForkChain";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
  appConfig: AppConfig,
): Promise<{ rate: bigint; ratePeriodDays: number; netRate: bigint }> {
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

  return {
    rate,
    netRate,
    ratePeriodDays:
      appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod,
  };
}

async function calcNetRate(
  rate: bigint,
  appConfig: AppConfig,
  hyperdrive: HyperdriveConfig,
) {
  let netRate = rate;
  // TODO: Create an appconfig selector to grab the rewards function from a
  // given hyperdrive
  const rewardsFn = appConfig.yieldSources[hyperdrive.yieldSource].rewardsFn;
  if (rewardsFn) {
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId: hyperdrive.chainId,
    }) as PublicClient;
    const rewards = await rewardFunctions[rewardsFn](publicClient);
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
