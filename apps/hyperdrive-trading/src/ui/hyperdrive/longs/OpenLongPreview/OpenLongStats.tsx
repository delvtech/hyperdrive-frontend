import { fixed } from "@delvtech/fixed-point-wasm";
import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import { findDisplayBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrices";
import { useChainId } from "wagmi";
interface OpenLongStatsProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}
export function OpenLongStats({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  asBase,
  vaultSharePrice,
}: OpenLongStatsProps): JSX.Element {
  const appConfig = useAppConfig();
  const displayBaseToken = findDisplayBaseToken({
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const chainId = useChainId();
  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    tokenAddress: hyperdrive.poolConfig.baseToken,
  });
  const { fixedApr } = useFixedRate(hyperdrive.address);

  const isBaseAmount =
    asBase ||
    appConfig.yieldSources[hyperdrive.yieldSource].isSharesPeggedToBase;
  const amountPaidInBase = isBaseAmount
    ? amountPaid
    : convertSharesToBase({
        sharesAmount: amountPaid,
        vaultSharePrice: vaultSharePrice,
        decimals: hyperdrive.decimals,
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
            <>
              {bondAmount > 0
                ? `${formatRate(
                    calculateAprFromPrice({
                      positionDuration:
                        hyperdrive.poolConfig.positionDuration || 0n,
                      baseAmount: amountPaidInBase,
                      bondAmount: bondAmount,
                    }),
                  )}`
                : `${fixedApr?.formatted}`}
            </>
          )
        }
        valueUnit="APR"
        subValue={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <>{`${formatBalance({
              balance: bondAmount,
              decimals: hyperdrive.decimals,
              places: displayBaseToken?.places,
            })} hy${displayBaseToken?.symbol}`}</>
          )
        }
        valueClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end"
      />
      <div className="daisy-divider daisy-divider-horizontal mx-0" />
      <PrimaryStat
        label="Value at Maturity"
        value={
          openLongPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames("flex", {
                "text-base-content/80": !amountPaid,
              })}
            >
              <img
                src={displayBaseToken?.iconUrl}
                className="mr-1 h-9 rounded-full p-1"
              />
              {`${formatBalance({
                balance: amountPaidInBase + yieldAtMaturity,
                decimals: hyperdrive.decimals,
                places: displayBaseToken?.places,
              })}`}
            </span>
          )
        }
        valueUnit={`${displayBaseToken?.symbol}`}
        valueClassName="text-base-content flex items-end"
        subValue={
          // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, term length is displayed instead.

          isTestnetChain(chainId)
            ? `Term: ${numDays} days`
            : `$${formatBalance({
                balance: baseTokenPrice
                  ? fixed(
                      amountPaidInBase + yieldAtMaturity,
                      hyperdrive.decimals,
                    ).mul(baseTokenPrice).bigint
                  : 0n,
                decimals: hyperdrive.decimals,
                places: 2,
              })}`
        }
      />
    </div>
  );
}
