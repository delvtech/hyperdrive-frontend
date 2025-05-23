import {
  getBaseToken,
  getToken,
  getYieldSource,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ClockIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Well } from "src/ui/base/components/Well/Well";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { AssetStack } from "src/ui/markets/AssetStack";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { PINNED_POOLS } from "src/ui/markets/hooks/usePoolsList";
import { FixedAprCta } from "src/ui/markets/PoolRow/FixedAprCta";
import { LpApyCta } from "src/ui/markets/PoolRow/LpApyCta";
import { VariableApyCta } from "src/ui/markets/PoolRow/VariableApyCta";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { gnosis, mainnet } from "viem/chains";

export interface PoolRowProps {
  hyperdrive: HyperdriveConfig;
}

const pinnedBorderClassNames: Record<number, string> = {
  [mainnet.id]:
    "!border !border-[#617fea]/30 !bg-[#151f2b] !shadow-lg !shadow-[#617fea]/5",
  [gnosis.id]:
    "!border !border-primary/20 !bg-[#102223] !shadow-lg !shadow-primary/5",
};

export function PoolRow({ hyperdrive }: PoolRowProps): ReactElement {
  const navigate = useNavigate();
  const appConfig = useAppConfigForConnectedChain();
  const { isFlagEnabled: isNewDesign } = useFeatureFlag("new-design");
  const { chains } = appConfig;
  const chainInfo = chains[hyperdrive.chainId];

  const isPinned = PINNED_POOLS.includes(hyperdrive.address);

  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    appConfig,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  // Display TVL as base value on testnet due to lack of reliable fiat pricing.
  // On mainnet and others, use DeFiLlama's fiat price.
  const { presentValue } = usePresentValue({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const isFiatSupported = !isTestnetChain(chainInfo.id) && presentValue?.fiat;
  let tvlLabel = `${formatCompact({
    value: presentValue?.base || 0n,
    decimals: hyperdrive.decimals,
  })} ${baseToken.symbol}`;

  if (isFiatSupported) {
    tvlLabel = `$${formatCompact({
      value: presentValue?.fiat || 0n,
      decimals: hyperdrive.decimals,
    })}`;
  }
  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

  return (
    <Well
      as="div"
      block
      className={classNames({
        [pinnedBorderClassNames[hyperdrive.chainId]]: isPinned,
      })}
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
      <div className="flex flex-col justify-between gap-6 pt-2 sm:pt-0 lg:flex-row lg:gap-0">
        {/* Left side */}
        <div className="flex shrink-0 flex-col items-center sm:flex-row sm:gap-6 lg:w-[440px]">
          <div
            className={
              // Set a fixed width so pools with one or two asset icons still
              // line up
              "w-16"
            }
          >
            <AssetStack
              hyperdriveAddress={hyperdrive.address}
              hyperdriveChainId={hyperdrive.chainId}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 className="mb-4 text-center text-h4 sm:mb-0 sm:text-left">
              {yieldSource.shortName}
            </h4>
            <div className="flex flex-col gap-2 border-y border-gray-600 p-4 sm:gap-1.5 sm:border-none sm:p-0">
              <div className="flex flex-wrap justify-center gap-5 gap-y-2 sm:justify-start">
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
                  <img
                    className="size-4 rounded-full"
                    src={chainInfo.iconUrl}
                  />
                  <span className="text-neutral-content">{chainInfo.name}</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-5 gap-y-2 sm:justify-start">
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-gray-400/60">Deposit</span>{" "}
                  <span className="text-neutral-content">
                    {getDepositAssets(hyperdrive, appConfig)
                      .map(({ symbol }) => symbol)
                      .join(", ")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-gray-400/60">Withdraw</span>{" "}
                  <span className="text-neutral-content">
                    {(() => {
                      // TODO: Make a getWithdrawAssets util
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
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-12 lg:items-start lg:justify-start">
          <div
            className={
              isNewDesign
                ? "size-full border-r border-gray-500/20 lg:w-[112px]"
                : "w-full lg:w-[112px]"
            }
          >
            <FixedAprCta hyperdrive={hyperdrive} />
          </div>
          <div
            className={
              isNewDesign
                ? "size-full border-r border-gray-500/20 lg:w-[181px]"
                : "w-full lg:w-[181px]"
            }
          >
            <VariableApyCta hyperdrive={hyperdrive} />
          </div>
          <div
            className={
              isNewDesign ? "size-full lg:w-[122px]" : "w-full lg:w-[122px]"
            }
          >
            <LpApyCta hyperdrive={hyperdrive} />
          </div>
        </div>
      </div>
    </Well>
  );
}
