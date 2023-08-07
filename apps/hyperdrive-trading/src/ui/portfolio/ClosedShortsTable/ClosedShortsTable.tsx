/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  CellWithTooltip,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { useClosedShortRows } from "src/ui/portfolio/ClosedShortsTable/useClosedShortRows";
import { useAccount } from "wagmi";

interface ClosedShortsTableProps {
  hyperdrive: Hyperdrive;
}

export function ClosedShortsTable({
  hyperdrive,
}: ClosedShortsTableProps): ReactElement {
  const { address: account } = useAccount();
  const { closedShortRows: closedLongRows = [], closedShortRowsStatus } =
    useClosedShortRows({
      account,
      hyperdrive: hyperdrive,
    });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-accent/5 h-16"
      cols={[
        {
          cell: (
            <CellWithTooltip
              tooltip="User's chosen role in Hyperdrive: holding discounted bonds, short-selling bonds, or providing liquidity for trades."
              content="Position"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="Instruments in Hyperdrive representing a fixed return. Purchased at a discount and earn interest until maturity."
              content="Bonds"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Value"
              tooltip="Present worth of your position in the market."
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              content="Matures On"
              tooltip="Date when the position matures and is settled."
            />
          ),
        },

        {
          cell: (
            <CellWithTooltip
              content="Closed On"
              tooltip="Date when the position was settled or exited."
            />
          ),
        },
      ]}
      rows={closedLongRows}
      showSkeleton={closedShortRowsStatus === "loading"}
    />
  );
}
