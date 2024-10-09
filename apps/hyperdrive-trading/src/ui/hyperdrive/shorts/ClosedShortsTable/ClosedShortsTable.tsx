import {
  AppConfig,
  HyperdriveConfig,
  appConfig,
  findBaseToken,
} from "@delvtech/hyperdrive-appconfig";
import { ClosedShort } from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement, useMemo } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useClosedShorts } from "src/ui/hyperdrive/shorts/hooks/useClosedShorts";
import { useAccount } from "wagmi";

interface ClosedShortsTableProps {
  hyperdrive: HyperdriveConfig;
}

function formatClosedShortMobileColumnData(
  closedShort: ClosedShort,
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  return [
    {
      name: "Matures On",
      value: formatDate(Number(closedShort.maturity * 1000n)),
    },
    {
      name: `Size (${baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.bondAmount,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: `Value Received (${baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.baseAmountReceived,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: "Closed On",
      value: formatDate(Number(closedShort.closedTimestamp * 1000n)),
    },
  ];
}

const columnHelper = createColumnHelper<ClosedShort>();

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedShortMobileColumnData(
          row.original,
          hyperdrive,
          appConfig,
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
        const data = formatClosedShortMobileColumnData(
          row.original,
          hyperdrive,
          appConfig,
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
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  return [
    columnHelper.accessor((row) => formatDate(Number(row.maturity * 1000n)), {
      header: `Matures On`,
      cell: ({ row }) => {
        const maturity = formatDate(Number(row.original.maturity * 1000n));
        return <span>{maturity}</span>;
      },
    }),
    columnHelper.accessor("bondAmount", {
      header: `Size (hy${baseToken.symbol})`,
      cell: (bondAmount) => {
        const bondAmountValue = bondAmount.getValue();
        return (
          <span className="flex w-20 justify-end">
            {formatBalance({
              balance: bondAmountValue,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmountReceived", {
      header: `Value Received (${baseToken.symbol})`,
      cell: (baseAmountReceived) => {
        const amountReceived = baseAmountReceived.getValue();
        return (
          <span className="flex w-36 justify-end font-bold">
            {formatBalance({
              balance: amountReceived,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("closedTimestamp", {
      header: `Closed On`,
      cell: (closedTimestamp) => {
        return (
          <span>{formatDate(Number(closedTimestamp.getValue() * 1000n))}</span>
        );
      },
    }),
  ];
}

export function ClosedShortsTable({
  hyperdrive,
}: ClosedShortsTableProps): ReactElement {
  const { address: account } = useAccount();

  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedShorts, closedShortsStatus } = useClosedShorts({
    chainId: hyperdrive.chainId,
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const reversedClosedShorts = useMemo(
    () => (closedShorts ? [...closedShorts].reverse() : []),
    [closedShorts],
  );
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
    data: reversedClosedShorts,
    initialState: {
      sorting: [
        {
          id: "closedTimestamp",
          desc: true,
        },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Shorts"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (closedShortsStatus === "loading") {
    return <LoadingState />;
  }
  if (!closedShorts?.length && closedShortsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no closed Short positions"
          text="Close a Short, switch wallets, or view your open short positions"
        />
      </div>
    );
  }
  return (
    <div className="max-h-[512px] overflow-y-auto">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 text-sm font-normal text-neutral-content"
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
              <tr key={row.id} className="h-24 grid-cols-4 items-center">
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
