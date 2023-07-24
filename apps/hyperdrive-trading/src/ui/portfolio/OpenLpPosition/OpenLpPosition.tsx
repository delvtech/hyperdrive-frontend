import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
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

  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { withdrawalShares } = useWithdrawalShares({
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

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-start text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
      cols={["Position", "Shares", "Value", "Withdrawable", ""]}
      rows={[
        lpShares
          ? [
              <span key="type" className="font-semibold uppercase text-primary">
                LP
              </span>,
              formatBalance(
                formatUnits(
                  lpShares,
                  (hyperdrive as Hyperdrive).baseToken.decimals,
                ),
              ),
              "TODO",
              <span key="withdrawable">
                {lpBaseWithdrawable !== undefined
                  ? formatBalance(
                      formatUnits(
                        lpBaseWithdrawable,
                        hyperdrive.baseToken.decimals,
                      ),
                    )
                  : undefined}{" "}
                {hyperdrive.baseToken.symbol}
              </span>,
              <span key="remove-liquidity" className="flex justify-end">
                <RemoveLiquidityModalButton
                  modalId="remove-liquidity-modal"
                  hyperdrive={hyperdrive}
                  lpShares={lpShares}
                />
              </span>,
            ]
          : undefined,

        withdrawalShares
          ? [
              <span key="type" className="font-semibold uppercase text-primary">
                Pending withdrawal
              </span>,
              formatBalance(
                formatUnits(
                  withdrawalShares,
                  (hyperdrive as Hyperdrive).baseToken.decimals,
                ),
              ),
              "TODO",
              <span key="withdrawable">
                {withdrawalSharesBaseWithdrawable !== undefined
                  ? formatBalance(
                      formatUnits(
                        withdrawalSharesBaseWithdrawable,
                        hyperdrive.baseToken.decimals,
                      ),
                    )
                  : undefined}{" "}
                {hyperdrive.baseToken.symbol}
              </span>,
              <span key="redeem-withdraw-shares" className="flex justify-end">
                <RedeemWithdrawalSharesModalButton
                  modalId="redeem-withdrawal-shares-modal"
                  hyperdrive={hyperdrive}
                  withdrawalShares={withdrawalShares}
                />
              </span>,
            ]
          : undefined,
      ]}
    />
  );
}
