export function getCheckpointId(
  blockTimestamp: bigint,
  checkpointDuration: bigint,
): bigint {
  return blockTimestamp - (blockTimestamp % checkpointDuration);
}
