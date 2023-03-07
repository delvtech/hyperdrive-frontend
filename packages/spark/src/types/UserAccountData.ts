import { BigNumber } from "ethers";

export interface UserAccountData {
  totalCollateralBase: BigNumber;
  totalDebtBase: BigNumber;
  availableBorrowBase: BigNumber;
  currentLiquidationThreshold: BigNumber;
  ltv: BigNumber;
  healthFactor: BigNumber;
}
