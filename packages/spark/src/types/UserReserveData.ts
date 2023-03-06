import { BigNumber } from "ethers";

export type UserReserveData = [
  underlyingAsset: string,
  scaledATokenBalance: BigNumber,
  usageAsCollateralEnabledOnUser: boolean,
  stableBorrowRate: BigNumber,
  scaledVariableDebt: BigNumber,
  principalStableDebt: BigNumber,
  stableBorrowLastUpdateTimestamp: BigNumber,
];
