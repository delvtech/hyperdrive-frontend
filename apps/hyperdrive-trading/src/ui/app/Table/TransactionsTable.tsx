import {
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";

export const MOCK_DATA = [
  {
    type: "LP",
    value: 100n,
    account: "0x123",
  },
  {
    type: "LONG",
    value: 100n,
    account: "0x124",
  },
];

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
  columns: TableOptions<D>["columns"];
  isLoading?: boolean;
}

export function TransactionTable<D extends TransactionDataType>({
  columns,
  data,
}: Props<D>): JSX.Element {
  const tableInstance = useReactTable<D>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
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
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
