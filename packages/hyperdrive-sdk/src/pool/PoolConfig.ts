
export interface PoolConfig {
  baseToken: `0x${string}`;
  initialSharePrice: bigint;
  minimumShareReserves: bigint;
  positionDuration: bigint;
  checkpointDuration: bigint;
  timeStretch: bigint;
  governance: `0x${string}`;
  feeCollector: `0x${string}`;
  fees: {
    curve: bigint;
    flat: bigint;
    governance: bigint;
  };
  oracleSize: bigint;
  updateGap: bigint;
}
