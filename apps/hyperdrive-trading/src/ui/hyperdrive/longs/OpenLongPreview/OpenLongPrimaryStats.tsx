import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
interface OpenLongPrimaryStatsProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  activeToken: TokenConfig<any>;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}
export function OpenLongPrimaryStats({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  activeToken,
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
  const yieldAtMaturity = bondAmount - amountPaidInBase;
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const numDays = convertMillisecondsToDays(termLengthMS);
  return (
    <div className="flex flex-row justify-evenly">
      <PrimaryStat
        label="Your Fixed Rate"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span>
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
        subValue={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames({
                "text-base-content/80": !bondAmount,
              })}
            >{`${formatBalance({
              balance: bondAmount,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })} hy${baseToken.symbol}`}</span>
          )
        }
        valueStyle="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
      />
      <div className="daisy-divider daisy-divider-horizontal" />
      <PrimaryStat
        label="Value at Maturity"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames("flex flex-row", {
                "text-base-content/80": !amountPaid,
              })}
            >
              <img
                src={activeToken.iconUrl}
                className="mr-1 h-9 rounded-full p-1"
              />
              {`${formatBalance({
                balance: amountPaidInBase + yieldAtMaturity,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })} `}
            </span>
          )
        }
        valueUnit={`${activeToken.symbol}`}
        valueStyle="text-base-content"
        subValue={`Term: ${numDays} days`}
      />
    </div>
  );
}
