import { Block } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getRewardsFn,
  getYieldSource,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { getPublicClient } from "@wagmi/core";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export type LpApyResult = {
  ratePeriodDays: number;
} & (
  | {
      /**
       * The LP APY for this pool
       */
      lpApy: bigint;
      /**
       * The LP APY that includes rewards
       */
      netLpApy: bigint;
      isNew: false;
    }
  | {
      /**
       * The LP APY for this pool
       */
      lpApy: undefined;
      /**
       * The LP APY that includes rewards
       */
      netLpApy: undefined;
      isNew: true;
    }
);

/**
 * Calculates APY metrics for a Hyperdrive liquidity pool
 */
export async function getLpApy({
  readHyperdrive,
  hyperdrive,
}: {
  readHyperdrive: ReadHyperdrive;
  hyperdrive: HyperdriveConfig;
}): Promise<LpApyResult> {
  // Get current block and configuration
  const currentBlock = (await readHyperdrive.drift.getBlock()) as Block;
  const currentBlockNumber = currentBlock.blockNumber!;
  const chainConfig = appConfig.chains[hyperdrive.chainId];

  // Get yield source and calculate historical block range
  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

  const numBlocksForHistoricalRate =
    chainConfig.dailyAverageBlocks * BigInt(yieldSource.historicalRatePeriod);
  // const numBlocksForHistoricalRate = isForkChain(hyperdrive.chainId)
  //   ? 1000n // roughly 3 hours for cloudchain
  //   : chainConfig.dailyAverageBlocks * BigInt(yieldSource.historicalRatePeriod);

  const targetFromBlock = currentBlockNumber - numBlocksForHistoricalRate;

  // Check if pool is newer than one day
  const blocksSinceInitialization =
    currentBlockNumber - hyperdrive.initializationBlock;
  const isNew = blocksSinceInitialization < chainConfig.dailyAverageBlocks;

  let lpApy: bigint | undefined;
  let netLpApy: bigint | undefined;

  // Calculate APY for established pools
  if (!isNew) {
    // Calculate base LP APY
    const fromBlock = [31337].includes(hyperdrive.chainId)
      ? 1n
      : targetFromBlock;
    const lpApyResult = await readHyperdrive.getLpApy({ fromBlock });
    lpApy = lpApyResult.lpApy;
    netLpApy = lpApy;

    // Add rewards APY if available
    const publicClient = getPublicClient(wagmiConfig as any, {
      chainId: hyperdrive.chainId,
    }) as PublicClient;

    const rewardsFn = getRewardsFn({
      yieldSourceId: hyperdrive.yieldSource,
      appConfig,
    });

    if (rewardsFn) {
      const rewards = await rewardsFn(publicClient);
      rewards?.forEach((reward) => {
        if (reward.type === "transferableToken") {
          netLpApy = fixed(reward.apy).add(netLpApy as bigint).bigint;
        }
      });
    }
  }

  // Calculate rate period based on pool age
  const isPoolYoungerThanOneRatePeriod =
    hyperdrive.initializationBlock > targetFromBlock;
  const ratePeriodDays = isPoolYoungerThanOneRatePeriod
    ? convertMillisecondsToDays(
        Date.now() - Number(hyperdrive.initializationTimestamp * 1000n),
      )
    : yieldSource.historicalRatePeriod;

  return {
    lpApy,
    netLpApy,
    ratePeriodDays,
    isNew: lpApy === undefined,
  } as LpApyResult;
}
