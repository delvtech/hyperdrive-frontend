import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { SortableGridTable } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useHyperdrivePoolInfo } from "src/ui/hyperdrive/hooks/useHyperdrivePoolInfo";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
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

  const { poolInfo } = useHyperdrivePoolInfo(hyperdrive.address);

  if (poolInfo) {
    console.log("poolInfo", {
      shareReserves: formatUnits(poolInfo.shareReserves, 18),
      bondReserves: formatUnits(poolInfo.bondReserves, 18),
      lpTotalSupply: formatUnits(poolInfo.lpTotalSupply, 18),
      sharePrice: formatUnits(poolInfo.sharePrice, 18),
      longsOutstanding: formatUnits(poolInfo.longsOutstanding, 18),
      longAverageMaturityTime: poolInfo.longAverageMaturityTime.toString(),
      shortsOutstanding: formatUnits(poolInfo.shortsOutstanding, 18),
      shortAverageMaturityTime: poolInfo.shortAverageMaturityTime.toString(),
      shortBaseVolume: formatUnits(poolInfo.shortBaseVolume, 18),
      withdrawalSharesReadyToWithdraw: formatUnits(
        poolInfo.withdrawalSharesReadyToWithdraw,
        18,
      ),
      withdrawalSharesProceeds: formatUnits(
        poolInfo.withdrawalSharesProceeds,
        18,
      ),
    });
  }

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-4 text-start text-neutral-content"
      bodyRowClassName="grid-cols-4 text-base-content items-center text-sm md:text-h6 even:bg-secondary/5 h-16"
      // Blank col added for actions
      cols={["Position", "Shares", "Value", "Withdrawable", ""]}
      rows={[
        lpShares && poolInfo
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
