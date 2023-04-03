// See: https://github.com/element-fi/hyperdrive/blob/main/addresses.json
export const HyperdriveGoerliAddresses = {
  makerDsrHyperdrive: "0xB311B825171AF5A60d69aAD590B857B1E5ed23a2",
  // fixed borrow action is deployed with a reference to the makerDsrHyperdrive
  // https://github.com/element-fi/hyperdrive/blob/main/contracts/src/actions/AaveFixedBorrow.sol
  aaveFixedBorrowAction: "0x42d211e3B53E460D7122464Cd888d83310c455A5",
} as const;
