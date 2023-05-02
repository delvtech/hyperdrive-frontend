import { ReactElement, ReactNode } from "react";
import { Address, useAccount, useToken } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";
import { Hash } from "@wagmi/core";
import { useTransactionTimestamp } from "src/ui/base/transactions/useTransactionTimestamp/useTransactionTimestamp";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AssetIcon } from "src/ui/token/AssetIcon";
import { Tabs } from "src/ui/base/Tabs/Tabs";

export function PositionsTable(): ReactElement {
  const { address: account } = useAccount();
  const { userLoans = [] } = useUserLoans(account);

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-[1fr_150px_160px_180px_64px] gap-4"
      bodyRowClassName="group grid-cols-[1fr_150px_160px_180px_64px] gap-4"
      emptyTableElement={<span className="text-white">No borrows found</span>}
      cols={[
        {
          cell: <span className="text-secondaryText">Asset</span>,
        },
        {
          cell: <span className="text-secondaryText">Total Debt</span>,
        },
        {
          cell: <span className="text-secondaryText">Fixed Rate Debt</span>,
        },
        {
          cell: <span className="text-secondaryText">Variable Rate Debt</span>,
        },
        {
          cell: <span className="text-secondaryText" />,
        },
      ]}
      rows={userLoans.map(
        ({
          txHash,
          shortId,
          collateralDeposited,
          collateralTokenAddress,
          borrowedAmount,
          borrowTokenAddress,
        }) => ({
          detailsElement: (
            <div className="flex w-full flex-col gap-7 p-8 text-white">
              <Tabs
                tabs={[
                  {
                    label: "Debt Coverage",
                    variant: "sun",
                  },
                  {
                    label: "Uncovered Debt",
                    variant: "pinkSlip",
                  },
                ]}
                activeTab={0 /* TODO: add a useState to make tabs controlled */}
              />
              <p className="text-h6">
                This table shows all the shorts that have been purchased and how
                much debt they cover. Check out our docs to learn more about how
                fixed rate borrowing works.j
              </p>
              {/* TODO: Add table here */}
            </div>
          ),
          cells: [
            <BorrowedAssetCell
              key="asset"
              borrowedAssetAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="totalDebt"
              amount={borrowedAmount}
              secondaryText="$2,302.13"
              tokenAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="fixedRateDebt"
              amount={borrowedAmount}
              secondaryText="1.5% APY"
              tokenAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="variableRateDebt"
              amount={borrowedAmount}
              secondaryText="1.5% APY"
              tokenAddress={borrowTokenAddress}
            />,
            <div
              key="expand"
              className="flex h-full shrink-0 items-center justify-center"
            >
              <div>
                <img
                  src="/caret-down.svg"
                  className="transition duration-300 ui-open:rotate-0 ui-not-open:-rotate-90"
                />
              </div>
            </div>,
          ],
        }),
      )}
    />
  );
}

function BorrowedAssetCell({
  borrowedAssetAddress,
}: {
  borrowedAssetAddress: Address;
}): ReactElement {
  const { data: tokenMetadata } = useToken({ address: borrowedAssetAddress });
  return (
    <div className="flex items-center gap-2">
      <AssetIcon size="lg" address={borrowedAssetAddress} />
      <div className="flex flex-col ">
        <span className="inline-flex items-center gap-1 text-h6 text-white">
          {tokenMetadata?.symbol}
        </span>
        <span className="leading-sm text-secondaryText">$1.00</span>
      </div>
    </div>
  );
}

function AmountCell({
  amount,
  tokenAddress,
  secondaryText,
}: {
  amount: bigint;
  tokenAddress: Address;
  secondaryText: ReactNode;
}): ReactElement {
  const { data: tokenMetadata } = useToken({ address: tokenAddress });
  const amountLabel = formatBalance(
    formatBigInt(amount, tokenMetadata?.decimals),
  );
  return (
    <div className="flex flex-col">
      <span className="inline-flex items-center gap-1 text-h6 text-white">
        {amountLabel} {tokenMetadata?.symbol}
      </span>
      <span className="flex leading-sm text-secondaryText">
        {secondaryText}
      </span>
    </div>
  );
}
