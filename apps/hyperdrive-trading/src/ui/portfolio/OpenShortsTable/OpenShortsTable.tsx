/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { useOpenShortRows } from "src/ui/portfolio/OpenShortsTable/useOpenShortRows";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenShortsTable({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { openShortRows = [] } = useOpenShortRows({
    account,
    hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-neutral-content mx-2"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16 mx-2"
      // Blank col added for actions
      cols={["Position", "Balance", "Value", "Matures on", ""]}
      rows={openShortRows}
    />
  );
}
