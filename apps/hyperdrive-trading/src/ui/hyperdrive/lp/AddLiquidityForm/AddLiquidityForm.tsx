import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  HyperdriveConfig,
  TokenConfig,
  getBaseToken,
  getYieldSource,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js";
import classNames from "classnames";
import { MouseEvent, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { formatRate } from "src/base/formatRate";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useTokenDepositOptions } from "src/ui/hyperdrive/hooks/useTokenDepositOptions";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { PositionPicker } from "src/ui/markets/PositionPicker";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip/RewardsTooltip";
import { useAddLiquidityRewards } from "src/ui/rewards/hooks/useAddLiquidityRewards";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { useAccount, useChainId } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  onAddLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function AddLiquidityForm({
  hyperdrive,
  onAddLiquidity,
}: AddLiquidityFormProps): ReactElement {
  const connectedChainId = useChainId();
  const appConfig = useAppConfigForConnectedChain();
  const { address: account } = useAccount();
  const { marketState } = useMarketState({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { baseTokenDepositEnabled, baseToken, tokenOptions } =
    useTokenDepositOptions({
      hyperdrive,
      account,
      appConfig,
    });

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
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
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

  // Plausible event props
  const formName = "Add Liquidity";
  const chainId = hyperdrive.chainId;
  const poolAddress = hyperdrive.address;

  return (
    <TransactionView
      tokenInput={
        <TokenInput
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
            <TokenPicker
              tokens={tokenOptions}
              activeTokenAddress={activeToken.address}
              onChange={(tokenAddress) => {
                window.plausible("formChange", {
                  props: {
                    inputName: "token",
                    inputValue: tokenAddress,
                    formName,
                    chainId,
                    poolAddress,
                    connectedWallet: account,
                  },
                });
                setActiveToken(tokenAddress);
                setAmount("0");
              }}
            />
          }
          settings={
            <div className="mb-3 flex w-full items-center justify-between">
              <PositionPicker hyperdrive={hyperdrive} />
              <SlippageSettings
                onSlippageChange={(slippage) => {
                  window.plausible("formChange", {
                    props: {
                      inputName: "slippage",
                      inputValue: slippage,
                      formName,
                      chainId,
                      poolAddress,
                      connectedWallet: account,
                    },
                  });
                  setSlippage(slippage);
                }}
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
          onChange={(newAmount) => {
            window.plausible("formChange", {
              props: {
                inputName: "amount",
                inputValue: newAmount,
                formName,
                chainId,
                poolAddress,
                connectedWallet: account,
              },
            });
            setAmount(newAmount);
          }}
        />
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <div className="flex-1">
            <LpApyStat hyperdrive={hyperdrive} />
          </div>
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <div className="flex-1">
            <YouReceiveStat
              addLiquidityPreviewStatus={addLiquidityPreviewStatus}
              lpSharesOut={lpSharesOut}
              hyperdrive={hyperdrive}
            />
          </div>
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
  const appConfig = useAppConfigForConnectedChain();
  const { address: account } = useAccount();
  const { lpShares: lpSharesBalanceOf } = useLpShares({
    account,
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const baseToken = getBaseToken({
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
      alignment="right"
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
      valueContainerClassName="flex items-end flex-wrap"
      unitClassName="text-xs mb-1"
      value={
        addLiquidityPreviewStatus === "loading" ? (
          <Skeleton width={100} />
        ) : (
          <span
            className={classNames("text-h3", {
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
          </span>
        )
      }
    />
  );
}

function LpApyStat({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  const appConfig = useAppConfigForConnectedChain();
  const isNewPool = useIsNewPool({ hyperdrive });
  const { lpApy, lpApyStatus } = useLpApy({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { rewards } = useAddLiquidityRewards({ hyperdriveConfig: hyperdrive });

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });
  return (
    <PrimaryStat
      valueLoading={!lpApy && lpApyStatus === "loading"}
      label="LP APY"
      value={(() => {
        return (
          <span className="text-h3 font-bold">
            {isNewPool ? (
              "✨New✨"
            ) : rewards?.length ? (
              <RewardsTooltip
                position="addLiquidity"
                showMiles
                hyperdriveAddress={hyperdrive.address}
                baseRate={lpApy?.lpApy}
                netRate={lpApy?.netLpApy}
                chainId={hyperdrive.chainId}
              >
                <span className="gradient-text">
                  {formatRate({ rate: lpApy?.netLpApy ?? 0n })}
                </span>
                ⚡
              </RewardsTooltip>
            ) : (
              <span className="gradient-text">
                {formatRate({ rate: lpApy?.netLpApy ?? 0n })}
              </span>
            )}
          </span>
        );
      })()}
      tooltipContent="The projected annual percentage yield for providing liquidity."
      tooltipPosition="left"
      subValue={
        vaultRateStatus === "success" && vaultRate ? (
          <div>
            {yieldSource.shortName} @{" "}
            {isNewPool
              ? "✨New✨"
              : `${formatRate({ rate: vaultRate.netVaultRate })} APY`}
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
