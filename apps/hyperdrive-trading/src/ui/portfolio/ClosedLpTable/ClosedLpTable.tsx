import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useClosedLpShares } from "src/ui/hyperdrive/lp/hooks/useClosedLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: Hyperdrive;
}

export function ClosedLpTable({
  hyperdrive,
}: ClosedLpTablePRops): ReactElement {
  const { address: account } = useAccount();

  const { closedLpShares } = useClosedLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  // TODO: make a useClosedWithdrawalShares hook
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const rows: Row[] = [];
  if (closedLpShares) {
    rows.push(
      ...closedLpShares.map(
        ({ lpAmount, baseAmount, closedTimestamp, withdrawalShareAmount }) => [
          <span
            key="type"
            className="font-semibold uppercase italic text-primary"
          >
            LP
          </span>,
          <span key="shares" className="italic">
            {formatBalance(
              formatUnits(
                lpAmount,
                (hyperdrive as Hyperdrive).baseToken.decimals,
              ),
            )}
          </span>,
          <span key="value" className="italic">
            {`${formatBalance(
              formatUnits(baseAmount, hyperdrive.baseToken.decimals),
            )} ${hyperdrive.baseToken.symbol}`}
          </span>,
          <span key="withdrawalShares" className="italic">
            {`${formatBalance(
              formatUnits(withdrawalShareAmount, hyperdrive.baseToken.decimals),
            )}`}
          </span>,
          <span key="closed-on" className="italic">
            {new Date(Number(closedTimestamp * 1000n)).toLocaleDateString()}
          </span>,
        ],
      ),
    );
  }

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-start text-neutral-content"
      bodyRowClassName="grid-cols-5 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      cols={[
        "Position",
        "Shares",
        "Value Received",
        "Withdrawal shares",
        "Closed on",
      ]}
      rows={rows}
    />
  );
}
