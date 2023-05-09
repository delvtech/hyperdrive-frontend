import { ReactElement, ReactNode } from "react";
import { Address, useAccount, useToken } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AssetIcon } from "src/ui/token/AssetIcon";
import { DebtDetailsSection } from "./DebtDetailsSection";

export function CoverageTable(): ReactElement {
  const { address: account } = useAccount();
  const { userLoans = [] } = useUserLoans(account);

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-[180px_150px_160px_180px_64px] gap-4"
      bodyRowClassName="group grid-cols-[180px_150px_160px_180px_64px] gap-4 h-20"
      emptyTableElement={<span className="text-white">No borrows found</span>}
      cols={[
        {
          cell: <span className="text-secondaryText">Asset</span>,
        },
        {
          cell: (
            <span
              className="text-secondaryText"
              title="The total amount of the asset you are borrowing"
            >
              Total Debt
            </span>
          ),
        },
        {
          cell: (
            <span
              className="text-secondaryText"
              title="The portion of your total debt that is covered by fixed rate interest"
            >
              Fixed Rate Debt
            </span>
          ),
        },
        {
          cell: (
            <span
              className="text-secondaryText"
              title="The portion of your total debt currently exposed to variable rate interest"
            >
              Variable Rate Debt
            </span>
          ),
        },
        {
          // Empty cell for arrow icon
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
          detailsElement: <DebtDetailsSection />,
          cells: [
            <BorrowedAssetCell
              key="asset"
              borrowedAssetAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="totalDebt"
              amount={borrowedAmount}
              secondaryText="$4,602.13"
              tokenAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="fixedRateDebt"
              amount={0n}
              secondaryText="-"
              tokenAddress={borrowTokenAddress}
            />,
            <AmountCell
              key="variableRateDebt"
              amount={borrowedAmount}
              secondaryText="1.5% APY"
              tokenAddress={borrowTokenAddress}
            />,
            <ExpandIconCell key="expand" />,
          ],
        }),
      )}
    />
  );
}

function ExpandIconCell(): ReactElement {
  return (
    <div className="flex h-full shrink-0 items-center justify-center">
      <div>
        <img
          src="/caret-down.svg"
          className="transition duration-300 ui-open:rotate-0 ui-not-open:-rotate-90"
        />
      </div>
    </div>
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
