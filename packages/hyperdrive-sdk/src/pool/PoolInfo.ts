export interface PoolInfo {
  shareReserves: bigint;
  bondReserves: bigint;
  lpTotalSupply: bigint;
  sharePrice: bigint;
  longsOutstanding: bigint;
  longAverageMaturityTime: bigint;
  shortsOutstanding: bigint;
  shortAverageMaturityTime: bigint;
  shortBaseVolume: bigint;
  withdrawalSharesReadyToWithdraw: bigint;
  withdrawalSharesProceeds: bigint;
  lpSharePrice: bigint;
}
