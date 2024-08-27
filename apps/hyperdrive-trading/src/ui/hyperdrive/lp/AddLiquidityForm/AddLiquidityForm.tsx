import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import { SparklesIcon } from "@heroicons/react/16/solid";
import {
  HyperdriveConfig,
  findDisplayBaseToken,
  findToken,
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
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrices } from "src/ui/token/hooks/useTokenFiatPrices";
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
  const displayBaseToken = findDisplayBaseToken({
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
  );

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.baseToken,
    decimals: hyperdrive.decimals,
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

  const { fixedApr } = useFixedRate(hyperdrive.address);

  const tokenOptions = [];
  const actualBaseToken = findToken({
    tokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  if (baseTokenDepositEnabled) {
    tokenOptions.push({
      // safe to cast because if deposits are enabled then the pool
      // must have a real base token
      tokenConfig: actualBaseToken!,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (sharesToken && shareTokenDepositsEnabled) {
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
        ? // safe to cast because if deposits are enabled then the
          // pool must have a real base token
          actualBaseToken!.address
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

  const isBaseActiveToken = activeToken.address === actualBaseToken?.address;

  // if depositing in shares, we need to also convert the minLpSharePrice to be
  // priced in terms of shares
  const lpSharePrice = !isBaseActiveToken
    ? fixed(poolInfo?.lpSharePrice || 0n, hyperdrive.decimals).div(
        poolInfo?.vaultSharePrice || 0n,
        hyperdrive.decimals,
      ).bigint
    : poolInfo?.lpSharePrice || 0n;

  const { lpApy } = useLpApy(hyperdrive.address);

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
  const poolShare = calculatePoolShare({
    lpSharesBalanceOf,
    lpSharesOut,
    lpSharesTotalSupply,
    decimals: hyperdrive.decimals,
  });
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
            valueUnit={`${displayBaseToken?.symbol}-LP`}
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
                        places: displayBaseToken?.places,
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
              lpApy == undefined ? (
                <div className="flex gap-2">
                  <SparklesIcon
                    width={18}
                    className="fill-primary stroke-none"
                  />
                  New
                </div>
              ) : (
                `${(lpApy * 100).toFixed(2) === "-0.00" ? "0.00" : (lpApy * 100).toFixed(2)}%`
              )
            }
            tooltipContent="The annual percentage yield projection for providing liquidity."
            tooltipPosition="left"
            valueClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end"
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
        if (
          previewAddLiquidityError?.message.includes("MinimumTransactionAmount")
        ) {
          return (
            <p className="text-center text-sm text-error">
              Trade does not meet the minimum transaction amount:{" "}
              {formatBalance({
                balance: hyperdrive.poolConfig.minimumTransactionAmount,
                decimals: hyperdrive.decimals,
                places: activeToken.places,
              })}{" "}
              {activeToken.symbol}.
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
function calculatePoolShare({
  lpSharesBalanceOf,
  lpSharesOut,
  lpSharesTotalSupply,
  decimals: decimals,
}: {
  lpSharesBalanceOf: bigint | undefined;
  lpSharesOut: bigint | undefined;
  lpSharesTotalSupply: bigint | undefined;
  decimals: number;
}) {
  if (!lpSharesOut || !lpSharesTotalSupply || lpSharesBalanceOf === undefined) {
    return;
  }
  return calculateRatio({
    a: lpSharesOut,
    b: lpSharesTotalSupply + lpSharesOut,
    decimals,
  });
}
