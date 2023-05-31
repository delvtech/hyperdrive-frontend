// See: https://github.com/delvtech/hyperdrive/blob/main/addresses.json
export const HyperdriveGoerliAddresses = {
  makerDsrHyperdrive: "0xB88DC1827De0baf3BD0e27A731fa5322aDdA710b",
  // fixed borrow action is deployed with a reference to the makerDsrHyperdrive
  // https://github.com/delvtech/hyperdrive/blob/main/contracts/src/actions/AaveFixedBorrow.sol
  aaveFixedBorrowAction: "0xdD029B122C15a313B8599348a2c472fe24541ECB",
  hyperdriveMath: "0xB2144A34fD0495A75813C76B4380511FB753e44e",
} as const;
