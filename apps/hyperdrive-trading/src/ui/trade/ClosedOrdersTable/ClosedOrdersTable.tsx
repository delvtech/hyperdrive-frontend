/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { useClosedLongRows } from "src/ui/trade/ClosedOrdersTable/useClosedLongRows";
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
      headingRowClassName="grid-cols-5 text-hyper-blue-200 font-dm-sans text-md [&>*]:p-2"
      bodyRowClassName="grid-cols-5 text-hyper-blue-100 font-dm-sans [&>*]:p-2 items-center"
      cols={["Position", "Size", "Value", "Matures on", "Closed on"]}
      rows={allRows}
    />
  );
}
