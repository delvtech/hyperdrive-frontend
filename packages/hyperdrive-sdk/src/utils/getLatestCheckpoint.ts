export function getLatestCheckpointId(
  blockNumber: bigint,
  checkpointDuration: bigint,
): bigint {
  return blockNumber - (blockNumber % checkpointDuration);
}
