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
import { CellWithTooltip } from "src/ui/base/components/tables/SortableGridTable";
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
      header: () => (
        <CellWithTooltip
          tooltip="Long and Short positions have a maturity date based on the open date and position duration of the pool whereas LP positions can remain active indefinitely (until closed by the LPer)."
          content="Position"
        />
      ),
      cell: ({ getValue, row }) => {
        const lpShares = getValue();
        const withdrawalShares = row.original.withdrawalShares;

        return (
          <span key="type" className="font-semibold uppercase">
            {lpShares ? "LP" : "Pending withdrawal"}
          </span>
        );
      },
    }),
    columnHelper.accessor("withdrawalShares", {
      header: () => (
        <CellWithTooltip
          tooltip="LP's proportionate stake in the total liquidity pool."
          content="Shares"
        />
      ),
      cell: ({ getValue, row }) => {
        const withdrawalShares = getValue();
        const lpShares = row.original.lpShares;

        return formatBalance({
          balance: withdrawalShares ? withdrawalShares || 0n : lpShares || 0n,
          decimals: hyperdrive.baseToken.decimals,
        });
      },
    }),
    columnHelper.accessor("lpShares", {
      id: "currentValue",
      header: () => (
        <CellWithTooltip
          tooltip="The current value of the position."
          content="Value"
        />
      ),
      cell: ({ row }) => {
        return (
          <CurrentValueCell key="value_1" hyperdrive={hyperdrive} row={row} />
        );
      },
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "withdrawable",
      header: () => (
        <CellWithTooltip
          tooltip="The amount of base tokens that can be withdrawn from the position."
          content="Withdrawable"
        />
      ),
      cell: ({ row }) => {
        const withdrawalShares = row.original.withdrawalShares;
        const lpShares = row.original.lpShares;
        if (lpShares) {
          return (
            <span key="remove-liquidity" className="flex justify-end">
              <RemoveLiquidityModalButton
                modalId="remove-liquidity-modal"
                hyperdrive={hyperdrive}
                lpShares={lpShares}
              />
            </span>
          );
        } else if (withdrawalShares) {
          return (
            <span key="redeem-withdraw-shares" className="flex justify-end">
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

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  row: Row<LpRowType>;
}): JSX.Element {
  const { address: account } = useAccount();
  const lpShares = row.original.lpShares;
  const withdrawalShares = row.original.withdrawalShares;
  const poolInfo = usePoolInfo(hyperdrive.address);
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
      <span key="withdrawable">
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
      <span key="withdrawable">
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

export function OpenLpPosition({
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
    return [
      {
        lpShares: lpShares || 0n,
      },
      {
        withdrawalShares: withdrawalShares || 0n,
      },
    ];
  }, [lpShares, withdrawalShares]);
  const { baseAmountOut: lpBaseWithdrawable } = usePreviewRemoveLiquidity({
    market: hyperdrive,
    lpSharesIn: lpShares,
    minBaseAmountOut: 1n, // TODO: slippage,
    destination: account,
  });

  const { baseAmountOut: withdrawalSharesBaseWithdrawable } =
    usePreviewRedeemWithdrawalShares({
      market: hyperdrive,
      withdrawalSharesIn: withdrawalShares,
      minBaseAmountOutPerShare: 1n, // TODO: slippage,
      destination: account,
    });

  const { poolInfo } = usePoolInfo(hyperdrive.address);

  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive),
    data: memoizedData as LpRowType[],
    getCoreRowModel: getCoreRowModel(),
  });

  const rows: any[] = [];
  if (lpShares) {
    rows.push([
      <span key="type" className="font-semibold uppercase">
        LP
      </span>,
      formatBalance({
        balance: lpShares,
        decimals: (hyperdrive as Hyperdrive).baseToken.decimals,
        places: 4,
      }),
      <span key="value">
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
      </span>,
      <span key="withdrawable">
        {lpBaseWithdrawable !== undefined ? (
          `${formatBalance({
            balance: lpBaseWithdrawable,
            decimals: hyperdrive.baseToken.decimals,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>,
      <span key="remove-liquidity" className="flex justify-end">
        <RemoveLiquidityModalButton
          modalId="remove-liquidity-modal"
          hyperdrive={hyperdrive}
          lpShares={lpShares}
        />
      </span>,
    ]);
  }

  if (withdrawalShares) {
    rows.push([
      <span key="type" className="font-semibold uppercase">
        Pending withdrawal
      </span>,
      formatBalance({
        balance: withdrawalShares,
        decimals: hyperdrive.baseToken.decimals,
      }),
      <span key="value">
        {!!poolInfo ? (
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
      </span>,
      <span key="withdrawable">
        {withdrawalSharesBaseWithdrawable !== undefined ? (
          `${formatBalance({
            balance: withdrawalSharesBaseWithdrawable,
            decimals: hyperdrive.baseToken.decimals,
          })} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>,
      <span key="redeem-withdraw-shares" className="flex justify-end">
        <RedeemWithdrawalSharesModalButton
          modalId="redeem-withdrawal-shares-modal"
          hyperdrive={hyperdrive}
          withdrawalShares={withdrawalShares}
        />
      </span>,
    ]);
  }
  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
      {!lpShares || !withdrawalShares ? <NonIdealState /> : null}
    </div>
  );
}
