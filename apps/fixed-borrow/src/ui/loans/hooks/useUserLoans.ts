import { Hash } from "@wagmi/core";
import { Address } from "wagmi";

interface UserFixedRateLoan {
  txHash: Hash;
  shortId: bigint;
  costOfShort: bigint;
  who: Address;
  collateralTokenAddress: Address;
  collateralDeposited: bigint;
  borrowTokenAddress: Address;
  borrowedAmount: bigint;
}

interface UseUserLoansResult {
  userLoans: UserFixedRateLoan[] | undefined;
  userLoansStatus: "error" | "success" | "loading";
}

export function useUserLoans(account: Address | undefined): UseUserLoansResult {
  // TODO: Implement this not using the fixed borrow action events
  return { userLoans: [], userLoansStatus: "success" };
}
