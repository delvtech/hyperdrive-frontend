import { fixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js-core";
import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link } from "@tanstack/react-router";
import { MouseEvent, ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { OpenLongStats } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongStats";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrices } from "src/ui/token/hooks/useTokenFiatPrices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenChoice, TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { Address, formatUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface OpenLongFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function OpenLongForm({
  hyperdrive: hyperdrive,
  onOpenLong,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();
  const chainId = useChainId();
  const { isFlagEnabled: isBridgingEnabled } = useFeatureFlag("bridge");

  const appConfig = useAppConfig();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const tokenSymbol = baseToken.symbol;
  const { balances = [[]] } = useBridgeTokenBalances(account, [tokenSymbol]);
  const hasBridgeableBalance = balances[0]?.some(
    ({ balance }) => Number(balance) > 0,
  );

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

  const tokenChoices: TokenChoice[] = [];
  if (baseToken && hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
    tokenChoices.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  const sharesToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
  );

  if (sharesToken && hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
    tokenChoices.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: hyperdrive.depositOptions.isBaseTokenDepositEnabled
        ? baseToken.address
        : hyperdrive.poolConfig.vaultSharesToken,
      tokens: tokenChoices.map((token) => token.tokenConfig),
    });
  const tokenPrices = useTokenFiatPrices([activeToken.address]);
  const activeTokenPrice =
    tokenPrices?.[activeToken.address.toLowerCase() as Address];
  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
  });

  const {
    amount: depositAmount,
    amountAsBigInt: depositAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
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

  const { maxBaseIn, maxSharesIn, maxBondsOut } = useMaxLong({
    hyperdriveAddress: hyperdrive.address,
  });
  const activeTokenMaxTradeSize =
    activeToken.address === baseToken.address ? maxBaseIn : maxSharesIn;

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: depositAmountAsBigInt,
    maxTradeSize: activeTokenMaxTradeSize,
  });

  const {
    bondsReceived,
    spotRateAfterOpen,
    curveFee,
    status: openLongPreviewStatus,
  } = usePreviewOpenLong({
    hyperdriveAddress: hyperdrive.address,
    amountIn: depositAmountAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeToken.decimals });

  const bondsReceivedAfterSlippage =
    bondsReceived &&
    adjustAmountByPercentage({
      amount: bondsReceived,
      percentage: slippageAsBigInt,
      decimals: activeToken.decimals,
      direction: "down",
    });

  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: hyperdrive.address,
    asBase: activeToken.address === baseToken.address,
    amount: depositAmountAsBigInt,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
    minBondsOut: bondsReceivedAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onSubmitted: () => {
      (window as any)["open-long"].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  // Max button is wired up to the user's balance, or the pool's max long.
  // Whichever is smallest.
  let maxButtonValue = "0";
  if (activeTokenBalance && activeTokenMaxTradeSize) {
    maxButtonValue = formatUnits(
      activeTokenBalance.value > activeTokenMaxTradeSize
        ? activeTokenMaxTradeSize
        : activeTokenBalance?.value,
      activeToken.decimals,
    );
  }

  const switchToBridgeUILink = (
    <Link
      to="/bridge"
      search={{
        token: activeToken.symbol,
        destination: chainId,
      }}
      className="daisy-btn daisy-btn-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {`Bridge ${tokenSymbol} from L2s`}
    </Link>
  );

  return (
    <TransactionView
      tokenInput={
        <TokenInputTwo
          settings={
            <SlippageSettingsTwo
              onSlippageChange={setSlippage}
              slippage={slippage}
              activeOption={activeSlippageOption}
              onActiveOptionChange={setActiveSlippageOption}
              tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
            />
          }
          name={activeToken.symbol}
          token={
            <TokenPickerTwo
              tokens={tokenChoices}
              activeTokenAddress={activeToken.address}
              onChange={(tokenAddress) => {
                setActiveToken(tokenAddress);
                setAmount("0");
              }}
            />
          }
          value={depositAmount ?? ""}
          maxValue={maxButtonValue}
          inputLabel="You spend"
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
      setting={
        isBridgingEnabled && hasBridgeableBalance ? switchToBridgeUILink : null
      }
      primaryStats={
        <OpenLongStats
          hyperdrive={hyperdrive}
          activeToken={activeToken}
          amountPaid={depositAmountAsBigInt || 0n}
          bondAmount={bondsReceived || 0n}
          openLongPreviewStatus={openLongPreviewStatus}
          asBase={activeToken.address === baseToken.address}
          vaultSharePrice={poolInfo?.vaultSharePrice}
        />
      }
      transactionPreview={
        <OpenLongPreview
          hyperdrive={hyperdrive}
          spotRateAfterOpen={spotRateAfterOpen}
          curveFee={curveFee}
          activeToken={activeToken}
          amountPaid={depositAmountAsBigInt || 0n}
          bondAmount={bondsReceived || 0n}
          openLongPreviewStatus={openLongPreviewStatus}
          asBase={activeToken.address === baseToken.address}
          vaultSharePrice={poolInfo?.vaultSharePrice}
        />
      }
      disclaimer={(() => {
        if (!!depositAmountAsBigInt && !hasEnoughLiquidity) {
          return (
            <p className="text-center text-sm text-error">
              Pool limit exceeded. Max long size is{" "}
              {formatBalance({
                balance: maxBondsOut || 0n,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}{" "}
              hy{baseToken.symbol}
            </p>
          );
        }
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <p className="text-center text-sm text-error">
              Insufficient balance
            </p>
          );
        }
      })()}
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
        }

        if (!hasEnoughBalance || !hasEnoughLiquidity) {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Open Long
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

        if (openLongStatus === "loading") {
          return <LoadingButton label="Opening Long" variant="primary" />;
        }

        return (
          <button
            disabled={!openLong}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              openLong?.();
              onOpenLong?.(e);
            }}
          >
            Open Long
          </button>
        );
      })()}
    />
  );
}
