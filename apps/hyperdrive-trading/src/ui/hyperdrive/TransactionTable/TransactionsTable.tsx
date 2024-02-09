import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  ColumnFiltersState,
  Header,
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
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import {
  TransactionData,
  useTransactionData,
} from "src/ui/hyperdrive/TransactionTable/useTransactionData";
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

function FilterSelect({
  header,
}: {
  header: Header<TransactionData, unknown>;
}) {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  if (isTailwindSmallScreen) {
    return (
      <div className="daisy-dropdown flex flex-row rounded border">
        <label tabIndex={0} className="daisy-btn daisy-btn-ghost rounded-btn">
          {(header.column.getFilterValue() as string) || "All"}
          <ChevronDownIcon className="h-4" />
        </label>
        <ul
          tabIndex={0}
          className="daisy-menu daisy-dropdown-content mt-14 rounded-md bg-base-200 p-2 shadow"
        >
          {["All", "Longs", "Shorts", "LP"].map((filter) => (
            <li key={filter} className="daisy-menu-title">
              <a onClick={() => header.column.setFilterValue(filter)}>
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      {["All", "Longs", "Shorts", "LP"].map((filter) => (
        <a
          key={filter}
          className={`${
            header.column.getFilterValue() === filter ||
            (!header.column.getFilterValue() && filter === "All")
              ? "daisy-tab daisy-tab-active text-sm md:text-lg"
              : "daisy-tab text-sm  font-normal opacity-80 hover:opacity-100 md:text-lg"
          }`}
          onClick={() => header.column.setFilterValue(filter)}
        >
          {filter}
        </a>
      ))}
    </div>
  );
}

function formatTransactionTableMobileData(
  row: TransactionData,
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const size = dnum.format(
    [
      row.eventName === "OpenShort" || row.eventName === "CloseShort"
        ? row.bondAmount || 0n
        : row.baseAmount || 0n,
      18,
    ],
    { digits: 2 },
  );

  const isLpRow =
    row.eventName === "AddLiquidity" ||
    row.eventName === "RemoveLiquidity" ||
    row.eventName === "RedeemWithdrawalShares";

  return [
    {
      name: "Event",
      value: eventMap[row.eventName as EventName] || row.eventName,
    },
    {
      name: "Size",
      value: (
        <span>
          {size} {isLpRow ? baseToken.symbol : `hy${baseToken.symbol}`}
        </span>
      ),
    },
    {
      name: "Account",
      value: formatAddress(row.trader),
    },
    {
      name: "Block number",
      value: row.blockNumber?.toString(),
    },
  ];
}

const columnHelper = createColumnHelper<TransactionData>();

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.accessor("eventName", {
      id: "eventName",
      enableSorting: false,
      enableColumnFilter: true,
      header: () => null,
      cell: ({ row }) => {
        const data = formatTransactionTableMobileData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-start gap-1 text-neutral-content">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
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
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatTransactionTableMobileData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-end gap-1">
            {data.map((column) => (
              <li key={column.name}>{column.value}</li>
            ))}
          </ul>
        );
      },
    }),
  ];
}

function getColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
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
            {size} {isLpRow ? baseToken.symbol : `hy${baseToken.symbol}`}
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
}
export function TransactionTable({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): JSX.Element {
  const { data: transactionData } = useTransactionData({
    hyperdriveAddress: hyperdrive.address,
  });
  const appConfig = useAppConfig();
  const isSmallScreenView = useIsTailwindSmallScreen();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const tableInstance = useReactTable({
    columns: isSmallScreenView
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
    data: transactionData || [],
    initialState: {
      sorting: [
        {
          id: "blockNumber",
          desc: true,
        },
      ],
    },
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

  if (!transactionData?.length) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="There are no transactions to display"
          text="Open a position or add liquidity to see transactions here."
        />
      </div>
    );
  }

  return (
    <div className="flex h-96 w-full overflow-y-scroll scrollbar-none">
      <table className="daisy-table daisy-table-zebra daisy-table-lg h-fit">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky top-0 z-10 h-16 bg-base-100"
                  key={header.id}
                >
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2 font-normal text-neutral-content":
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
                    <FilterSelect header={header} />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-24">
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
