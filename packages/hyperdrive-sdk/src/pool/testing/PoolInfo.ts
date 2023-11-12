import { PoolInfo } from "src/pool/PoolInfo";

export const simplePoolInfo: PoolInfo = {
  shareReserves: 0n,
  shareAdjustment: 0n,
  bondReserves: 0n,
  lpTotalSupply: 0n,
  sharePrice: 0n,
  longsOutstanding: 0n,
  longAverageMaturityTime: 0n,
  shortsOutstanding: 0n,
  shortAverageMaturityTime: 0n,
  withdrawalSharesReadyToWithdraw: 0n,
  withdrawalSharesProceeds: 0n,
  lpSharePrice: 0n,
  longExposure: 0n,
};

export const mockPoolInfo: PoolInfo = {
  shareReserves: 50000000000000000000000n,
  bondReserves: 151005848028396475250000n,
  sharePrice: 1000000000000000000n,
  longsOutstanding: 0n,
  shortsOutstanding: 0n,
  longExposure: 0n,
  shareAdjustment: 0n,
  longAverageMaturityTime: 0n,
  shortAverageMaturityTime: 0n,
  lpTotalSupply: 5000000000000000000000n,
  lpSharePrice: 1000000000000000000n,
  withdrawalSharesProceeds: 0n,
  withdrawalSharesReadyToWithdraw: 0n,
};
