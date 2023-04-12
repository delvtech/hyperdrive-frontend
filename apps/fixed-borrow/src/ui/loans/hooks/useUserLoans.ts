import {
  AaveFixedBorrowActionABI,
  HyperdriveGoerliAddresses,
} from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Hash } from "@wagmi/core";
import { Contract } from "ethers";
import { Address, useProvider } from "wagmi";

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
  const provider = useProvider();
  const aaveFixedBorrowAction = new Contract(
    HyperdriveGoerliAddresses.aaveFixedBorrowAction,
    AaveFixedBorrowActionABI,
    provider,
  );

  const queryEnabled = !!account;

  const { data: userLoans, status: userLoansStatus } = useQuery({
    queryKey: ["user-loans", { account }],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const eventFilter =
            await aaveFixedBorrowAction.filters.SupplyBorrowAndOpenShort(
              null,
              null,
              account,
              null,
              null,
              null,
              null,
            );
          const userLoans = await aaveFixedBorrowAction.queryFilter(
            eventFilter,
          );
          // TODO: remove casting once on viem, which has strong event types
          return userLoans.map((userLoan) => ({
            txHash: userLoan.transactionHash as Hash,
            shortId: userLoan.args?.shortId.toBigInt() as bigint,
            costOfShort: userLoan.args?.costOfShort.toBigInt() as bigint,
            who: userLoan.args?.who as Address,
            collateralTokenAddress: userLoan.args?.collateralToken as Address,
            collateralDeposited:
              userLoan.args?.collateralDeposited.toBigInt() as bigint,
            borrowTokenAddress: userLoan.args?.borrowToken as Address,
            borrowedAmount: userLoan.args?.borrowAmount.toBigInt() as bigint,
          }));
        }
      : undefined,
  });

  return { userLoans, userLoansStatus };
}
