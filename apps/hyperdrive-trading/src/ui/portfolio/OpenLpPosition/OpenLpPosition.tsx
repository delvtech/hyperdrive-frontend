import { multiplyBigInt } from "@hyperdrive/sdk";
import { createColumnHelper } from "@tanstack/react-table";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import {
  CellWithTooltip,
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RedeemWithdrawalSharesModalButton } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesModalButton/RedeemWithdrawalSharesModalButton";
import { RemoveLiquidityModalButton } from "src/ui/hyperdrive/lp/RemoveLiquidityModalButton/RemoveLiquidityModalButton";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<Row>();
function getColumns(
  hyperdrive: Hyperdrive,
  lpShares: bigint,
  withdrawalShares: bigint,
) {}

export function OpenLpPosition({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { lpShares, lpSharesStatus } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  console.log("lpShares", lpShares);

  const { withdrawalShares, withdrawalSharesStatus } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

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

  const rows: Row[] = [];
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
    <SortableGridTable
      headingRowClassName="grid-cols-[4fr_4fr_4fr_4fr_1fr]"
      bodyRowClassName="grid-cols-[4fr_4fr_4fr_4fr_1fr] items-center even:bg-base-300/5 h-16"
      // Blank col added for actions
      cols={[
        {
          cell: (
            <CellWithTooltip
              tooltip="Long and Short positions have a maturity date based on the open date and position duration of the pool whereas LP positions can remain active indefinitely (until closed by the LPer)."
              content="Position"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="LP's proportionate stake in the total liquidity pool."
              content="Shares"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="Current settlement value of your open position."
              content="Value"
            />
          ),
        },
        {
          cell: (
            <CellWithTooltip
              tooltip="Amount of capital LP can reclaim now."
              content="Withdrawable"
            />
          ),
        },
        { cell: <div /> },
      ]}
      rows={rows}
      showSkeleton={
        lpSharesStatus === "loading" || withdrawalSharesStatus === "loading"
      }
    />
  );
}
