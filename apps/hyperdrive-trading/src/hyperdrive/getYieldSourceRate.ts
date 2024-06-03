import { Block, ReadHyperdrive } from "@delvtech/hyperdrive-viem";

export async function getYieldSourceRate(
  readHyperdrive: ReadHyperdrive,
): Promise<bigint> {
  // 2 days ago in blocks
  const twoDaysInBlocks = 172800n / 12n;

  return (
    readHyperdrive
      .getYieldSourceRate({
        blockRange: twoDaysInBlocks,
      })
      // If the 48 hour rate doesn't exist, assume the pool was initialized less
      // than 48 hours ago and try to get the all-time rate
      .catch(async () => {
        try {
          const currentBlock =
            (await readHyperdrive.network.getBlock()) as Block;
          const initializationBlock =
            await readHyperdrive.getInitializationBlock();
          const blocksSinceInitialization =
            currentBlock.blockNumber! - initializationBlock.blockNumber!;

          return readHyperdrive.getYieldSourceRate({
            blockRange: blocksSinceInitialization,
          });
        } catch (e) {
          console.error(e);
          return 0n;
        }
      })
  );
}
