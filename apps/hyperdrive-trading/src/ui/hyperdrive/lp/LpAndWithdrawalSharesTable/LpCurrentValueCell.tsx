import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { getWithdrawalSharesCurrentValue } from "src/ui/hyperdrive/withdrawalShares/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { useAccount } from "wagmi";

export function LpCurrentValueCell({
  hyperdrive,
  lpShares,
}: {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
}): ReactElement {
  const { address: account } = useAccount();
  const { tokens } = useAppConfig();
  const baseToken = tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
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

  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
    chainId: hyperdrive.chainId,
  });

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
    chainId: hyperdrive.chainId,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    decimals: hyperdrive.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares: balanceOfWithdrawalShares,
    baseProceedsFromPreview,
    withdrawalSharesRedeemedFromPreview,
  });

  // make sure proceeds from withdrawal are always denominated in base
  let baseProceeds = proceeds || 0n;
  if (
    proceeds &&
    poolInfo &&
    !hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
  ) {
    baseProceeds = fixed(proceeds).mul(poolInfo.vaultSharePrice).bigint;
  }
  let withdrawablePercent = parseFixed("100");
  if (withdrawalShares) {
    if (baseProceeds && baseValue) {
      withdrawablePercent = fixed(
        // amountOut / total * 100
        calculateRatio({
          a: baseProceeds,
          b: baseValue,
          decimals: hyperdrive.decimals,
        }),
      );
    }
  }

  const totalProceeds = withdrawablePercent.eq(parseFixed("100"))
    ? (proceeds || 0n) + (withdrawalSharesCurrentValue || 0n)
    : proceeds || 0n;

  const profitLoss =
    previewRemoveLiquidityStatus === "success" ? (
      formatBalance({
        balance:
          totalProceeds !== undefined
            ? totalProceeds > baseAmountPaid
              ? totalProceeds - baseAmountPaid
              : baseAmountPaid - totalProceeds
            : 0n,
        decimals: baseToken?.decimals || 18,
        places: baseToken?.places,
      })
    ) : (
      <Skeleton />
    );

  const isPositiveChangeInValue = totalProceeds > baseAmountPaid;

  return (
    <div className="flex flex-col">
      {!!poolInfo && !!lpShares ? (
        <>
          <span className="flex items-center justify-end gap-2 text-md">
            {`${formatBalance({
              balance: baseValue,
              decimals: baseToken?.decimals || 18,
              places: baseToken?.places,
            })}`}
            {!withdrawalShares ? (
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
            {`${withdrawablePercent.format({ decimals: 2 })}% withdrawable`}
          </span>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
