export function getCheckpointId(
  blockNumber: bigint,
  checkpointDuration: bigint,
): bigint {
  return blockNumber - (blockNumber % checkpointDuration);
}
