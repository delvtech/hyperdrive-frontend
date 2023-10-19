import { multiplyBigInt } from "@hyperdrive/sdk";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { RedeemWithdrawalSharesModalButton } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesModalButton/RedeemWithdrawalSharesModalButton";
import { RemoveLiquidityModalButton } from "src/ui/hyperdrive/lp/RemoveLiquidityModalButton/RemoveLiquidityModalButton";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
  lpShares?: bigint;
  withdrawalShares?: bigint;
}

type LpRowType = {
  withdrawalShares: bigint | undefined;
  lpShares: bigint | undefined;
};

const columnHelper = createColumnHelper<LpRowType>();
function getColumns(hyperdrive: Hyperdrive) {
  return [
    columnHelper.accessor("lpShares", {
      header: "Position",
      cell: ({ getValue }) => {
        const lpShares = getValue();
        return (
          <span className="font-semibold uppercase">
            {lpShares ? "LP" : "Withdrawal Shares"}
          </span>
        );
      },
    }),
    columnHelper.accessor("lpShares", {
      id: "shares",
      header: "Shares",

      cell: ({ row, getValue }) => {
        const lpShares = getValue();
        if (lpShares) {
          return (
            <span>
              {formatBalance({
                balance: lpShares || 0n,
                decimals: (hyperdrive as Hyperdrive).baseToken.decimals,
                places: 4,
              })}
            </span>
          );
        } else {
          return (
            <span>
              {formatBalance({
                balance: row.original.withdrawalShares || 0n,
                decimals: hyperdrive.baseToken.decimals,
                places: 4,
              })}
            </span>
          );
        }
      },
    }),
    columnHelper.accessor("lpShares", {
      id: "value",
      header: "Value",
      cell: ({ row }) => {
        return <ValueCell hyperdrive={hyperdrive} row={row} />;
      },
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "withdrawable",
      header: "Withdrawable",
      cell: ({ row }) => {
        return <WithdrawableCell hyperdrive={hyperdrive} row={row} />;
      },
    }),
    columnHelper.display({
      id: "actions",
      cell: ({ row }) => {
        const withdrawalShares = row.original.withdrawalShares;
        const lpShares = row.original.lpShares;
        if (lpShares) {
          return (
            <span className="flex justify-end">
              <RemoveLiquidityModalButton
                modalId="remove-liquidity-modal"
                hyperdrive={hyperdrive}
                lpShares={lpShares}
              />
            </span>
          );
        } else if (withdrawalShares) {
          return (
            <span className="flex justify-end">
              <RedeemWithdrawalSharesModalButton
                modalId="redeem-withdrawal-shares-modal"
                hyperdrive={hyperdrive}
                withdrawalShares={withdrawalShares}
              />
            </span>
          );
        }
      },
    }),
  ];
}

function ValueCell({
  row,
  hyperdrive,
}: {
  row: Row<LpRowType>;
  hyperdrive: Hyperdrive;
}) {
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const lpShares = row.original.lpShares;
  const withdrawalShares = row.original.withdrawalShares;
  if (lpShares) {
    return (
      <span>
        {!!poolInfo ? (
          `${formatBalance({
            balance: multiplyBigInt(
              [lpShares, poolInfo.lpSharePrice],
              hyperdrive.baseToken.decimals,
            ),
            decimals: hyperdrive.baseToken.decimals,
            places: 4,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>
    );
  } else {
    return (
      <span>
        {!!poolInfo && withdrawalShares ? (
          `${formatBalance({
            balance: multiplyBigInt(
              [withdrawalShares, poolInfo.lpSharePrice],
              hyperdrive.baseToken.decimals,
            ),
            decimals: hyperdrive.baseToken.decimals,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>
    );
  }
}

function WithdrawableCell({
  row,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  row: Row<LpRowType>;
}): JSX.Element {
  const { address: account } = useAccount();
  const lpShares = row.original.lpShares;
  const withdrawalShares = row.original.withdrawalShares;
  const { baseAmountOut: withdrawalSharesBaseWithdrawable } =
    usePreviewRedeemWithdrawalShares({
      market: hyperdrive,
      withdrawalSharesIn: withdrawalShares,
      minBaseAmountOutPerShare: 1n, // TODO: slippage,
      destination: account,
    });
  const { baseAmountOut: lpBaseWithdrawable } = usePreviewRemoveLiquidity({
    market: hyperdrive,
    lpSharesIn: lpShares,
    minBaseAmountOut: 1n, // TODO: slippage,
    destination: account,
  });
  if (lpShares) {
    return (
      <span>
        {lpBaseWithdrawable !== undefined ? (
          `${formatBalance({
            balance: lpBaseWithdrawable,
            decimals: hyperdrive.baseToken.decimals,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>
    );
  } else {
    return (
      <span>
        {withdrawalSharesBaseWithdrawable !== undefined ? (
          `${formatBalance({
            balance: withdrawalSharesBaseWithdrawable,
            decimals: hyperdrive.baseToken.decimals,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>
    );
  }
}

export function OpenLpTable({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const memoizedData = useMemo(() => {
    const data = [];
    if (lpShares && lpShares !== 0n) {
      data.push({ lpShares });
    }
    if (withdrawalShares && withdrawalShares !== 0n) {
      data.push({ withdrawalShares });
    }
    return data;
  }, [lpShares, withdrawalShares]);

  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive),
    data: memoizedData as LpRowType[],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="sticky top-0 bg-white" key={header.id}>
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
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center"
              >
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
      {!lpShares && !withdrawalShares ? <NonIdealState /> : null}
    </div>
  );
}
