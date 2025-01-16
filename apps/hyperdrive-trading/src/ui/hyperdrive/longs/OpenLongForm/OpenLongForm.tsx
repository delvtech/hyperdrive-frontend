import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  getToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js";
import uniqBy from "lodash.uniqby";
import { MouseEvent, ReactElement, useEffect } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { OpenLongStats } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongStats";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useOpenLongZap } from "src/ui/hyperdrive/zaps/hooks/useOpenLongZap";
import { PositionPicker } from "src/ui/markets/PositionPicker";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
import { TokenInput } from "src/ui/token/TokenInput";
import {
  TokenChoice,
  TokenPicker,
  ZapsTokenPicker,
} from "src/ui/token/TokenPicker";
import { useTokenList } from "src/ui/tokenlist/useTokenList";
import { formatUnits } from "viem";
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
  const connectedChainId = useChainId();
  const { marketState } = useMarketState({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { isFlagEnabled: isZapsEnabled } = useFeatureFlag("zaps");

  const { tokenList } = useTokenList({
    chainId: hyperdrive.chainId,
    enabled: isZapsEnabled,
  });

  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
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

  const tokenChoices: TokenChoice[] = [];
  if (baseToken && hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
    tokenChoices.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    appConfig,
  });

  if (sharesToken && hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
    tokenChoices.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  useEffect(() => {
    console.log(tokenChoices, "tokenChoices");
  }, [tokenChoices]);

  if (isZapsEnabled) {
    tokenList
      ?.filter(
        (tokenFromTokenList) =>
          tokenFromTokenList.address !== baseToken.address &&
          tokenFromTokenList.address !== sharesToken?.address &&
          tokenFromTokenList.chainId === hyperdrive.chainId
      )
      .map((tokenFromTokenList) => {
        tokenChoices.push({
          tokenConfig: tokenFromTokenList,
        });
      });
  }

  let activeTokenChoices = tokenChoices.map((token) => token.tokenConfig);
  if (isZapsEnabled) {
    activeTokenChoices = uniqBy(
      [...activeTokenChoices, ...tokenList],
      "address"
    );
  }

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: hyperdrive.depositOptions.isBaseTokenDepositEnabled
        ? baseToken.address
        : hyperdrive.poolConfig.vaultSharesToken,
      tokens: activeTokenChoices,
    });
  const { fiatPrice: activeTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeToken.address,
    chainId: activeToken.chainId,
  });

  const zapsConfig = appConfig.zaps[hyperdrive.chainId];
  const depositAssets = getDepositAssets(hyperdrive);
  const isZapping = !depositAssets.some(
    (asset) => asset.address === activeToken.address
  );

  const spender = isZapping ? zapsConfig.address : hyperdrive.address;

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender,
    tokenAddress: activeToken.address,
    tokenChainId: activeToken.chainId,
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
    chainId: hyperdrive.chainId,
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
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    tokenAddress: activeToken.address,
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
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    asBase: activeToken.address === baseToken.address,
    amount: depositAmountAsBigInt,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
    minBondsOut: bondsReceivedAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onSubmitted: () => {
      (document.getElementById("open-long") as HTMLDialogElement)?.close();
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
      activeToken.decimals
    );
  }

  const { openLongZap } = useOpenLongZap({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    amount: depositAmountAsBigInt || 0n,
    tokenIn: activeToken,
    minBondsOut: bondsReceivedAfterSlippage || 0n,
    minSharePrice: poolInfo?.vaultSharePrice || 0n,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    chainId: hyperdrive.chainId,
    tokenAddress: baseToken.address,
  });
  let zapTokenAmountInBase = 0n;
  if (
    isZapping &&
    activeTokenPrice &&
    baseTokenPrice &&
    depositAmountAsBigInt
  ) {
    const fiatValueOfDepositAmount = fixed(
      depositAmountAsBigInt,
      activeToken.decimals
    ).mul(activeTokenPrice);
    const equivalentAmountOfBase = fiatValueOfDepositAmount.div(baseTokenPrice);
    zapTokenAmountInBase = equivalentAmountOfBase.bigint;
  }

  // Plausible event props
  const formName = "Open Long";
  const chainId = hyperdrive.chainId;
  const poolAddress = hyperdrive.address;

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          variant="lighter"
          settings={
            <div className="mb-3 flex w-full items-center justify-between">
              <PositionPicker hyperdrive={hyperdrive} />
              <SlippageSettings
                onSlippageChange={(slippage) => {
                  window.plausible("formChange", {
                    props: {
                      inputName: "slippage",
                      inputValue: slippage.toString(),
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
          name={activeToken.symbol}
          token={
            isZapsEnabled ? (
              <ZapsTokenPicker
                tokens={tokenChoices}
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
            ) : (
              <TokenPicker
                tokens={tokenChoices}
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
            )
          }
          value={depositAmount ?? ""}
          maxValue={maxButtonValue}
          inputLabel="You spend"
          bottomLeftElement={
            // Defillama fetches the token price via {chain}:{tokenAddress}.
            // Since the token address differs on testnet, price display is
            // disabled there.
            !isTestnetChain(hyperdrive.chainId) ? (
              <label className="text-sm text-neutral-content">
                {`$${formatBalance({
                  balance:
                    activeTokenPrice && depositAmountAsBigInt
                      ? fixed(depositAmountAsBigInt, activeToken.decimals).mul(
                          activeTokenPrice,
                          18 // prices are always in 18 decimals
                        ).bigint
                      : 0n,
                  decimals: activeToken.decimals,
                  places: 2,
                })}`}
              </label>
            ) : null
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
        <OpenLongStats
          hyperdrive={hyperdrive}
          amountPaid={depositAmountAsBigInt || 0n}
          bondAmount={bondsReceived || 0n}
          openLongPreviewStatus={openLongPreviewStatus}
          asBase={activeToken.address === baseToken.address}
          vaultSharePrice={poolInfo?.vaultSharePrice}
          activeToken={activeToken}
        />
      }
      transactionPreview={
        depositAmountAsBigInt ? (
          <OpenLongPreview
            hyperdrive={hyperdrive}
            spotRateAfterOpen={spotRateAfterOpen}
            curveFee={curveFee}
            bondAmount={bondsReceived || 0n}
            openLongPreviewStatus={openLongPreviewStatus}
          />
        ) : null
      }
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

        if (!!depositAmountAsBigInt && !hasEnoughLiquidity) {
          return (
            <InvalidTransactionButton wide>
              Pool limit exceeded. Max long is{" "}
              {formatBalance({
                balance: maxBondsOut || 0n,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}{" "}
              hy{baseToken.symbol}
            </InvalidTransactionButton>
          );
        }
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={spender}
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
            disabled={isZapping ? !openLongZap : !openLong}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              if (isZapping) {
                openLongZap();
              } else {
                openLong?.();
              }
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
