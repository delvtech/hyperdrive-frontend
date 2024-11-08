export function getCheckpointTime(
  blockTimestamp: bigint,
  checkpointDuration: bigint,
): bigint {
  // https://github.com/delvtech/hyperdrive/blob/314cd408ffa4968d5a6daff95167cd9af17607d6/contracts/src/HyperdriveStorage.sol#L193
  return blockTimestamp - (blockTimestamp % checkpointDuration);
}
