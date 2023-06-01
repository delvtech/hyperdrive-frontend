// See: https://github.com/delvtech/hyperdrive/blob/main/addresses.json
export const HyperdriveGoerliAddresses = {
  makerDsrHyperdrive: "0xB88DC1827De0baf3BD0e27A731fa5322aDdA710b",
  // fixed borrow action is deployed with a reference to the makerDsrHyperdrive
  // https://github.com/delvtech/hyperdrive/blob/main/contracts/src/actions/AaveFixedBorrow.sol
  aaveFixedBorrowAction: "0xdD029B122C15a313B8599348a2c472fe24541ECB",
  hyperdriveMath: "0x2D5CC1a6de5863A3E24EB48a758FE20d9253b3B2",
} as const;
