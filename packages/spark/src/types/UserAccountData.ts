export interface UserAccountData {
  totalCollateralBase: bigint;
  totalDebtBase: bigint;
  availableBorrowBase: bigint;
  currentLiquidationThreshold: bigint;
  /**
   * In Aave v3, the ltv (Loan-to-Value) property is stored as a uint16, which
   * is an unsigned 16-bit integer. This means it can store integer values
   * ranging from 0 to 65535.
   */
  ltv: bigint;
  healthFactor: bigint;
}
