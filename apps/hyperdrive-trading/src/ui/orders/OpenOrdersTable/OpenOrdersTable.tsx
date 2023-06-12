/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { useLongRows } from "src/ui/orders/OpenOrdersTable/useLongRows";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenOrdersTable({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { longRows = [] } = useLongRows({
    account,
    hyperdriveAddress: hyperdrive.address,
  });

  const allRows = [...longRows];

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-hyper-blue-200 font-dm-sans text-md [&>*]:p-2"
      bodyRowClassName="grid-cols-4 text-hyper-blue-100 font-dm-sans [&>*]:p-2 items-center"
      // Blank col added for actions
      cols={["Position", "Amount", "Value", "Expiry Date", ""]}
      rows={allRows}
    />
  );
}
