import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
): Promise<bigint> {
  // 1 day ago in blocks
  const oneDayInBlocks = 86400n / 12n;

  return (
    readHyperdrive
      .getYieldSourceRate({
        blockRange: oneDayInBlocks,
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
