import { ReactElement } from "react";
import { useAccount } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";
import { Hash } from "@wagmi/core";
import { useTransactionTimestamp } from "src/ui/base/transactions/useTransactionTimestamp/useTransactionTimestamp";

export function PortfolioPage(): ReactElement {
  const { address: account } = useAccount();

  const { userLoans = [] } = useUserLoans(account);
  return (
    <div className="flex flex-col gap-3">
      <h4 className="h4 font-bold text-white">Positions</h4>
      <div className="max-w-4xl">
        <SortableGridTable
          headingRowClassName="grid-cols-[1fr_1fr_1fr_1fr]"
          bodyRowClassName="group grid-cols-[1fr_1fr_1fr_1fr]"
          emptyTableElement={<span className="text-white">No loans found</span>}
          cols={[
            {
              cell: <span className="text-secondaryText">Date opened</span>,
              sortKey: "openDate",
            },
            {
              cell: <span className="text-secondaryText">Rate</span>,
              sortKey: "votingPower",
            },
            {
              cell: <span className="text-secondaryText">Collateral</span>,
              sortKey: "collateralAmount",
            },
            {
              cell: <span className="text-secondaryText">Debt</span>,
              sortKey: "debtAmount",
            },
          ]}
          rows={userLoans.map(({ txHash }) => ({
            className: "even:bg-inputBg",
            cells: [
              <DateOpened key={`dateopened-xHash`} txHash={txHash} />,
              // TODO: Implement these
              <DateOpened key={`rate-${txHash}`} txHash={txHash} />,
              <DateOpened key={`collateral-${txHash}`} txHash={txHash} />,
              <DateOpened key={`debt-${txHash}`} txHash={txHash} />,
            ],
          }))}
        />
      </div>
    </div>
  );
}

function DateOpened({ txHash }: { txHash: Hash }): ReactElement {
  const { timestamp } = useTransactionTimestamp(txHash);
  return (
    <span className="text-lg text-white">
      {timestamp ? new Date(timestamp).toDateString() : ""}
    </span>
  );
}
