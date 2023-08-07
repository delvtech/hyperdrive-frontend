/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
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
      bodyRowClassName="grid-cols-5 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
      cols={[
        {
          cell: (
            <span
              className="daisy-tooltip w-full border text-start"
              data-tip="User's chosen role in Hyperdrive: holding discounted bonds, short-selling bonds, or providing liquidity for trades."
            >
              Position
            </span>
          ),
        },
        {
          cell: (
            <span
              className="daisy-tooltip flex border text-start"
              data-tip="The bonds?"
            >
              Bonds
            </span>
          ),
        },
        { cell: "Amount paid" },
        { cell: "Value" },
        { cell: "Matures on" },
      ]}
      // cols={["Position", "Bonds", "Amount paid", "Value", "Matures on", ""]}
      rows={openLongRows}
      showSkeleton={openLongRowsStatus === "loading"}
    />
  );
}
