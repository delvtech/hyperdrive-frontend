import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ClockIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "@tanstack/react-router";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { Well } from "src/ui/base/components/Well/Well";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { AssetStack } from "src/ui/markets/AssetStack";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { FixedAprCta } from "src/ui/markets/PoolRow/FixedAprCta";
import { LpApyCta } from "src/ui/markets/PoolRow/LpApyCta";
import { YieldMultiplierCta } from "src/ui/markets/PoolRow/YieldMultiplierCta";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
export interface PoolRowProps {
  hyperdrive: HyperdriveConfig;
}

export function PoolRow({ hyperdrive }: PoolRowProps): ReactElement {
  const navigate = useNavigate();
  const { yieldSources, chains } = appConfig;
  const chainInfo = chains[hyperdrive.chainId];

  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  // Display TVL as base value on testnet due to lack of reliable fiat pricing.
  // On mainnet and others, use DeFiLlama's fiat price.
  const { presentValue } = usePresentValue({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const isFiatSupported = !isTestnetChain(chainInfo.id);
  const { fiatPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: isFiatSupported ? hyperdrive.poolConfig.baseToken : undefined,
  });
  let tvlLabel = `${formatCompact({
    value: presentValue || 0n,
    decimals: hyperdrive.decimals,
  })} ${baseToken.symbol}`;

  if (isFiatSupported) {
    const presentValueFiat =
      presentValue && fiatPrice && isFiatSupported
        ? fixed(presentValue, hyperdrive.decimals).mul(fiatPrice).bigint
        : 0n;
    tvlLabel = `$${formatCompact({
      value: presentValueFiat || 0n,
      decimals: hyperdrive.decimals,
    })}`;
  }

  return (
    <Well
      as="div"
      block
      onClick={() => {
        navigate({
          to: MARKET_DETAILS_ROUTE,
          resetScroll: true,
          params: {
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          },
        });
      }}
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6 lg:w-[440px]">
          <div
            className={
              // Set a fixed width so pools with one or two asset icons still
              // line up
              "w-16"
            }
          >
            <AssetStack hyperdriveAddress={hyperdrive.address} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 className="text-left">
              {yieldSources[hyperdrive.yieldSource].shortName}
            </h4>
            <div className="flex flex-wrap gap-5 gap-y-20">
              <div className="flex items-center gap-1.5 text-sm">
                <ClockIcon className="size-4 text-gray-400/60" />{" "}
                <span className="text-neutral-content">
                  {formatTermLength2(
                    Number(hyperdrive.poolConfig.positionDuration * 1000n),
                  )}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">TVL</span>{" "}
                <span className="font-dmMono text-neutral-content">
                  {tvlLabel}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <img className="size-4 rounded-full" src={chainInfo.iconUrl} />
                <span className="text-neutral-content">{chainInfo.name}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 gap-y-2">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">Deposit</span>{" "}
                <span className="text-neutral-content">
                  {(() => {
                    const depositTokens = [];
                    if (hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
                      depositTokens.push(baseToken.symbol);
                    }
                    if (hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
                      depositTokens.push(sharesToken?.symbol);
                    }
                    return depositTokens.join(", ");
                  })()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">Withdraw</span>{" "}
                <span className="text-neutral-content">
                  {(() => {
                    const withdrawTokens = [];
                    if (
                      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
                    ) {
                      withdrawTokens.push(baseToken.symbol);
                    }
                    if (
                      hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled
                    ) {
                      withdrawTokens.push(sharesToken?.symbol);
                    }
                    return withdrawTokens.join(", ");
                  })()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex shrink-0 justify-between gap-10 lg:items-end lg:justify-start">
          <FixedAprCta hyperdrive={hyperdrive} />
          <YieldMultiplierCta hyperdrive={hyperdrive} />
          <LpApyCta hyperdrive={hyperdrive} />
        </div>
      </div>
    </Well>
  );
}
