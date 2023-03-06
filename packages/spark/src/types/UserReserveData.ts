import { BigNumber } from "ethers";

export interface UserReserveData {
  underlyingAsset: `0x${string}`;
  scaledATokenBalance: BigNumber;
  usageAsCollateralEnabledOnUser: boolean;
  stableBorrowRate: BigNumber;
  scaledVariableDebt: BigNumber;
  principalStableDebt: BigNumber;
  stableBorrowLastUpdateTimestamp: BigNumber;
}
