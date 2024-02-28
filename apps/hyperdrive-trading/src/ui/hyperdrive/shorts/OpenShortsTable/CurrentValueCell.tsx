import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useAccount } from "wagmi";

export function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { address: account } = useAccount();
  const { amountOut } = usePreviewCloseShort({
    hyperdriveAddress: openShort.hyperdriveAddress,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
    minAmountOut: parseUnits("0", baseToken.decimals),
    destination: account,
  });
  const currentValue =
    amountOut &&
    formatBalance({
      balance: amountOut,
      decimals: baseToken.decimals,
      places: 3,
    });

  const isPositiveChangeInValue =
    amountOut && amountOut > openShort.baseAmountPaid;

  return (
    <div className="daisy-stat p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValue?.toString()}
      </span>
      {amountOut && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-stat-desc daisy-tooltip mt-1 flex text-xs",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            baseAmountOut: amountOut,
            amountInput: openShort.baseAmountPaid,
            baseDecimals: baseToken.decimals,
            baseSymbol: baseToken.symbol,
            showPercentage: false,
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
