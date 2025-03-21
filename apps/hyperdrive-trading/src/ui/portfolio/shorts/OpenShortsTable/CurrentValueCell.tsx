import { HyperdriveConfig, getBaseToken } from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useEstimateShortMarketValue } from "src/ui/hyperdrive/shorts/hooks/useEstimateShortMarketValue";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";

export function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const {
    amountOut: currentValueInBase,
    previewCloseShortStatus,
    previewCloseShortError,
  } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
  });

  const { marketEstimate } = useEstimateShortMarketValue({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
  });

  const currentValueLabel = formatBalance({
    balance: currentValueInBase || marketEstimate || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: (currentValueInBase || 0n) - openShort.baseAmountPaid,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    currentValueInBase && currentValueInBase > openShort.baseAmountPaid;

  const cellClassName = classNames("daisy-stat p-0", {
    "flex w-32 flex-col items-end": !isTailwindSmallScreen,
  });

  if (previewCloseShortStatus === "loading") {
    return (
      <div className={cellClassName}>
        <Skeleton width={100} />
      </div>
    );
  }

  return (
    <div className={cellClassName}>
      <span className="daisy-stat-value flex items-center gap-2 text-md font-bold">
        {/* warning icon with tooltip for liquidity issues
         TODO: Add "Current withdrawabale amount: xxx" to the tooltip once we
         have calcMaxCloseShort */}
        {previewCloseShortError ? (
          <Tooltip
            className="before:text-start before:font-normal"
            tooltip="This position cannot be fully closeat this time "
          >
            <ExclamationTriangleIcon className="size-4 text-warning" />
          </Tooltip>
        ) : (
          ""
        )}{" "}
        {currentValueLabel}
      </span>

      {/* the current value of the user's position */}
      {currentValueInBase && openShort.bondAmount !== 0n ? (
        <Tooltip
          tooltip={"Profit/Loss since open, after closing fees."}
          className={classNames("mt-1 flex text-xs", {
            "text-success": isPositiveChangeInValue,
            "text-error": !isPositiveChangeInValue && profitLoss !== "-0",
          })}
        >
          {/* the Profit/Loss badge indicator */}
          <span>{isPositiveChangeInValue ? "+" : ""}</span>
          {profitLoss
            ? `${profitLoss === "-0" ? "" : `${profitLoss} ${baseToken.symbol}`}`
            : undefined}
        </Tooltip>
      ) : (
        ""
      )}
    </div>
  );
}
