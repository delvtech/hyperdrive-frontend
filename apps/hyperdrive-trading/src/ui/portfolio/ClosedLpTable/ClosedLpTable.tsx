import { ClosedLpShares, RedeemedWithdrawalShares } from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useMemo } from "react";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useClosedLpShares } from "src/ui/hyperdrive/lp/hooks/useClosedLpShares";
import { useRedeemedWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemedWithdrawalShares";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: HyperdriveConfigOld;
}

type ClosedLpSharesAndWithdrawalShares = ClosedLpShares &
  RedeemedWithdrawalShares;

const formatClosedLpMobileColumnData = (
  closedLpShares: ClosedLpSharesAndWithdrawalShares,
  hyperdrive: HyperdriveConfigOld,
) => {
  const isWithdrawalShare = closedLpShares.redeemedTimestamp;
  const shares = isWithdrawalShare
    ? closedLpShares.withdrawalShareAmount
    : closedLpShares.lpAmount;

  return [
    {
      name: "Closed on",
      value: new Date(
        Number(closedLpShares.closedTimestamp * 1000n),
      ).toLocaleDateString(),
    },
    {
      name: "Shares closed",
      value: formatBalance({
        balance: shares,
        decimals: hyperdrive.baseToken.decimals,
        places: 4,
      }),
    },
    {
      name: `Received (${hyperdrive.baseToken.symbol})`,
      value: formatBalance({
        balance: closedLpShares.baseAmount,
        decimals: hyperdrive.baseToken.decimals,
        places: 4,
      }),
    },
    {
      name: "Withdrawal shares",
      value: isWithdrawalShare
        ? "N/A"
        : formatBalance({
            balance: closedLpShares.withdrawalShareAmount,
            decimals: hyperdrive.baseToken.decimals,
            places: 4,
          }),
    },
  ];
};

const columnHelper = createColumnHelper<ClosedLpSharesAndWithdrawalShares>();
function getMobileColumns(hyperdrive: HyperdriveConfigOld) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedLpMobileColumnData(row.original, hyperdrive);
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
        const data = formatClosedLpMobileColumnData(row.original, hyperdrive);
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
function getColumns(hyperdrive: HyperdriveConfigOld) {
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
    columnHelper.display({
      header: "Shares closed",
      cell: ({ row }) => {
        const isWithdrawalShare = row.original.redeemedTimestamp;
        const shares = isWithdrawalShare
          ? row.original.withdrawalShareAmount
          : row.original.lpAmount;
        return (
          <span>
            {formatBalance({
              balance: shares,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmount", {
      header: `Amount received (${hyperdrive.baseToken.symbol})`,
      cell: ({ getValue }) => {
        const baseAmount = getValue();
        return (
          <span>
            {formatBalance({
              balance: baseAmount,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })}
          </span>
        );
      },
    }),
    columnHelper.display({
      header: "Withdrawal shares received",
      cell: ({ row }) => {
        const isWithdrawalShare = row.original.redeemedTimestamp;
        const withdrawalShareAmount = row.original.withdrawalShareAmount;
        if (isWithdrawalShare) {
          return <span>N/A</span>;
        }
        return (
          <span>
            {formatBalance({
              balance: withdrawalShareAmount,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })}
          </span>
        );
      },
    }),
    columnHelper.display({
      header: "Closed on",
      cell: ({ row }) => {
        const closedTimestamp =
          row.original.closedTimestamp || row.original.redeemedTimestamp;
        return (
          <span>
            {new Date(Number(closedTimestamp * 1000n)).toLocaleDateString()}
          </span>
        );
      },
    }),
  ];
}

export function ClosedLpTable({
  hyperdrive,
}: ClosedLpTablePRops): ReactElement {
  const { address: account } = useAccount();
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
    data: memoizedData as ClosedLpSharesAndWithdrawalShares[],
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive)
      : getColumns(hyperdrive),
    getCoreRowModel: getCoreRowModel(),
  });
  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your LP positions."
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (!closedLpShares?.length && closedLpSharesStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no closed LP positions"
          text="Close an LP position, switch wallets, or view your open LP positions"
        />
      </div>
    );
  }
  return (
    <div className="max-h-96 w-full overflow-y-scroll">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="sticky top-0 bg-base-100" key={header.id}>
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
          {closedLpSharesStatus === "loading" ? (
            <TableSkeleton numColumns={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-24 grid-cols-4 items-center">
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="text-lg" key={cell.id}>
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
      {!closedLpShares?.length &&
      !redeemedWithdrawalShares?.length &&
      closedLpSharesStatus === "success" ? (
        <NonIdealState />
      ) : null}
    </div>
  );
}
