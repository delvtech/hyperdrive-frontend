/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
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
      cols={["Position", "Bonds", "Value", "Matures on", "Closed on"]}
      rows={closedLongRows}
      isFetchingData={closedShortRowsStatus === "loading"}
    />
  );
}
