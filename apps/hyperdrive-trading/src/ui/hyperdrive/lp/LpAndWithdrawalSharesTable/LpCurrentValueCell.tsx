import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
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
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    appConfig,
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
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

  const baseProceeds = proceeds
    ? hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? proceeds
      : poolInfo
        ? fixed(proceeds).mul(poolInfo.vaultSharePrice).bigint
        : 0n
    : 0n;

  // const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
  //   hyperdriveAddress: hyperdrive.address,
  //   account,
  //   chainId: hyperdrive.chainId,
  // });

  // const {
  //   baseProceeds: baseProceedsFromPreview,
  //   withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  // } = usePreviewRedeemWithdrawalShares({
  //   hyperdriveAddress: hyperdrive.address,
  //   withdrawalSharesIn: balanceOfWithdrawalShares,
  //   minOutputPerShare: 1n, // TODO: slippage,
  //   destination: account,
  //   chainId: hyperdrive.chainId,
  // });

  const withdrawalSharesBaseValue = fixed(withdrawalShares || 0n).mul(
    poolInfo?.lpSharePrice || 0n,
  ).bigint;
  // const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
  //   decimals: hyperdrive.decimals,
  //   lpSharePrice: poolInfo?.lpSharePrice,
  //   withdrawalShares: balanceOfWithdrawalShares,
  //   baseProceedsFromPreview,
  //   withdrawalSharesRedeemedFromPreview,
  // });

  // const baseProceeds = proceeds
  //   ? hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
  //     ? proceeds
  //     : poolInfo
  //       ? fixed(proceeds).mul(poolInfo.vaultSharePrice).bigint
  //       : 0n
  //   : 0n;

  const withdrawablePercent =
    withdrawalShares && baseProceeds && baseValue
      ? fixed(
          calculateRatio({
            a: baseProceeds,
            b: baseValue,
            decimals: hyperdrive.decimals,
          }),
        )
      : parseFixed("100");

  // Calculate total proceeds based on withdrawable percentage
  // If 100% withdrawable, then proceeds is all you need, otherwise include both
  // proceeds and withdrawal shares
  const currentValueInBase = !withdrawalShares
    ? baseProceeds || 0n
    : baseProceeds || 0n + (withdrawalSharesBaseValue || 0n);

  // const currentValueInBase = fixed(currentValue, 24).mul(
  //   poolInfo?.lpSharePrice || 0n,
  // ).bigint;

  // Compute the difference between current value and base amount paid
  const profitLoss =
    previewRemoveLiquidityStatus === "success" ? (
      formatBalance({
        balance:
          currentValueInBase !== undefined
            ? // Use Math.abs to get the absolute difference between currentValue and baseAmountPaid.
              // This ensures we always have a positive value for display purposes,
              // as the sign (profit/loss) is handled separately in the UI.
              BigInt(Math.abs(Number(currentValueInBase - baseAmountPaid)))
            : 0n,
        decimals: hyperdrive?.decimals,
        places: baseToken?.places,
      })
    ) : (
      <Skeleton />
    );

  const isPositiveChangeInValue = currentValueInBase > baseAmountPaid;

  console.table([
    {
      "Base Amount Paid": fixed(baseAmountPaid).format(),
      "Base Proceeds": fixed(baseProceeds).format(),
      "Profit/Loss": profitLoss,
      "Withdrawal Shares": fixed(withdrawalShares || 0n).format(),
      "Hyperdrive Name": hyperdrive.name,
    },
  ]);

  return (
    <div className="flex flex-col">
      {!!poolInfo && !!lpShares ? (
        <>
          <span className="flex items-center justify-end gap-2 text-md">
            {openLpPositionStatus === "loading" ? (
              <Skeleton className="w-24" />
            ) : (
              `${formatBalance({
                balance: baseValue,
                decimals: baseToken?.decimals || 18,
                places: baseToken?.places,
              })}`
            )}
            {openLpPositionStatus === "loading" ? (
              <Skeleton className="w-8" />
            ) : !withdrawalShares ? (
              <div
                data-tip={
                  "Profit/Loss since open, after closing fees. Assuming any outstanding withdrawal shares are redeemed at current price."
                }
                className={classNames(
                  "daisy-tooltip daisy-tooltip-left flex text-xs before:border before:font-inter",
                  {
                    "rounded-md border border-success/20 bg-success/20 px-1 text-success":
                      isPositiveChangeInValue,
                    "rounded-md border border-error/20 bg-error/20 px-1 text-error":
                      !isPositiveChangeInValue && profitLoss !== "0",
                  },
                )}
              >
                <span>{isPositiveChangeInValue ? "+" : "-"}</span>
                {baseProceeds
                  ? `${profitLoss === "0" ? "0" : profitLoss}`
                  : undefined}
              </div>
            ) : (
              <span className="daisy-stat-value flex items-center gap-2 text-md font-bold">
                {/* TODO: Return to this to incorporate the withdrawal queue into the profit loss calculation */}
                <span
                  className="daisy-tooltip before:z-10 before:text-wrap before:border before:font-normal"
                  data-tip="This position cannot be fully closed at this time. Once the withdrawal shares are fully redeemed, profit/loss will be displayed."
                >
                  <ExclamationTriangleIcon className="size-4 text-warning" />
                </span>
              </span>
            )}
          </span>
          <span className="text-sm text-gray-500">
            {`${formatRate(withdrawablePercent.div(parseFixed("100")).bigint)} withdrawable`}
          </span>
        </>
      ) : (
        <div className="flex flex-col items-end">
          <Skeleton className="w-24" />
          <Skeleton className="mt-1 w-32" />
        </div>
      )}
    </div>
  );
}
