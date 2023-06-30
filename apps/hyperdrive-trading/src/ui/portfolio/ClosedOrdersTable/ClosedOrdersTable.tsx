/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { useClosedLongRows } from "src/ui/portfolio/ClosedOrdersTable/useClosedLongRows";
import { useAccount } from "wagmi";

interface ClosedOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function ClosedOrdersTable({
  hyperdrive,
}: ClosedOrdersTableProps): ReactElement {
  const { address: account } = useAccount();
  const { closedLongRows = [] } = useClosedLongRows({
    account,
    hyperdrive: hyperdrive,
  });

  // TODO: Add useOpenShortRows hook

  const allRows = [...closedLongRows];

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-5 text-neutral-content"
      bodyRowClassName="grid-cols-5 text-base-content items-center text-h6 even:bg-base-300/50 h-16"
      cols={["Position", "Balance", "Value", "Matures on", "Closed on"]}
      rows={allRows}
    />
  );
}
