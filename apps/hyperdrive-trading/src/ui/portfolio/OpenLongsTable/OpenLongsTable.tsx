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
      headingRowClassName="grid-cols-6 text-start text-neutral-content"
      bodyRowClassName="grid-cols-5 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
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
              content="Amount Paid"
              tooltip="Capital expended to initiate a position, either long, short, or as an LP."
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
              content="Matures on"
              tooltip="Date when bonds can be cashed in at full value."
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
