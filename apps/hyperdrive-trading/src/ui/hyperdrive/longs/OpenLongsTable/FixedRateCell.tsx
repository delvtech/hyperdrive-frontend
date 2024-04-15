import {
  calculateFixedRateFromOpenLong,
  calculateMatureLongYieldAfterFees,
} from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

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
  const { poolConfig, baseToken: baseTokenAddress } = hyperdrive;
  const baseToken = findBaseToken({
    baseTokenAddress,
    tokens: appConfig.tokens,
  });

  const fixedRate = calculateFixedRateFromOpenLong({
    baseAmount: baseAmountPaid,
    bondAmount,
    positionDuration: poolConfig?.positionDuration || 0n,
    decimals: baseToken.decimals,
  });

  const yieldAfterFlatFee = calculateMatureLongYieldAfterFees({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: baseToken.decimals,
  });

  return (
    <div
      className={classNames("daisy-stat flex p-0", { "flex-col": vertical })}
    >
      <span className="daisy-stat-value text-md font-bold">
        {formatRate(fixedRate)}%
      </span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className={
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs text-success"
        }
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
