import type { ClosedLong } from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import {
  type AppConfig,
  type EmptyExtensions,
  type HyperdriveConfig,
  type TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { type ReactElement, useMemo } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useClosedLongs } from "src/ui/hyperdrive/longs/hooks/useClosedLongs";
import { useAccount } from "wagmi";

interface ClosedLongsTableProps {
  hyperdrive: HyperdriveConfig;
}

const columnHelper = createColumnHelper<ClosedLong>();
function formatClosedLongMobileColumnData(
  closedLong: ClosedLong,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  return [
    {
      name: "Matures On",
      value: <span>{formatDate(Number(closedLong.maturity * 1000n))}</span>,
    },
    {
      name: `Size (hy${baseToken.symbol})`,
      value: (
        <span>
          {formatBalance({
            balance: closedLong.bondAmount,
            decimals: baseToken.decimals,
            places: baseToken.places,
          })}
        </span>
      ),
    },
    {
      name: `Value Received (${baseToken.symbol})`,
      value: (
        <BaseAmountReceivedCell
          hyperdrive={hyperdrive}
          closedLong={closedLong}
        />
      ),
    },
    {
      name: "Closed On",
      value: (
        <span>{formatDate(Number(closedLong.closedTimestamp * 1000n))}</span>
      ),
    },
  ];
}

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedLongMobileColumnData(
          row.original,
          hyperdrive,
          baseToken,
        );
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatClosedLongMobileColumnData(
          row.original,
          hyperdrive,
          baseToken,
        );
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li className="flex flex-row" key={column.name}>
                {column.value}
              </li>
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
    columnHelper.accessor((row) => formatDate(Number(row.maturity * 1000n)), {
      header: "Matures On",
      id: "maturationDate",
      cell: ({ row }) => {
        const maturity = formatDate(Number(row.original.maturity * 1000n));
        return <span>{maturity}</span>;
      },
    }),
    columnHelper.accessor(
      (row) =>
        formatBalance({
          balance: row.bondAmount,
          decimals: baseToken.decimals,
          places: baseToken.places,
        }),
      {
        id: "size",
        header: `Size (hy${baseToken.symbol})`,
        cell: ({ row }) => {
          return (
            <span className="flex w-20 justify-end">
              {formatBalance({
                balance: row.original.bondAmount,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}
            </span>
          );
        },
      },
    ),
    columnHelper.accessor("baseAmount", {
      id: "baseReceived",
      header: `Value Received (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <BaseAmountReceivedCell
            hyperdrive={hyperdrive}
            closedLong={row.original}
          />
        );
      },
    }),
    columnHelper.accessor("closedTimestamp", {
      header: "Closed On",
      id: "closedTimestamp",
      cell: ({ row }) => {
        return formatDate(Number(row.original.closedTimestamp * 1000n));
      },
    }),
  ];
}

export function ClosedLongsTable({
  hyperdrive,
}: ClosedLongsTableProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedLongs, closedLongsStatus } = useClosedLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const reversedClosedLongs = useMemo(
    () => (closedLongs ? [...closedLongs].reverse() : []),
    [closedLongs],
  );
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
    data: reversedClosedLongs, // show most recently closed first, TODO: refactor to interactive column sorting
    initialState: {
      sorting: [
        {
          id: "closedTimestamp",
          desc: true,
        },
      ],
    },
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Longs."
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (closedLongsStatus === "loading") {
    return <LoadingState />;
  }
  if (!closedLongs?.length && closedLongsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no closed Long positions"
          text="Close a Long, switch wallets, or view your open long positions"
        />
      </div>
    );
  }

  return (
    <div className="overflow-y-auto">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 font-normal text-neutral-content text-sm"
                  key={header.id}
                >
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-24 items-center">
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="align-top italic" key={cell.id}>
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
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
    </div>
  );
}

function BaseAmountReceivedCell({
  closedLong,
  hyperdrive,
}: {
  closedLong: ClosedLong;
  hyperdrive: HyperdriveConfig;
}) {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const currentValueLabel = formatBalance({
    balance: closedLong.baseAmount,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-1 lg:w-36 lg:flex-row lg:justify-end",
      )}
    >
      <span className="font-bold">{currentValueLabel?.toString()}</span>
    </div>
  );
}
