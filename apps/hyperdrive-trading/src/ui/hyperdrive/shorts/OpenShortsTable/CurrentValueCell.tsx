import { OpenShort } from "@delvtech/hyperdrive-viem";
import {
  HyperdriveConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useConvertStethSharesToStethTokens } from "src/ui/vaults/steth/useConvertStethSharesToStethTokens";
import { getIsSteth } from "src/vaults/isSteth";
import { useAccount } from "wagmi";

export function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  // steth markets can only close you out to steth shares, which must be
  // converted into steth tokens, which are 1:1 with eth
  const isStethHyperdrive = getIsSteth(sharesToken);
  const { amountOut } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
    minAmountOut: parseUnits("0", baseToken.decimals),
    destination: account,
    asBase: !isStethHyperdrive,
  });
  const { stethTokenAmount: stethTokenAmountOut } =
    useConvertStethSharesToStethTokens({
      lidoAddress: sharesToken.address,
      stethShares: amountOut,
      enabled: isStethHyperdrive,
    });
  const amountOutOrStethTokens = isStethHyperdrive
    ? stethTokenAmountOut
    : amountOut;

  const currentValueLabel = formatBalance({
    balance: amountOutOrStethTokens || 0n,
    decimals: baseToken.decimals,
    places: 4,
  });

  const isPositiveChangeInValue =
    amountOutOrStethTokens && amountOutOrStethTokens > openShort.baseAmountPaid;

  return (
    <div className="daisy-stat p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValueLabel?.toString()}
      </span>
      {amountOutOrStethTokens && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-stat-desc daisy-tooltip mt-1 flex text-xs",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            baseAmountOut: amountOutOrStethTokens,
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
