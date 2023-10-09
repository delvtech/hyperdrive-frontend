import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Hyperdrive } from "src/appconfig/types";

type AssetType = "LP" | "LONG" | "SHORT" | "WITHDRAWAL_SHARE";
type TransactionDataType = {
  // Columns to have in the table
  // Which market is it in?
  // Type of transaction
  // Value of transaction
  // Price of bond at open
  // Current price of bond or closed price
  // Account
  // Date of transaction
  // Do we incude open and closed positions?
  type: string;
  value: bigint;
  account: string;
};
interface Props<D extends TransactionDataType> {
  data: D[];
  //   columns: TableOptions<D>["columns"];
  isLoading?: boolean;
}

type TransactionColumn = {
  type: string;
  value: bigint;
  account: string;
};

const columnHelper = createColumnHelper<TransactionColumn>();
const columns = [
  columnHelper.accessor("type", {
    header: "Type",
    cell: (type) => type.getValue(),
  }),
  columnHelper.accessor("value", {
    header: "Value",
    cell: (value) => value.getValue(),
  }),
  columnHelper.accessor("account", {
    header: "Account",
    cell: (account) => account.getValue(),
  }),
];
export function TransactionTable({
  //   columns,
  hyperdrive,
  data,
}: {
  hyperdrive: Hyperdrive;
  data: any;
}): JSX.Element {
  // memoize the data
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="daisy-table">
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              console.log("cell", cell.getValue());
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
