import { ReactElement } from "react";
import { useAccount } from "wagmi";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";

export function PortfolioPage(): ReactElement {
  const { address: account } = useAccount();

  const { userLoans } = useUserLoans(account);
  return (
    <div className="flex flex-col gap-3">
      <h4 className="h4 font-bold text-white">Positions</h4>
      <div>
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
