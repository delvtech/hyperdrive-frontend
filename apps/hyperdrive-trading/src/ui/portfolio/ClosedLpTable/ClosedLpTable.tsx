import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RemoveLiquidityModalButton } from "src/ui/hyperdrive/lp/RemoveLiquidityModalButton/RemoveLiquidityModalButton";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface ClosedLpTablePRops {
  hyperdrive: Hyperdrive;
}

export function ClosedLpTable({
  hyperdrive,
}: ClosedLpTablePRops): ReactElement {
  const { address: account } = useAccount();

  // TODO: make a useClosedLpShares hook
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  // TODO: make a useClosedWithdrawalShares hook
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-start text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      cols={["Position", "Shares", "Value", "Withdrawable", "Closed on"]}
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
              "TODO",
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
                Pending withdraw
              </span>,
              formatBalance(
                formatUnits(
                  withdrawalShares,
                  (hyperdrive as Hyperdrive).baseToken.decimals,
                ),
              ),
              "TODO",
              "TODO",
              <span key="redeem-withdraw-shares" className="flex justify-end">
                TODO
              </span>,
            ]
          : undefined,
      ]}
    />
  );
}
