import { Address } from "abitype";

export interface RedeemedWithdrawalShares {
  hyperdriveAddress: Address;
  withdrawalShareAmount: bigint;
  baseAmount: bigint;
  timestamp: bigint;
}
