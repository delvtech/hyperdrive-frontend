import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { appConfig, HyperdriveConfig } from "@hyperdrive/appconfig";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isForkChain } from "src/chains/isForkChain";

export type LpApyResult = {
  ratePeriodDays: number;
} & (
  | {
      lpApy: bigint;
      isNew: false;
    }
  | {
      lpApy: undefined;
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
  const currentBlock = (await readHyperdrive.network.getBlock()) as Block;
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
    ratePeriodDays,
    isNew: lpApy === undefined,
  } as LpApyResult;
}
