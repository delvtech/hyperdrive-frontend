import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Hyperdrive } from "src/appconfig/types";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { Address } from "viem";

export type Transaction = {
  type: string;
  value: string;
  account: Address;
  time: string;
  blockNumber: bigint | undefined;
};

const columnHelper = createColumnHelper<Transaction>();
const columns = (hyperdrive: Hyperdrive) => [
  columnHelper.accessor("type", {
    header: "Type",
    cell: (type) => type.getValue(),
  }),
  columnHelper.accessor("value", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (value) => value.getValue(),
    sortingFn: (a, b) => {
      const aValue = Number(a?.getValue("value"));
      const bValue = Number(b?.getValue("value"));
      return aValue - bValue;
    },
  }),
  columnHelper.accessor("account", {
    header: "Account",
    cell: (account) => formatAddress(account.getValue()),
  }),
  columnHelper.accessor("blockNumber", {
    header: "Block number",
    cell: (blockNumber) => blockNumber.getValue()?.toString(),
  }),
];
export function TransactionTable({
  hyperdrive,
  data,
}: {
  hyperdrive: Hyperdrive;
  data: Transaction[];
}): JSX.Element {
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-lg font-thin text-neutral-content"
                  key={header.id}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex items-center gap-1"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <ChevronUpIcon height={20} />,
                        desc: <ChevronDownIcon height={20} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
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
