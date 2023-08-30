/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  CellWithTooltip,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { useOpenLongRows } from "src/ui/portfolio/OpenLongsTable/useOpenLongRows";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenLongsTable({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { openLongRows = [], openLongRowsStatus } = useOpenLongRows({
    account,
    hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-start text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
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
              tooltip={`The amount of ${hyperdrive.baseToken.name} you can redeem this position for at the end of the term.`}
              content="Value at maturity"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Profit/Loss"
              tooltip="Current profit/loss of your open position."
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Matures on"
              tooltip="Date at which the position matures and can be settled by the trader."
            />
          ),
        },
      ]}
      // cols={["Position", "Bonds", "Amount paid", "Value", "Matures on", ""]}
      rows={openLongRows}
      showSkeleton={openLongRowsStatus === "loading"}
    />
  );
}
