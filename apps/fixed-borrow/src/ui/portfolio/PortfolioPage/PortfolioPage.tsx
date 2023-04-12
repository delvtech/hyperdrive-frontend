import { ReactElement } from "react";
import { useAccount } from "wagmi";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";

export function PortfolioPage(): ReactElement {
  const { address: account } = useAccount();

  const { userLoans } = useUserLoans(account);
  return (
    <div className="flex min-h-[75vh] w-full flex-col items-center justify-center py-[10vh] px-[4vw]">
      <div className="max-w-4xl">
        {userLoans?.map((loan) => {
          return (
            <div key={loan.shortId.toString()}>
              {formatBigInt(loan.borrowedAmount)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
