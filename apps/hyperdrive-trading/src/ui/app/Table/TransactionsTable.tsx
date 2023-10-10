import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export type TransactionColumn = {
  type: string;
  value: string;
  account: string;
  time: string;
  blockNumber: string;
};

const columnHelper = createColumnHelper<TransactionColumn>();
const columns = [
  columnHelper.accessor("type", {
    header: "Type",
    cell: (type) => type.getValue(),
  }),
  columnHelper.accessor("value", {
    header: "Size",
    cell: (value) => value.getValue(),
  }),
  columnHelper.accessor("account", {
    header: "Account",
    cell: (account) => account.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "Matures On",
    cell: (date) => date.getValue(),
  }),
  columnHelper.accessor("blockNumber", {
    header: "Block Number",
    cell: (blockNumber) => blockNumber.getValue(),
  }),
];
export function TransactionTable({
  data,
}: {
  data: TransactionColumn[];
}): JSX.Element {
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <span className=" text-h4 font-normal text-neutral-content">
        Transactions
      </span>
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-lg font-thin text-neutral-content"
                  key={header.id}
                >
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
            <tr
              className="h-16 grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => {
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
    </div>
  );
}
