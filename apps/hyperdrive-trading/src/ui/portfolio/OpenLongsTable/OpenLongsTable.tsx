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

  const { openLongRows = [] } = useOpenLongRows({
    account,
    hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-start text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
      cols={["Position", "Bonds", "Value", "Matures on", ""]}
      rows={openLongRows}
    />
  );
}
