import {
  AaveFixedBorrowActionABI,
  HyperdriveGoerliAddresses,
} from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Contract } from "ethers";
import { Address, useContract, useProvider } from "wagmi";

interface UseUserLoansResult {
  userLoans:
    | {
        shortId: bigint;
        costOfShort: bigint;
        who: string;
        collateralTokenAddress: string;
        collateralDeposited: bigint;
        borrowTokenAddress: string;
        borrowedAmount: bigint;
      }[]
    | undefined;
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
            shortId: userLoan.args?.shortId.toBigInt() as bigint,
            costOfShort: userLoan.args?.costOfShort.toBigInt() as bigint,
            who: userLoan.args?.who as string,
            collateralTokenAddress: userLoan.args?.collateralToken as string,
            collateralDeposited:
              userLoan.args?.collateralDeposited.toBigInt() as bigint,
            borrowTokenAddress: userLoan.args?.borrowToken as string,
            borrowedAmount: userLoan.args?.borrowAmount.toBigInt() as bigint,
          }));
        }
      : undefined,
  });

  return { userLoans, userLoansStatus };
}
