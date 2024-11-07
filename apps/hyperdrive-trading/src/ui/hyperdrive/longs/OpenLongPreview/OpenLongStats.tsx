import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
interface OpenLongStatsProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  activeToken: TokenConfig;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}
export function OpenLongStats({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  activeToken,
  asBase,
  vaultSharePrice,
}: OpenLongStatsProps): JSX.Element {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: baseToken.address,
  });
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const isBaseAmount =
    asBase ||
    appConfig.yieldSources[hyperdrive.yieldSource].isSharesPeggedToBase;
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
    <div className="flex flex-row justify-between px-4 py-8">
      <PrimaryStat
        label="Your Fixed Rate"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span className="text-h3 font-bold">
              {bondAmount > 0 ? (
                `${formatRate({
                  rate: calculateAprFromPrice({
                    positionDuration:
                      hyperdrive.poolConfig.positionDuration || 0n,
                    baseAmount: amountPaidInBase,
                    bondAmount: bondAmount,
                  }),
                })}`
              ) : fixedApr?.formatted ? (
                `${fixedApr.formatted}`
              ) : (
                <Skeleton width={100} />
              )}
            </span>
          )
        }
        valueUnit="APR"
        subValue={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            `Matures on ${formatDate(Date.now() + termLengthMS)}`
          )
        }
        valueContainerClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end"
      />
      <div className="daisy-divider daisy-divider-horizontal mx-0" />
      <PrimaryStat
        label="Receive at Maturity"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames(
                "flex items-end border font-bold leading-none",
                {
                  "text-base-content/80": !amountPaid,
                },
              )}
            >
              <img src={baseToken.iconUrl} className="mr-1 h-8 rounded-full" />
              <span className="inline-block border align-baseline leading-none">
                {`${formatBalance({
                  balance: amountPaidInBase + yieldAtMaturity,
                  decimals: baseToken.decimals,
                  places: baseToken.places,
                })}`}
              </span>
              <p className="ml-1 inline-block align-baseline leading-none">
                {baseToken.symbol}
              </p>
            </span>
          )
        }
        subValue={
          // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, term length is displayed instead.
          isTestnetChain(hyperdrive.chainId)
            ? `Term: ${numDays} days`
            : `$${formatBalance({
                balance: baseTokenPrice
                  ? fixed(
                      amountPaidInBase + yieldAtMaturity,
                      baseToken.decimals,
                    ).mul(baseTokenPrice).bigint
                  : 0n,
                decimals: baseToken.decimals,
                places: 2,
              })}`
        }
      />
    </div>
  );
}
