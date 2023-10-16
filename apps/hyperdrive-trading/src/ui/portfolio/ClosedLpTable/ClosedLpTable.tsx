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
            <span
              key="type"
              className="font-semibold uppercase italic text-primary"
            >
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
              })} ${hyperdrive.baseToken.symbol}`}
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
            0
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
      bodyRowClassName="grid-cols-5 items-center text-sm md:text-h6 even:bg-base-300/5 h-16"
      cols={[
        {
          cell: (
            <CellWithTooltip
              tooltip="Long and Short positions have a maturity date based on the open date and position duration of the pool whereas LP positions can remain active indefinitely (until closed by the LPer)."
              content="Position"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="LP's proportionate stake in the liquidity pool."
              content="Shares"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content={`Amount received (${hyperdrive.baseToken.symbol})`}
              tooltip="Total assets collected upon closing the position."
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Withdrawal shares"
              tooltip="Portion of LP's stake withdrawn from the pool."
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
