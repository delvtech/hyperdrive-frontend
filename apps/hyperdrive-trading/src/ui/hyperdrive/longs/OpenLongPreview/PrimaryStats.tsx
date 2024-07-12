import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
interface OpenLongPrimaryStatsProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  spotRateAfterOpen: bigint | undefined;
  activeToken: TokenConfig<any>;
  curveFee: bigint | undefined;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}
export function OpenLongPrimaryStats({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  spotRateAfterOpen,
  activeToken,
  curveFee,
  asBase,
  vaultSharePrice,
}: OpenLongPrimaryStatsProps): JSX.Element {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const { fixedApr } = useFixedRate(hyperdrive.address);

  const isBaseAmount = asBase || sharesToken.extensions.isSharesPeggedToBase;
  const amountPaidInBase = isBaseAmount
    ? amountPaid
    : convertSharesToBase({
        sharesAmount: amountPaid,
        vaultSharePrice: vaultSharePrice,
        decimals: baseToken.decimals,
      });
  return (
    <div className="flex flex-row justify-evenly">
      <PrimaryStat
        label="Your Fixed Rate"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span className="gradient-text">
              {bondAmount > 0
                ? `${formatRate(
                    calculateAprFromPrice({
                      positionDuration:
                        hyperdrive.poolConfig.positionDuration || 0n,
                      baseAmount: amountPaidInBase,
                      bondAmount: bondAmount,
                    }),
                    baseToken.decimals,
                  )}%`
                : `${fixedApr?.formatted}%`}
            </span>
          )
        }
        valueUnit="APR"
        subValue="1,017 hyDai"
        valueStyle="gradient-text-reversed"
      />
      <div className="daisy-divider daisy-divider-horizontal" />
      <PrimaryStat
        label="Value at Maturity"
        value="10.07 %"
        valueUnit="APR"
        valueStyle="text-base-content"
      />
    </div>
  );
}

function PrimaryStat({
  label,
  value,
  valueUnit,
  subValue,
  valueStyle,
}: {
  label: string;
  value: ReactNode;
  valueUnit: string;
  subValue?: string;
  valueStyle?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-neutral-content">{label}</p>
      <div className={classNames("flex flex-row items-end")}>
        <div className={classNames("flex items-end", valueStyle)}>
          <p className="text-h3 font-bold">{value}</p>
          <p className="ml-2">{valueUnit}</p>
        </div>
      </div>
      {subValue && <p className="text-neutral-content">{subValue}</p>}
    </div>
  );
}
