import { ReactElement } from "react";
import { Address, useAccount, useToken } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";
import { Hash } from "@wagmi/core";
import { useTransactionTimestamp } from "src/ui/base/transactions/useTransactionTimestamp/useTransactionTimestamp";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AssetIcon } from "src/ui/token/AssetIcon";

export function PortfolioPage(): ReactElement {
  const { address: account } = useAccount();

  const { userLoans = [] } = useUserLoans(account);
  return (
    <div className="flex flex-col gap-3">
      <h4 className="h4 font-bold text-white">Positions</h4>
      <div className="max-w-4xl">
        <SortableGridTable
          headingRowClassName="grid-cols-[1fr_1fr_1fr_1fr] gap-10"
          bodyRowClassName="group grid-cols-[1fr_1fr_1fr_1fr] gap-10"
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
          rows={[...userLoans, ...userLoans, ...userLoans].map(
            (
              {
                txHash,
                collateralDeposited,
                collateralTokenAddress,
                borrowedAmount,
                borrowTokenAddress,
              },
              i,
            ) => ({
              className: "even:bg-inputBg",
              cells: [
                <DateOpenedCell
                  key={`dateopened-${txHash}-${i}`}
                  txHash={txHash}
                />,
                // TODO: Implement these
                <DateOpenedCell key={`rate-${txHash}-${i}`} txHash={txHash} />,
                <AmountCell
                  key={`collateral-${txHash}-${i}`}
                  amount={collateralDeposited}
                  tokenAddress={collateralTokenAddress}
                />,
                <AmountCell
                  key={`debt-${txHash}-${i}`}
                  amount={borrowedAmount}
                  tokenAddress={borrowTokenAddress}
                />,
              ],
            }),
          )}
        />
      </div>
    </div>
  );
}

function DateOpenedCell({ txHash }: { txHash: Hash }): ReactElement {
  const { timestamp } = useTransactionTimestamp(txHash);
  return (
    <span className="text-lg text-white">
      {timestamp ? new Date(timestamp).toDateString() : ""}
    </span>
  );
}

function AmountCell({
  amount,
  tokenAddress,
}: {
  amount: bigint;
  tokenAddress: Address;
}): ReactElement {
  const { data: tokenMetadata } = useToken({ address: tokenAddress });
  const amountLabel = formatBalance(
    formatBigInt(amount, tokenMetadata?.decimals),
  );
  return (
    <div className="flex flex-col ">
      <span className="inline-flex items-center gap-1 text-h6 text-white">
        <AssetIcon size="sm" address={tokenAddress} /> {amountLabel}{" "}
        {tokenMetadata?.symbol}
      </span>
      <span className="leading-sm text-secondaryText">$2,302.13</span>
    </div>
  );
}
