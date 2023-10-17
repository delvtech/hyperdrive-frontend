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
import classNames from "classnames";
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
const getColumns = (hyperdrive: Hyperdrive) => [
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
        return ["Long", "Sell"].includes(type);
      }
      if (filterValue === "Short") {
        return ["Open Short", "Close Short"].includes(type);
      }
      if (filterValue === "LP") {
        return [
          "Add Liquidity",
          "Remove Liquidity",
          "Redeem Withdrawal Shares",
        ].includes(type);
      }
      return true;
    },
  }),
  columnHelper.accessor("value", {
    header: `Size`,
    cell: ({ getValue, row }) => {
      const size = getValue();
      const isLpRow =
        row.getValue("type") === "Add Liquidity" ||
        row.getValue("type") === "Remove Liquidity" ||
        row.getValue("type") === "Redeem Withdrawal Shares";
      return (
        <span>
          {size}{" "}
          {isLpRow
            ? hyperdrive.baseToken.name
            : `hy${hyperdrive.baseToken.symbol}`}
        </span>
      );
    },
    enableColumnFilter: false,
    sortingFn: (a, b) =>
      Number(a?.getValue("value") ?? 0) - Number(b?.getValue("value") ?? 0),
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
    columns: getColumns(hyperdrive),
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
      <table className="daisy-table-zebra daisy-table daisy-table-lg mt-2">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        className={classNames({
                          "flex cursor-pointer select-none items-center gap-2":
                            header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
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
                        <div className="daisy-tabs-lg">
                          {["All", "Long", "Short", "LP"].map((filter) => (
                            <a
                              key={filter}
                              className={`${
                                header.column.getFilterValue() !== filter
                                  ? "daisy-tab text-lg font-normal"
                                  : "daisy-tab daisy-tab-active text-lg"
                              }`}
                              onClick={() =>
                                header.column.setFilterValue(filter)
                              }
                            >
                              {filter}
                            </a>
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
              className="h-16 grid-cols-4 items-center text-sm md:text-h6"
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
