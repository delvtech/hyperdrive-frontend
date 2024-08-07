import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  EmptyExtensions,
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { MouseEvent, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrices } from "src/ui/token/hooks/useTokenFiatPrices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";
import { useAccount, useChainId } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  onAddLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function AddLiquidityForm({
  hyperdrive,
  onAddLiquidity,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const chainId = useChainId();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: sharesToken.address,
    decimals: sharesToken.decimals,
  });

  const baseTokenDepositEnabled =
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;
  const shareTokenDepositsEnabled =
    hyperdrive.depositOptions.isShareTokenDepositsEnabled;
  const tokenOptions = [];

  const { fixedApr } = useFixedRate(hyperdrive.address);

  if (baseTokenDepositEnabled) {
    tokenOptions.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (shareTokenDepositsEnabled) {
    tokenOptions.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  const { lpShares: lpSharesBalanceOf } = useLpShares({
    account,
    hyperdriveAddress: hyperdrive.address,
  });

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: baseTokenDepositEnabled
        ? baseToken.address
        : sharesToken.address,
      tokens: baseTokenDepositEnabled
        ? [baseToken, sharesToken]
        : [sharesToken],
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

  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });
  const poolShareAfterDeposit = calculatePoolShareAfterDeposit(
    lpSharesBalanceOf,
    lpSharesOut,
    lpSharesTotalSupply,
    hyperdrive,
    baseToken,
  );
  const tokenPrices = useTokenFiatPrices([activeToken.address]);
  const activeTokenPrice =
    tokenPrices?.[activeToken.address.toLowerCase() as Address];
  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    ...addLiquidityParams,
    enabled:
      hasEnoughAllowance &&
      hasEnoughBalance &&
      addLiquidityPreviewStatus === "success",
    onSubmitted: () => {
      (window as any)["add-lp"].close();
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
          value={depositAmount ?? ""}
          maxValue={activeTokenBalance?.formatted}
          inputLabel="You deposit"
          bottomLeftElement={
            // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
            !isTestnetChain(chainId) ? (
              <label className="text-sm text-neutral-content">
                {`$${formatBalance({
                  balance:
                    activeTokenPrice && depositAmountAsBigInt
                      ? fixed(depositAmountAsBigInt, activeToken.decimals).mul(
                          activeTokenPrice,
                          activeToken.decimals,
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
            <SlippageSettingsTwo
              onSlippageChange={setSlippage}
              slippage={slippage}
              activeOption={activeSlippageOption}
              onActiveOptionChange={setActiveSlippageOption}
              tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
            />
          }
          bottomRightElement={
            <div className="flex flex-col gap-1 text-xs text-neutral-content">
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
          <PrimaryStat
            label="You receive"
            subValue={
              addLiquidityPreviewStatus === "loading" ? (
                <Skeleton width={100} />
              ) : (
                <span
                  className={classNames({
                    "text-base-content/80": !poolShareAfterDeposit,
                  })}
                >
                  {poolShareAfterDeposit
                    ? `${fixed(
                        poolShareAfterDeposit,
                        activeToken.decimals,
                      ).format({
                        decimals: 4,
                        rounding: "trunc",
                      })}% of total liquidity`
                    : undefined}
                </span>
              )
            }
            valueUnit={`${baseToken.symbol}-LP`}
            valueClassName="flex items-end"
            unitClassName="text-xs"
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
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="LP APY"
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
                      })}%`
                    : "0"}
                </p>
              )
            }
            tooltipContent="The annual percentage yield projection for providing liquidity."
            valueClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end"
            subValue={
              vaultRateStatus === "success" && vaultRate ? (
                <div>
                  {depositAmountAsBigInt ? (
                    <>
                      {sharesToken.extensions.shortName} @{" "}
                      {vaultRate.formatted || 0} APY
                    </>
                  ) : undefined}
                </div>
              ) : (
                <Skeleton className="w-42 h-8" />
              )
            }
          />
        </div>
      }
      disclaimer={(() => {
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <p className="text-center text-sm text-error">
              Insufficient balance
            </p>
          );
        }
        if (
          previewAddLiquidityError?.includes("Not enough lp shares minted.")
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
        if (!account) {
          return <ConnectWalletButton />;
        }

        if (!hasEnoughBalance) {
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
function calculatePoolShareAfterDeposit(
  lpSharesBalanceOf: bigint | undefined,
  lpSharesOut: bigint | undefined,
  lpSharesTotalSupply: bigint | undefined,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  if (!lpSharesOut || !lpSharesTotalSupply || lpSharesBalanceOf === undefined) {
    return;
  }
  return calculateRatio({
    a: lpSharesBalanceOf + lpSharesOut,
    b: lpSharesTotalSupply + lpSharesOut,
    decimals: baseToken.decimals,
  });
}
