import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  CellWithTooltip,
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useClosedLpShares } from "src/ui/hyperdrive/lp/hooks/useClosedLpShares";
import { useRedeemedWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemedWithdrawalShares";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: Hyperdrive;
}

export function ClosedLpTable({
  hyperdrive,
}: ClosedLpTablePRops): ReactElement {
  const { address: account } = useAccount();

  const { closedLpShares, closedLpSharesStatus } = useClosedLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { redeemedWithdrawalShares, redeemedWithdrawlSharesStatus } =
    useRedeemedWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      account,
    });

  const rows: Row[] = [];
  if (closedLpShares) {
    rows.push(
      ...closedLpShares.map(
        ({ lpAmount, baseAmount, closedTimestamp, withdrawalShareAmount }) => {
          return [
            <span key="type" className="font-semibold uppercase italic">
              LP
            </span>,
            <span key="shares" className="italic">
              {formatBalance({
                balance: lpAmount,
                decimals: hyperdrive.baseToken.decimals,
              })}
            </span>,
            <span key="value" className="italic">
              {`${formatBalance({
                balance: baseAmount,
                decimals: hyperdrive.baseToken.decimals,
              })}`}
            </span>,
            <span key="withdrawalShares" className="italic">
              {`${formatBalance({
                balance: withdrawalShareAmount,
                decimals: hyperdrive.baseToken.decimals,
              })}`}
            </span>,
            <span key="closed-on" className="italic">
              {new Date(Number(closedTimestamp * 1000n)).toLocaleDateString()}
            </span>,
          ];
        },
      ),
    );
  }

  if (redeemedWithdrawalShares) {
    rows.push(
      ...redeemedWithdrawalShares.map(
        ({ baseAmount, redeemedTimestamp, withdrawalShareAmount }) => [
          <span key="type" className="font-semibold uppercase italic">
            Withdrawal shares
          </span>,
          <span key="shares" className="italic">
            {`${formatBalance({
              balance: withdrawalShareAmount,
              decimals: hyperdrive.baseToken.decimals,
            })}`}
          </span>,
          <span key="value" className="italic">
            {`${formatBalance({
              balance: baseAmount,
              decimals: hyperdrive.baseToken.decimals,
            })} ${hyperdrive.baseToken.symbol}`}
          </span>,
          <span key="withdrawalShares" className="italic">
            N/A
          </span>,
          <span key="closed-on" className="italic">
            {new Date(Number(redeemedTimestamp * 1000n)).toLocaleDateString()}
          </span>,
        ],
      ),
    );
  }

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-start"
      bodyRowClassName="grid-cols-5 items-center even:bg-base-300/5 h-16"
      cols={[
        {
          cell: (
            <CellWithTooltip
              tooltip="LP Shares and Withdrawal shares"
              content="Position"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="Amount of LP shares or withdrawal shares that were closed"
              content="Shares closed"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content={`Amount received (${hyperdrive.baseToken.symbol})`}
              tooltip={`Total amount of ${hyperdrive.baseToken.symbol} user received  upon closing the position.`}
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Withdrawal shares received"
              tooltip="Shares to claim idle liquidity to completely exit an LP position"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Closed on"
              tooltip=" Date when the position was settled by the trader."
            />
          ),
        },
      ]}
      rows={rows}
      showSkeleton={
        closedLpSharesStatus === "loading" ||
        redeemedWithdrawlSharesStatus === "loading"
      }
    />
  );
}
