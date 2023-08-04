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

  const { openShortRows = [], openShortRowsStatus } = useOpenShortRows({
    account,
    hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-neutral-content"
      bodyRowClassName="grid-cols-5 text-base-content items-center text-sm md:text-h6 even:bg-accent/5 h-16"
      // Blank col added for actions
      cols={["Position", "Bonds", "Amount paid", "Value", "Matures on", ""]}
      rows={openShortRows}
      isFetchingData={openShortRowsStatus === "loading"}
    />
  );
}
