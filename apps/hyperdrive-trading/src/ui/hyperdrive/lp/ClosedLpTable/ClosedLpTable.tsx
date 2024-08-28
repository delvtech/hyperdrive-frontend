import {
  ClosedLpShares,
  RedeemedWithdrawalShares,
} from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement, useMemo } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useClosedLpShares } from "src/ui/hyperdrive/lp/hooks/useClosedLpShares";
import { useRedeemedWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemedWithdrawalShares";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: HyperdriveConfig;
}

export type ClosedLpSharesAndWithdrawalShares = ClosedLpShares &
  RedeemedWithdrawalShares;

function formatClosedLpMobileColumnData(
  closedLpShares: ClosedLpSharesAndWithdrawalShares,
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const isWithdrawalShare = closedLpShares.redeemedTimestamp;
  const shares = isWithdrawalShare
    ? closedLpShares.withdrawalShareAmount
    : closedLpShares.lpAmount;

  return [
    {
      name: "Closed On",
      value: formatDate(Number(closedLpShares.closedTimestamp * 1000n)),
    },
    {
      name: "Shares Closed",
      value: formatBalance({
        balance: shares,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: `Received (${baseToken.symbol})`,
      value: formatBalance({
        balance: closedLpShares.baseAmount,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: "Withdrawal Shares",
      value: isWithdrawalShare
        ? "N/A"
        : formatBalance({
            balance: closedLpShares.withdrawalShareAmount,
            decimals: baseToken.decimals,
            places: baseToken.places,
          }),
    },
  ];
}

const columnHelper = createColumnHelper<ClosedLpSharesAndWithdrawalShares>();
function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedLpMobileColumnData(
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
        const data = formatClosedLpMobileColumnData(
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
    columnHelper.display({
      header: "Position",
      cell: ({ row }) => {
        const isWithdrawalShare = row.original.redeemedTimestamp;
        return (
          <span className="font-semibold uppercase">
            {isWithdrawalShare ? "Withdrawal Shares" : "LP"}
          </span>
        );
      },
    }),
    columnHelper.accessor("lpSharePrice", {
      header: "Shares Closed",
      cell: ({ row }) => {
        const isWithdrawalShare = row.original.redeemedTimestamp;
        const shares = isWithdrawalShare
          ? row.original.withdrawalShareAmount
          : row.original.lpAmount;
        return (
          <span className="flex w-24 justify-end">
            {formatBalance({
              balance: shares,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmount", {
      header: `Value Received (${baseToken.symbol})`,
      cell: ({ getValue }) => {
        const baseAmount = getValue();
        return (
          <span className="flex w-36 justify-end">
            {formatBalance({
              balance: baseAmount,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.display({
      header: "Withdrawal Shares Received",
      cell: ({ row }) => {
        const isWithdrawalShare = row.original.redeemedTimestamp;
        const withdrawalShareAmount = row.original.withdrawalShareAmount;
        if (isWithdrawalShare) {
          return <span>N/A</span>;
        }
        return (
          <span className="flex w-48 justify-end">
            {formatBalance({
              balance: withdrawalShareAmount,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("closedTimestamp", {
      header: "Closed On",
      cell: ({ row }) => {
        const closedTimestamp =
          row.original.closedTimestamp || row.original.redeemedTimestamp;
        return <span>{formatDate(Number(closedTimestamp * 1000n))}</span>;
      },
    }),
  ];
}

export function ClosedLpTable({
  hyperdrive,
}: ClosedLpTablePRops): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedLpShares, closedLpSharesStatus } = useClosedLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { redeemedWithdrawalShares } = useRedeemedWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const memoizedData = useMemo(() => {
    const data = [];
    if (closedLpShares?.length) {
      data.push(...closedLpShares);
    }
    if (redeemedWithdrawalShares?.length) {
      data.push(...redeemedWithdrawalShares);
    }
    return data;
  }, [closedLpShares, redeemedWithdrawalShares]);
  const tableInstance = useReactTable({
    data: memoizedData?.reverse() as ClosedLpSharesAndWithdrawalShares[],
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
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
  });
  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your LP positions"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (!closedLpShares?.length && closedLpSharesStatus === "success") {
    return (
      <div className="my-20">
        <NonIdealState
          heading="You have no closed LP positions"
          text="Close an LP position, switch wallets, or view your open LP positions"
        />
      </div>
    );
  }
  return (
    <div className="w-full">
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
          {closedLpSharesStatus === "loading" ? (
            <TableSkeleton numColumns={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className="h-24 grid-cols-4 items-center border-none"
                >
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="text-lg italic" key={cell.id}>
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
            })
          )}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
      {!closedLpShares?.length &&
      !redeemedWithdrawalShares?.length &&
      closedLpSharesStatus === "success" ? (
        <NonIdealState />
      ) : null}
    </div>
  );
}
