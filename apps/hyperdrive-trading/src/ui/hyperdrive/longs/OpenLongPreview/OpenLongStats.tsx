import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  getHyperdriveConfig,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { calculateAprFromPrice } from "@delvtech/hyperdrive-js";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
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
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
  activeToken: TokenConfig;
}
export function OpenLongStats({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  asBase,
  vaultSharePrice,
  activeToken,
}: OpenLongStatsProps): JSX.Element {
  let finalAmountPaid = amountPaid;

  const depositAssets = getDepositAssets(
    getHyperdriveConfig({
      hyperdriveChainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      appConfig,
    }),
  );

  const isZapToken = !depositAssets.some(
    (asset) => asset.address === activeToken.address,
  );

  const { fiatPrice: zapTokenPrice } = useTokenFiatPrice({
    chainId: 1,
    tokenAddress: activeToken.address,
    enabled: isZapToken,
  });

  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    chainId: 1,
    tokenAddress: baseToken.address,
    enabled: true,
  });
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  if (isZapToken && zapTokenPrice && baseTokenPrice) {
    const fiatValueOfZapAmount = fixed(zapTokenPrice).mul(amountPaid, 6);
    const zapAmountInBase = fiatValueOfZapAmount.div(baseTokenPrice);
    const slipageAmount = parseFixed("0.005");
    finalAmountPaid = parseFixed("1")
      .sub(slipageAmount)
      .mul(zapAmountInBase).bigint;
  }

  const isBaseAmount = asBase || hyperdrive.isSharesPeggedToBase;
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
                    baseAmount: finalAmountPaid,
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
              className={classNames("flex items-baseline text-h3 font-bold", {
                "text-base-content/80": !amountPaid,
              })}
            >
              <img src={baseToken.iconUrl} className="mr-1 h-8 rounded-full" />
              {`${formatBalance({
                balance: amountPaidInBase + yieldAtMaturity,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}`}
            </span>
          )
        }
        valueUnit={`${baseToken.symbol}`}
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
