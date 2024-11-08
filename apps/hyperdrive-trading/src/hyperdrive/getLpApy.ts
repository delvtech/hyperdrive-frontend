import { Block } from "@delvtech/drift";
import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getRewardsFn,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { getPublicClient } from "@wagmi/core";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isForkChain } from "src/chains/isForkChain";
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

export async function getLpApy({
  readHyperdrive,
  hyperdrive,
}: {
  readHyperdrive: ReadHyperdrive;
  hyperdrive: HyperdriveConfig;
}): Promise<LpApyResult> {
  const currentBlock = (await readHyperdrive.drift.getBlock()) as Block;
  const currentBlockNumber = currentBlock.blockNumber!;
  // Appconfig tells us how many days to look back for historical rates
  const numBlocksForHistoricalRate = isForkChain(hyperdrive.chainId)
    ? 1000n // roughly 3 hours for cloudchain
    : appConfig.chains[hyperdrive.chainId].dailyAverageBlocks *
      BigInt(
        appConfig.yieldSources[hyperdrive.yieldSource].historicalRatePeriod,
      );
  const targetFromBlock = currentBlockNumber - numBlocksForHistoricalRate;

  let lpApy: bigint | undefined;
  let netLpApy: bigint | undefined;

  const blocksSinceInitialization =
    (currentBlockNumber || 0n) - hyperdrive.initializationBlock;
  const isYoungerThanOneDay =
    blocksSinceInitialization <
    appConfig.chains[hyperdrive.chainId].dailyAverageBlocks;

  // if the pool was deployed less than one day ago, it's new.
  if (!isYoungerThanOneDay) {
    const lpApyResult = await readHyperdrive.getLpApy({
      fromBlock: [31337].includes(hyperdrive.chainId)
        ? // local devnets don't have a lot of blocks, so start from the beginning
          1n
        : targetFromBlock,
    });
    lpApy = lpApyResult.lpApy;
    netLpApy = lpApy;
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
          netLpApy = fixed(reward.apy).add(
            // safe to cast because if we get here then lpApy has been set
            netLpApy as bigint,
          ).bigint;
        }
      });
    }
  }

  // Figure out if the pool is younger than 1 rate period
  const isPoolYoungerThanOneRatePeriod =
    hyperdrive.initializationBlock > targetFromBlock;

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
    netLpApy,
    ratePeriodDays,
    isNew: lpApy === undefined,
  } as LpApyResult;
}
