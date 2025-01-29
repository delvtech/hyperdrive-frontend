import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { getBaseToken, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { formatRate } from "src/base/formatRate";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useAccount } from "wagmi";

export function LpCurrentValueCell({
  hyperdrive,
  lpShares,
}: {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

  const { baseAmountPaid, baseValue, openLpPositionStatus } = useOpenLpPosition(
    {
      hyperdriveAddress: hyperdrive.address,
      account,
      chainId: hyperdrive.chainId,
    },
  );

  const { proceeds, withdrawalShares, previewRemoveLiquidityStatus } =
    usePreviewRemoveLiquidity({
      destination: account,
      lpSharesIn: lpShares,
      hyperdriveAddress: hyperdrive.address,
      minOutputPerShare: 1n,
      asBase: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
      chainId: hyperdrive.chainId,
    });

  // If withdrawal shares from preview are 0, we can assume the LP position is fully withdrawable.
  // Otherwise, we calculate the withdrawable percent based on the proceeds and base value.
  const withdrawablePercent =
    withdrawalShares && proceeds && baseValue
      ? fixed(
          calculateRatio({
            a: proceeds,
            b: baseValue,
            decimals: hyperdrive.decimals,
          }),
        )
      : parseFixed("100");

  const profitLoss =
    previewRemoveLiquidityStatus === "success"
      ? formatBalance({
          // Use Math.abs to get the absolute difference between baseValue and baseAmountPaid.
          // This ensures we always have a positive value for display purposes,
          // as the sign (profit/loss) is handled separately in the UI.
          balance: BigInt(Math.abs(Number(baseValue - baseAmountPaid))),
          decimals: hyperdrive?.decimals,
          places: baseToken?.places,
        })
      : null;

  const isPositiveChangeInValue = baseValue > baseAmountPaid;

  return (
    <div className="flex flex-col">
      <span className="flex items-center justify-end gap-2 text-md">
        {openLpPositionStatus === "loading" ? (
          <Skeleton className="w-24" />
        ) : (
          `${formatBalance({
            balance: baseValue,
            decimals: hyperdrive.decimals,
            places: baseToken?.places,
          })}`
        )}
        <>
          {openLpPositionStatus === "loading" ? (
            <Skeleton className="w-12" />
          ) : baseValue ? (
            <Tooltip
              tooltip="Profit/Loss since open, after closing fees. Assuming any outstanding withdrawal shares are redeemed at current price."
              className={classNames(
                "text-xs before:z-10 before:text-start before:font-inter",
                {
                  "rounded-md border border-success/20 bg-success/20 px-1 text-success":
                    isPositiveChangeInValue,
                  "rounded-md border border-error/20 bg-error/20 px-1 text-error":
                    !isPositiveChangeInValue && profitLoss !== "0",
                },
              )}
            >
              <span>{isPositiveChangeInValue ? "+" : "-"}</span>
              {profitLoss === null ? <Skeleton /> : profitLoss.toString()}
            </Tooltip>
          ) : null}
        </>
      </span>
      <span className="text-neutral-content">
        {`${formatRate({ rate: withdrawablePercent.div(parseFixed("100")).bigint })} withdrawable`}
      </span>
    </div>
  );
}
