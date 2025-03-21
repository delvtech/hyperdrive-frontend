import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
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
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
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

  const appConfig = useAppConfigForConnectedChain();
  const depositAssets = getDepositAssets(
    getHyperdriveConfig({
      hyperdriveChainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      appConfig,
    }),
    appConfig,
  );

  const isZapToken = !depositAssets.some(
    (asset) => asset.address === activeToken.address,
  );

  const { fiatPrice: zapTokenPrice } = useTokenFiatPrice({
    // This hook should only be enabled if the token is a zap token.
    // For testing purposes we are grabbing the token price from mainnet.
    chainId: 707,
    tokenAddress: activeToken.address,
    enabled: isZapToken,
  });

  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    // For testing purposes on zaps we are grabbing the token price from mainnet.
    chainId: isZapToken ? 707 : hyperdrive.chainId,
    tokenAddress: baseToken.address,
  });
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

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

  if (isZapToken && zapTokenPrice && baseTokenPrice) {
    const fiatValueOfZapAmount = fixed(zapTokenPrice).mul(
      amountPaid,
      activeToken.decimals,
    );
    const zapAmountInBase = fiatValueOfZapAmount.div(baseTokenPrice);
    const slipageAmount = parseFixed("0.005");
    finalAmountPaid = parseFixed("1")
      .sub(slipageAmount)
      .mul(zapAmountInBase).bigint;
  } else {
    finalAmountPaid = amountPaidInBase;
  }

  return (
    <div className="flex flex-row justify-between px-4 py-8">
      <PrimaryStat
        label="Fixed APR"
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
                    // TODO: When zapping, the final amount paid should be converted to base
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
        alignment="right"
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
              <Tooltip
                tooltip={baseToken.symbol}
                className="self-center font-normal"
              >
                <img
                  src={baseToken.iconUrl}
                  className="mr-1.5 size-7 rounded-full"
                />
              </Tooltip>
              {`${formatBalance({
                balance: amountPaidInBase + yieldAtMaturity,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}`}
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
