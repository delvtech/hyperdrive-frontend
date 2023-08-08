import { multiplyBigInt } from "@hyperdrive/core";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import {
  Row,
  SortableGridTable,
} from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useHyperdrivePoolInfo } from "src/ui/hyperdrive/hooks/useHyperdrivePoolInfo";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RedeemWithdrawalSharesModalButton } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesModalButton/RedeemWithdrawalSharesModalButton";
import { RemoveLiquidityModalButton } from "src/ui/hyperdrive/lp/RemoveLiquidityModalButton/RemoveLiquidityModalButton";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenLpPosition({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { lpShares, lpSharesStatus } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

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

  const { poolInfo } = useHyperdrivePoolInfo(hyperdrive.address);

  const rows: Row[] = [];
  if (lpShares) {
    rows.push([
      <span key="type" className="font-semibold uppercase text-primary">
        LP
      </span>,
      formatBalance(
        formatUnits(lpShares, (hyperdrive as Hyperdrive).baseToken.decimals),
      ),
      <span key="value">
        {!!poolInfo ? (
          `${formatBalance(
            formatUnits(
              multiplyBigInt(
                [lpShares, poolInfo.lpSharePrice],
                hyperdrive.baseToken.decimals,
              ),
              hyperdrive.baseToken.decimals,
            ),
          )} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>,
      <span key="withdrawable">
        {lpBaseWithdrawable !== undefined ? (
          `${formatBalance(
            formatUnits(lpBaseWithdrawable, hyperdrive.baseToken.decimals),
          )} ${hyperdrive.baseToken.symbol}`
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
      formatBalance(
        formatUnits(
          withdrawalShares,
          (hyperdrive as Hyperdrive).baseToken.decimals,
        ),
      ),
      <span key="value">
        {!!poolInfo ? (
          `${formatBalance(
            formatUnits(
              multiplyBigInt(
                [withdrawalShares, poolInfo.lpSharePrice],
                hyperdrive.baseToken.decimals,
              ),
              hyperdrive.baseToken.decimals,
            ),
          )} ${hyperdrive.baseToken.symbol}`
        ) : (
          <Skeleton />
        )}
      </span>,
      <span key="withdrawable">
        {withdrawalSharesBaseWithdrawable !== undefined ? (
          `${formatBalance(
            formatUnits(
              withdrawalSharesBaseWithdrawable,
              hyperdrive.baseToken.decimals,
            ),
          )} ${hyperdrive.baseToken.symbol}`
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
      headingRowClassName="grid-cols-[4fr_4fr_4fr_4fr_1fr] text-start text-neutral-content"
      bodyRowClassName="grid-cols-[4fr_4fr_4fr_4fr_1fr] text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
      cols={["Position", "Shares", "Value", "Withdrawable", ""]}
      rows={rows}
      showSkeleton={
        lpSharesStatus === "loading" || withdrawalSharesStatus === "loading"
      }
    />
  );
}
