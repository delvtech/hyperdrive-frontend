/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  CellWithTooltip,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { useOpenShortRows } from "src/ui/portfolio/OpenShortsTable/useOpenShortRows";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenShortsTable({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { openShortRows = [], openShortRowsStatus } = useOpenShortRows({
    account,
    hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-accent/5 h-16"
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
              tooltip="Hyperdrive-native instruments with a market-based fixed rate; can be closed early for current market value or held for the full position duration (i.e., term) and subsequently redeemed for the bond’s face value."
              content="Bonds"
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
      rows={openShortRows}
      showSkeleton={openShortRowsStatus === "pending"}
    />
  );
}
