import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import { MouseEvent, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenChoice } from "src/ui/token/TokenPicker";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { formatUnits } from "viem";
import { useAccount, useChainId } from "wagmi";
interface RemoveLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const connectedChainId = useChainId();
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

  const tokens: TokenChoice[] = [];
  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    tokens.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }
  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: tokens.map(({ tokenConfig }) => tokenConfig),
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : hyperdrive.poolConfig.vaultSharesToken,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { fiatPrice: activeWithdrawTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeWithdrawToken.address,
    chainId: activeWithdrawToken.chainId,
  });

  // Let users type in an amount of lp shares they want to remove
  const {
    amount,
    amountAsBigInt: lpSharesIn,
    setAmount,
  } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive
  // if withdrawingin shares, we need to also convert the minLpSharePrice to be
  // priced in terms of shares
  const isBaseActiveToken = activeWithdrawToken.address === baseToken.address;
  const lpSharePrice = !isBaseActiveToken
    ? fixed(poolInfo?.lpSharePrice || 0n, baseToken.decimals).div(
        poolInfo?.vaultSharePrice || 0n,
        baseToken.decimals,
      ).bigint
    : poolInfo?.lpSharePrice || 0n;
  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeWithdrawToken.decimals });

  const minOutputPerShare = adjustAmountByPercentage({
    amount: lpSharePrice,
    percentage: slippageAsBigInt,
    decimals: activeWithdrawToken.decimals,
    direction: "down",
  });

  const { lpSharesTotalSupply, lpSharesTotalSupplyStatus } =
    useLpSharesTotalSupply({
      hyperdriveAddress: hyperdrive.address,
      chainId: hyperdrive.chainId,
    });

  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn,
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
  });

  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn,
    minOutputPerShare,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
    onSubmitted: () => {
      (
        document.getElementById("withdrawalLpModal") as HTMLDialogElement
      )?.close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  // to format the withdrawal shares out in terms of base, we need to multiply
  // them by the lpSharePrice
  const formattedWithdrawalSharesOut = withdrawalShares
    ? formatBalance({
        balance: calculateValueFromPrice({
          amount: withdrawalShares,
          unitPrice: poolInfo?.lpSharePrice || 0n,
          decimals: baseToken.decimals,
        }),
        decimals: baseToken.decimals,
        places: baseToken.places,
      })
    : null;

  const hasEnoughBalance = getHasEnoughBalance({
    amount: lpSharesIn,
    balance: lpShares,
  });

  const withdrawTokenChoices: TokenChoice[] = [];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: baseToken,
    });
  }

  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: sharesToken,
    });
  }

  const poolShareRemaining =
    lpSharesTotalSupplyStatus === "success"
      ? (() => {
          // Calculate the ratio of remaining shares to the total supply
          const ratio = calculateRatio({
            a: lpShares - (lpSharesIn || 0n) - (withdrawalShares || 0n), // Remaining LP Shares in pool after removing input value lpShares and withdrawalShares received
            b: lpSharesTotalSupply || 0n,
            decimals: hyperdrive?.decimals,
          });
          // Ensure the ratio is not negative
          return ratio < 0n ? 0n : ratio;
        })()
      : 0n;

  return (
    <TransactionView
      tokenInput={
        <div className="flex flex-col gap-3">
          <TokenInputTwo
            name="Input LP shares"
            token={`${baseToken.symbol}-LP`}
            settings={
              <SlippageSettingsTwo
                onSlippageChange={setSlippage}
                slippage={slippage}
                activeOption={activeSlippageOption}
                onActiveOptionChange={setActiveSlippageOption}
                tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
              />
            }
            value={amount ?? ""}
            maxValue={formatUnits(lpShares, baseToken.decimals)}
            bottomRightElement={
              <div className="flex flex-col text-xs text-neutral-content">
                {`Withdrawable: ${formatBalance({
                  balance: lpShares,
                  decimals: baseToken.decimals,
                  places: baseToken.places,
                })}`}
              </div>
            }
            onChange={(newAmount) => setAmount(newAmount)}
          />
          <TokenInputTwo
            name={baseToken.symbol}
            inputLabel="You receive"
            token={
              <TokenPickerTwo
                tokens={withdrawTokenChoices}
                activeTokenAddress={activeWithdrawToken.address}
                onChange={(tokenAddress) =>
                  setActiveWithdrawToken(tokenAddress)
                }
              />
            }
            value={
              actualValueOut
                ? fixed(actualValueOut, hyperdrive.decimals).toString()
                : "0"
            }
            maxValue={
              actualValueOut
                ? formatUnits(actualValueOut, hyperdrive.decimals)
                : ""
            }
            disabled
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(hyperdrive.chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      activeWithdrawTokenPrice && actualValueOut
                        ? fixed(
                            actualValueOut,
                            activeWithdrawToken.decimals,
                          ).mul(
                            activeWithdrawTokenPrice,
                            activeWithdrawToken.decimals,
                          ).bigint
                        : 0n,
                    decimals: activeWithdrawToken.decimals,
                    places: 2,
                  })}`}
                </label>
              ) : null
            }
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <PrimaryStat
            label="Queued for delayed withdrawal"
            value={
              <div className="text-h3 font-bold">
                {formattedWithdrawalSharesOut || 0} {baseToken.symbol}
              </div>
            }
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="Pool share remaining"
            value={
              <div className="text-h3 font-bold">
                {poolShareRemaining !== null ? (
                  `${fixed(poolShareRemaining).format({ decimals: 4 })}%`
                ) : (
                  <Skeleton />
                )}
              </div>
            }
          />
        </div>
      }
      actionButton={(() => {
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
        if (!!lpSharesIn && !hasEnoughBalance) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }
        if (removeLiquidityStatus === "loading") {
          return <LoadingButton label="Removing Liquidity" variant="primary" />;
        }
        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!hasEnoughBalance || !removeLiquidity}
            onClick={(e) => {
              // prevent closing the modal until the user approves the transaction
              e.preventDefault();
              removeLiquidity?.();
              onRemoveLiquidity?.(e);
            }}
          >
            Remove Liquidity
          </button>
        );
      })()}
    />
  );
}
