/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { useClosedLongRows } from "src/ui/portfolio/ClosedLongsTable/useClosedLongRows";
import { useAccount } from "wagmi";

interface ClosedLongsTableProps {
  hyperdrive: Hyperdrive;
}

export function ClosedLongsTable({
  hyperdrive,
}: ClosedLongsTableProps): ReactElement {
  const { address: account } = useAccount();
  const { closedLongRows = [], closedLongRowsStatus } = useClosedLongRows({
    account,
    hyperdrive: hyperdrive,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16 "
      cols={["Position", "Bonds", "Value", "Matures on", "Closed on"]}
      rows={closedLongRows}
      isFetchingData={closedLongRowsStatus === "loading"}
    />
  );
}
