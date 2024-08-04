import {
  calculateAprFromPrice,
  calculateMatureLongYieldAfterFees,
} from "@delvtech/hyperdrive-viem";
import { type HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import type { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";

export function FixedRateCell({
  baseAmountPaid,
  bondAmount,
  hyperdrive,
  vertical = false,
}: {
  baseAmountPaid: bigint;
  bondAmount: bigint;
  hyperdrive: HyperdriveConfig;
  vertical?: boolean;
}): ReactElement {
  const appConfig = useAppConfig();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { poolConfig, baseToken: baseTokenAddress } = hyperdrive;
  const baseToken = findBaseToken({
    baseTokenAddress,
    tokens: appConfig.tokens,
  });

  const fixedRate = calculateAprFromPrice({
    baseAmount: baseAmountPaid,
    bondAmount,
    positionDuration: poolConfig?.positionDuration || 0n,
  });

  const yieldAfterFlatFee = calculateMatureLongYieldAfterFees({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: baseToken.decimals,
  });

  return (
    <div
      className={classNames(
        "daisy-stat flex p-0",
        { "flex-col": vertical },
        {
          "w-16 items-end": !isTailwindSmallScreen,
        },
      )}
    >
      <span className="daisy-stat-value text-md font-bold">
        {formatRate(fixedRate)}
      </span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className="daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs text-success"
      >
        <span>{"+"}</span>
        {formatBalance({
          balance: yieldAfterFlatFee,
          decimals: baseToken.decimals,
          places: baseToken.places,
        })}{" "}
        {baseToken.symbol}
      </div>
    </div>
  );
}
