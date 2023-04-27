import { ReactElement } from "react";
import { Address, useAccount, useToken } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { useUserLoans } from "src/ui/loans/hooks/useUserLoans";
import { Hash } from "@wagmi/core";
import { useTransactionTimestamp } from "src/ui/base/transactions/useTransactionTimestamp/useTransactionTimestamp";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AssetIcon } from "src/ui/token/AssetIcon";

export function PositionsTable(): ReactElement {
  const { address: account } = useAccount();
  const { userLoans = [] } = useUserLoans(account);

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-[1fr_1fr_1fr_173px_64px] gap-10"
      bodyRowClassName="group grid-cols-[1fr_1fr_1fr_173px_64px] gap-10"
      emptyTableElement={<span className="text-white">No borrows found</span>}
      cols={[
        {
          cell: <span className="text-secondaryText">Asset</span>,
          sortKey: "asset",
        },
        {
          cell: <span className="text-secondaryText">Total Debt</span>,
          sortKey: "totalDebt",
        },
        {
          cell: <span className="text-secondaryText">Fixed Rate Debt</span>,
          sortKey: "fixedRateDebt",
        },
        {
          cell: <span className="text-secondaryText">Variable Rate Debt</span>,
          sortKey: "variableRateDebt",
        },
      ]}
      rows={userLoans.map(
        (
          {
            txHash,
            shortId,
            collateralDeposited,
            collateralTokenAddress,
            borrowedAmount,
            borrowTokenAddress,
          },
          i,
        ) => ({
          cells: [
            <BorrowedAssetCell
              key={`asset-${txHash}-${i}`}
              borrowedAssetAddress={borrowTokenAddress}
            />,
            // TODO: Implement this
            <RateCell
              key={`rate-${txHash}-${i}`}
              shortId={shortId}
              txHash={txHash}
            />,
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
            <div
              key={`expand-${txHash}-${i}`}
              className="flex shrink-0 items-center"
            >
              <img src="/caret-down.svg" />
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

const SIX_MONTHS_IN_MILLISECONDS = 15778800000;
function RateCell({ txHash }: { shortId: bigint; txHash: Hash }): ReactElement {
  const { timestamp } = useTransactionTimestamp(txHash);
  return (
    <div className="flex flex-col ">
      <span className="inline-flex items-center gap-2 text-h6 text-white">
        <span>1.50%</span>
        <span className="text-success">Fixed</span>
      </span>
      <span className="leading-sm text-secondaryText">
        {timestamp
          ? `until ${new Date(
              timestamp + SIX_MONTHS_IN_MILLISECONDS,
            ).toDateString()}`
          : ""}
      </span>
    </div>
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
