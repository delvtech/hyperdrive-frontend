import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
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
    enableSorting: false,
    enableColumnFilter: true,
    header: () => null,
    filterFn: (row, _, filterValue) => {
      const type = row.getValue("type") as string;
      if (filterValue === "All") {
        return true;
      }
      if (filterValue === "Long") {
        return ["Buy", "Sell"].includes(type);
      }
      if (filterValue === "Short") {
        return ["Open Short", "Close Short"].includes(type);
      }
      return true;
    },
  }),
  columnHelper.accessor("value", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (value) => value.getValue(),
    enableColumnFilter: false,
    sortingFn: (a, b) => {
      const aValue = Number(a?.getValue("value"));
      const bValue = Number(b?.getValue("value"));
      return aValue - bValue;
    },
  }),
  columnHelper.accessor("account", {
    header: "Account",
    enableColumnFilter: false,
    cell: (account) => formatAddress(account.getValue()),
  }),
  columnHelper.accessor("blockNumber", {
    header: "Block number",
    enableColumnFilter: false,
    cell: (blockNumber) => blockNumber.getValue()?.toString(),
  }),
];
export function TransactionTable({
  hyperdrive,
  data: transactionData,
}: {
  hyperdrive: Hyperdrive;
  data: Transaction[];
}): JSX.Element {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: transactionData || [],
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    enableColumnFilters: true,
    enableFilters: true,
    getFilteredRowModel: getFilteredRowModel(),
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
                <th className="text-lg font-thin" key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex gap-2 items-center"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: <ChevronUpIcon height={15} />,
                          desc: <ChevronDownIcon height={15} />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {header.column.getCanFilter() ? (
                        <div className="flex gap-2">
                          {["All", "Long", "Short"].map((filter) => (
                            <button
                              key={filter}
                              onClick={() =>
                                header.column.setFilterValue(filter)
                              }
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              className="h-16 grid-cols-4 items-center text-sm even:bg-base-300/5 md:text-h6"
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
