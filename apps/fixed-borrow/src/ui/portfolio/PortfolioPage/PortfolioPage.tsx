import { ReactElement } from "react";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { PositionsTable } from "src/ui/portfolio/PositionsTable/PositionsTable";
import { useAccount } from "wagmi";

export function PortfolioPage(): ReactElement {
  const { address: account } = useAccount();
  const { userAccountData } = useUserAccountData(account);

  let loanToValueStat = "";
  if (userAccountData) {
    // TODO: Is this formatting correct?
    loanToValueStat = `${formatBalance(Number(userAccountData.ltv), 4)}%`;
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-3">
        <h4 className="font-bold text-white">Overview</h4>
        <div className="max-w-4xl">
          <div className="flex gap-8 ">
            <StatWell
              label="Collateral"
              stat={`$${formatBalance(
                formatBigInt(userAccountData?.totalCollateralBase || 0n, 8),
                2,
              )}`}
            />
            <StatWell
              label="Total debt"
              stat={`$${formatBalance(
                formatBigInt(userAccountData?.totalDebtBase || 0n, 8),
                2,
              )}`}
            />
            <StatWell
              label="Borrow limit"
              stat={`$${formatBalance(
                formatBigInt(userAccountData?.availableBorrowBase || 0n, 8),
                2,
              )}`}
            />
            <StatWell label="Loan to value" stat={loanToValueStat} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="font-bold text-white">Positions</h4>
        <div className="max-w-4xl">
          <PositionsTable />
        </div>
      </div>
    </div>
  );
}
