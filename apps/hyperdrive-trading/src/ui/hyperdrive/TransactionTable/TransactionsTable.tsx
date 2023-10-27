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
import * as dnum from "dnum";
import { useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { TransactionData } from "src/ui/hyperdrive/TransactionTable/useTransactionData";
import { Address } from "viem";

export interface Transaction {
  type: string;
  value: string;
  account: Address;
  blockNumber: bigint | undefined;
}

const eventMap = {
  OpenLong: "Open Long",
  OpenShort: "Open Short",
  CloseLong: "Close Long",
  CloseShort: "Close Short",
  AddLiquidity: "Add Liquidity",
  RemoveLiquidity: "Remove Liquidity",
  RedeemWithdrawalShares: "Redeem Withdrawal Shares",
} as const;
type EventName = keyof typeof eventMap;

const columnHelper = createColumnHelper<TransactionData>();
const getColumns = (hyperdrive: Hyperdrive) => [
  columnHelper.accessor("eventName", {
    id: "eventName",
    enableSorting: false,
    enableColumnFilter: true,
    header: () => null,
    cell: ({ getValue }) => eventMap[getValue() as EventName] || getValue(),
    filterFn: (row, _, filterValue) => {
      const type = row.getValue("eventName") as string;
      const filters = {
        All: true,
        Longs: ["OpenLong", "CloseLong"].includes(type),
        Shorts: ["OpenShort", "CloseShort"].includes(type),
        LP: [
          "AddLiquidity",
          "RemoveLiquidity",
          "RedeemWithdrawalShares",
        ].includes(type),
      } as const;
      return filters[filterValue as keyof typeof filters];
    },
  }),
  columnHelper.accessor("bondAmount", {
    id: "bondAmount",
    header: `Size`,
    cell: ({ getValue, row }) => {
      const bondAmount = getValue();
      const size = dnum.format(
        [
          row.original.eventName === "OpenShort" ||
          row.original.eventName === "CloseShort"
            ? bondAmount || 0n
            : row.original.baseAmount || 0n,
          18,
        ],
        { digits: 2 },
      );
      const isLpRow =
        row.getValue("eventName") === "Add Liquidity" ||
        row.getValue("eventName") === "Remove Liquidity" ||
        row.getValue("eventName") === "Redeem Withdrawal Shares";
      return (
        <span>
          {size}{" "}
          {isLpRow
            ? hyperdrive.baseToken.symbol
            : `hy${hyperdrive.baseToken.symbol}`}
        </span>
      );
    },
    enableColumnFilter: false,
    sortingFn: (a, b) =>
      Number(a?.getValue("value") ?? 0) - Number(b?.getValue("value") ?? 0),
  }),
  columnHelper.accessor("trader", {
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
  data: TransactionData[];
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
                <th className="sticky top-0 bg-base-100" key={header.id}>
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
                          {["All", "Longs", "Shorts", "LP"].map((filter) => (
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
