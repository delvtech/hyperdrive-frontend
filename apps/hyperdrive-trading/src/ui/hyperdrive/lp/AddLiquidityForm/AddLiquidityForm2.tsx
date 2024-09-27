import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  HyperdriveConfig,
  TokenConfig,
  appConfig,
  findBaseToken,
  findToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { MouseEvent, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { formatRate } from "src/base/formatRate";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { PositionPicker } from "src/ui/markets/PositionPicker";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { useAccount, useChainId } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  onAddLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function AddLiquidityForm2({
  hyperdrive,
  onAddLiquidity,
}: AddLiquidityFormProps): ReactElement {
  const connectedChainId = useChainId();
  const { address: account } = useAccount();
  const { marketState } = useMarketState({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

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

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    decimals: hyperdrive.decimals,
  });

  const baseTokenDepositEnabled =
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;
  const shareTokenDepositsEnabled =
    hyperdrive.depositOptions.isShareTokenDepositsEnabled;

  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const tokenOptions = [];
  if (baseTokenDepositEnabled) {
    tokenOptions.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (sharesToken && shareTokenDepositsEnabled) {
    tokenOptions.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: baseTokenDepositEnabled
        ? baseToken.address
        : hyperdrive.poolConfig.vaultSharesToken,
      tokens: tokenOptions.map((token) => token.tokenConfig),
    });

  const {
    amount: depositAmount,
    amountAsBigInt: depositAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
  });

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
    tokenChainId: activeToken.chainId,
    enabled: requiresAllowance,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    requiresAllowance,
    allowance: activeTokenAllowance,
    amount: depositAmountAsBigInt,
  });

  const hasEnoughBalance = getHasEnoughBalance({
    balance: activeTokenBalance?.value,
    amount: depositAmountAsBigInt,
  });

  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeToken.decimals });

  const isBaseActiveToken = activeToken.address === baseToken.address;

  // if depositing in shares, we need to also convert the minLpSharePrice to be
  // priced in terms of shares
  const lpSharePrice = !isBaseActiveToken
    ? fixed(poolInfo?.lpSharePrice || 0n, baseToken.decimals).div(
        poolInfo?.vaultSharePrice || 0n,
        baseToken.decimals,
      ).bigint
    : poolInfo?.lpSharePrice || 0n;

  const minLpSharePriceAfterSlippage = adjustAmountByPercentage({
    amount: lpSharePrice,
    percentage: slippageAsBigInt,
    decimals: activeToken.decimals,
    direction: "down",
  });

  // We can set the minAPR and maxAPR to +/- 5% of the current spot rate.
  // For example, if the fixed rate is at 10%, the minApr would be set to 9.5%
  // and the maxApr would be set to 10.5%.
  // fixed rate @ 10% = .1
  // rate gaurd @ 5% = 0.05
  // minApr = .1 * (1 - .05)
  // maxApr = .1 * (1 + .05)
  const rateGuard = parseFixed(0.05).bigint; // 5% as an 18 digit number
  const minApr = fixedApr
    ? fixed(fixedApr.apr).mul(BigInt(1e18) - rateGuard).bigint
    : undefined;
  const maxApr = fixedApr
    ? fixed(fixedApr.apr, 18).mul(BigInt(1e18) + rateGuard).bigint
    : undefined;

  const addLiquidityParams = {
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    contribution: depositAmountAsBigInt,
    minApr,
    maxApr,
    minLpSharePrice: minLpSharePriceAfterSlippage,
    asBase: isBaseActiveToken,
    destination: account,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
  };

  const {
    lpSharesOut,
    status: addLiquidityPreviewStatus,
    previewAddLiquidityError,
  } = usePreviewAddLiquidity(addLiquidityParams);

  const { fiatPrice: activeTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeToken.address,
    chainId: activeToken.chainId,
  });
  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    ...addLiquidityParams,
    chainId: hyperdrive.chainId,
    enabled:
      hasEnoughAllowance &&
      hasEnoughBalance &&
      addLiquidityPreviewStatus === "success",
    onSubmitted: () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)["add-lp"]?.close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInputTwo
          name={activeToken.symbol}
          variant="lighter"
          value={depositAmount ?? ""}
          maxValue={activeTokenBalance?.formatted}
          inputLabel="You deposit"
          bottomLeftElement={
            // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
            !isTestnetChain(hyperdrive.chainId) ? (
              <label className="text-sm text-neutral-content">
                {`$${formatBalance({
                  balance:
                    activeTokenPrice && depositAmountAsBigInt
                      ? fixed(depositAmountAsBigInt, activeToken.decimals).mul(
                          activeTokenPrice,
                        ).bigint
                      : 0n,
                  decimals: activeToken.decimals,
                  places: 2,
                })}`}
              </label>
            ) : null
          }
          token={
            <TokenPickerTwo
              tokens={tokenOptions}
              activeTokenAddress={activeToken.address}
              onChange={(tokenAddress) => {
                setActiveToken(tokenAddress);
                setAmount("0");
              }}
            />
          }
          settings={
            <div className="mb-3 flex w-full items-center justify-between">
              <PositionPicker hyperdrive={hyperdrive} />
              <SlippageSettingsTwo
                onSlippageChange={setSlippage}
                slippage={slippage}
                activeOption={activeSlippageOption}
                onActiveOptionChange={setActiveSlippageOption}
                tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
              />
            </div>
          }
          bottomRightElement={
            <div className="flex flex-col gap-1 text-sm text-neutral-content">
              <span>
                {activeTokenBalance
                  ? `Balance: ${formatBalance({
                      balance: activeTokenBalance?.value,
                      decimals: activeToken.decimals,
                      places: activeToken.places,
                    })}`
                  : undefined}
              </span>
            </div>
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <YouReceiveStat
            addLiquidityPreviewStatus={addLiquidityPreviewStatus}
            lpSharesOut={lpSharesOut}
            hyperdrive={hyperdrive}
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <LpApyStat hyperdrive={hyperdrive} />
        </div>
      }
      disclaimer={(() => {
        if (
          previewAddLiquidityError?.message.includes(
            "Not enough lp shares minted.",
          )
        ) {
          return (
            <p className="text-center text-sm text-error">
              Not enough LP shares minted. Please adjust your slippage to add
              liquidity.
            </p>
          );
        }
      })()}
      actionButton={(() => {
        if (marketState?.isPaused) {
          return (
            <InvalidTransactionButton wide>
              This market is paused
            </InvalidTransactionButton>
          );
        }

        if (!account) {
          return <ConnectWalletButton wide />;
        }

        if (connectedChainId !== hyperdrive.chainId) {
          return (
            <SwitchNetworksButton
              targetChainId={hyperdrive.chainId}
              targetChainName={appConfig.chains[hyperdrive.chainId].name}
            />
          );
        }
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }
        if (
          previewAddLiquidityError?.message.includes("MinimumTransactionAmount")
        ) {
          return (
            <InvalidTransactionButton wide>
              Deposit must be greater than{" "}
              {formatBalance({
                balance: hyperdrive.poolConfig.minimumTransactionAmount,
                decimals: hyperdrive.decimals,
                places: activeToken.places * 2,
              })}{" "}
              {activeToken.symbol}
            </InvalidTransactionButton>
          );
        }

        if (!hasEnoughBalance || marketState?.isPaused) {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Add Liquidity
            </button>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={hyperdrive.address}
              token={activeToken}
              amountAsBigInt={depositAmountAsBigInt}
              amount={depositAmount}
            />
          );
        }

        if (addLiquidityStatus === "loading") {
          return <LoadingButton label="Adding liquidity" variant="primary" />;
        }

        return (
          <button
            disabled={!addLiquidity}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              addLiquidity?.();
              onAddLiquidity?.(e);
            }}
          >
            Add liquidity
          </button>
        );
      })()}
    />
  );
}

function YouReceiveStat({
  addLiquidityPreviewStatus,
  lpSharesOut,
  hyperdrive,
}: {
  addLiquidityPreviewStatus: string;
  lpSharesOut: bigint | undefined;
  hyperdrive: HyperdriveConfig;
}) {
  const { address: account } = useAccount();
  const { lpShares: lpSharesBalanceOf } = useLpShares({
    account,
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const poolShare = calculatePoolShare({
    lpSharesBalanceOf,
    lpSharesOut,
    lpSharesTotalSupply,
    baseToken,
  });
  return (
    <PrimaryStat
      label="You receive"
      subValue={
        addLiquidityPreviewStatus === "loading" ? (
          <Skeleton width={100} />
        ) : (
          <span
            className={classNames({
              "text-base-content/80": !poolShare,
            })}
          >
            {poolShare
              ? `${fixed(poolShare).format({
                  decimals: 4,
                  rounding: "trunc",
                })}% of total liquidity`
              : undefined}
          </span>
        )
      }
      valueUnit={`${baseToken.symbol}-LP`}
      valueContainerClassName="flex items-end"
      valueClassName="text-h3 font-bold"
      unitClassName="text-xs mb-1"
      value={
        addLiquidityPreviewStatus === "loading" ? (
          <Skeleton width={100} />
        ) : (
          <p
            className={classNames({
              "text-base-content/80": !lpSharesOut,
              "font-bold": lpSharesOut,
            })}
          >
            {lpSharesOut
              ? `${formatBalance({
                  balance: lpSharesOut,
                  decimals: hyperdrive.decimals,
                  places: baseToken.places,
                })}`
              : "0"}
          </p>
        )
      }
    />
  );
}

function LpApyStat({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  const isNewPool = useIsNewPool({ hyperdrive });
  const { lpApy, lpApyStatus } = useLpApy({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const showSkeleton = !lpApy && lpApyStatus === "loading";

  return (
    <PrimaryStat
      label="LP APY"
      value={(() => {
        if (showSkeleton) {
          return <Skeleton />;
        }
        if (lpApy === undefined || lpApy.isNew) {
          return <div className="flex gap-2">✨New✨</div>;
        }

        return `${formatRate(lpApy?.lpApy)}`;
      })()}
      tooltipContent="The annual percentage yield projection for providing liquidity."
      tooltipPosition="left"
      valueContainerClassName={classNames({
        "bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent":
          !isNewPool, // Don't use gradient text when displaying NEW, the emojis give enough emphasis.
      })}
      valueClassName="text-h3 font-bold"
      subValue={
        vaultRateStatus === "success" && vaultRate ? (
          <div>
            {appConfig.yieldSources[hyperdrive.yieldSource].shortName} @{" "}
            {vaultRate.formatted || 0} APY
          </div>
        ) : (
          <Skeleton className="w-42 h-8" />
        )
      }
    />
  );
}

function calculatePoolShare({
  lpSharesBalanceOf,
  lpSharesOut,
  lpSharesTotalSupply,
  baseToken,
}: {
  lpSharesBalanceOf: bigint | undefined;
  lpSharesOut: bigint | undefined;
  lpSharesTotalSupply: bigint | undefined;
  baseToken: TokenConfig;
}) {
  if (!lpSharesOut || !lpSharesTotalSupply || lpSharesBalanceOf === undefined) {
    return;
  }
  return calculateRatio({
    a: lpSharesOut,
    b: lpSharesTotalSupply + lpSharesOut,
    decimals: baseToken.decimals,
  });
}
