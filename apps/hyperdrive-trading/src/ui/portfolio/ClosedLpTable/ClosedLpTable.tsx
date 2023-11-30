import { ClosedLpShares, RedeemedWithdrawalShares } from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useMemo } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useClosedLpShares } from "src/ui/hyperdrive/lp/hooks/useClosedLpShares";
import { useRedeemedWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemedWithdrawalShares";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: Hyperdrive;
}

type ClosedLpSharesAndWithdrawalShares = ClosedLpShares &
  RedeemedWithdrawalShares;

const columnHelper = createColumnHelper<ClosedLpSharesAndWithdrawalShares>();
function getColumns(hyperdrive: Hyperdrive) {
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
    columns: getColumns(hyperdrive),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
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
