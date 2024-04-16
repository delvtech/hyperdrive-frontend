import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js-core";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { MouseEvent, ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits } from "viem";
import { sepolia } from "viem/chains";
import { useAccount, useChainId } from "wagmi";

interface OpenShortPositionFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function OpenShortForm({
  hyperdrive,
  onOpenShort,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const chainId = useChainId();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  // TODO: Remove check for Sepolia chain after testnet period.
  const isLidoSepolia = chainId === sepolia.id && baseToken.symbol === "ETH";

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      // TODO: Remove check for Sepolia chain after testnet period.
      defaultActiveToken: isLidoSepolia
        ? sharesToken.address
        : baseToken.address,
      // TODO: Remove check for Sepolia chain after testnet period.
      tokens: isLidoSepolia ? [sharesToken] : [baseToken, sharesToken],
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

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
  });

  const {
    amount: amountOfBondsToShort,
    amountAsBigInt: amountOfBondsToShortAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  const {
    traderDeposit,
    spotRateAfterOpen,
    curveFee,
    status: openShortPreviewStatus,
  } = usePreviewOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountOfBondsToShort: amountOfBondsToShortAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const hasEnoughBalance = getHasEnoughBalance({
    amount: traderDeposit,
    balance: activeTokenBalance?.value,
  });

  // Increase the expected trader deposit from the SDK by 1% to account for any
  // discrepancies between calling the SDK's `previewOpenShort` method and the
  // actual `openShort` method on the contract. This is only used for setting
  // allowances.
  // TODO: We can remove this once this is resolved:
  // https://github.com/delvtech/hyperdrive/issues/894
  const paddedTraderDepositForAllowance = adjustAmountByPercentage({
    amount: traderDeposit || 0n,
    decimals: activeToken.decimals,
    direction: "up",
    percentage: 1n,
  });
  const hasEnoughAllowance = getHasEnoughAllowance({
    allowance: activeTokenAllowance,
    amount: paddedTraderDepositForAllowance,
    requiresAllowance,
  });

  const { maxBondsOut } = useMaxShort({
    hyperdriveAddress: hyperdrive.address,
  });

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: amountOfBondsToShortAsBigInt,
    maxTradeSize: maxBondsOut,
  });

  const {
    setSlippage,
    slippage,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeToken.decimals });

  const maxDepositAfterSlippage =
    traderDeposit &&
    adjustAmountByPercentage({
      amount: traderDeposit,
      decimals: activeToken.decimals,
      direction: "up",
      percentage: slippage,
    });

  const { openShort, openShortStatus } = useOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountBondShorts: amountOfBondsToShortAsBigInt,
    minVaultSharePrice: poolInfo?.vaultSharePrice,
    // TODO: handle slippage
    maxDeposit: maxDepositAfterSlippage,
    destination: account,
    enabled: openShortPreviewStatus === "success" && hasEnoughAllowance,
    asBase: activeToken.address === baseToken.address,
    // Some hyperdrives allow native eth deposits, so we must include the
    // traderDeposit as msg.value
    ethValue: isActiveTokenEth ? traderDeposit : undefined,
    onSubmitted: () => {
      (window as any)["open-short"].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={`${baseToken.symbol}-input`}
          token={`hy${baseToken.symbol}`}
          inputLabel="Amount to short"
          value={amountOfBondsToShort ?? ""}
          onChange={(newAmount) => setAmount(newAmount)}
          settings={
            <SlippageSettings
              onSlippageChange={setSlippage}
              slippage={slippage}
              decimals={activeToken.decimals}
              activeOption={activeSlippageOption}
              onActiveOptionChange={setActiveSlippageOption}
            />
          }
        />
      }
      setting={
        <TokenPicker
          label={
            isLidoSepolia ? "Asset for deposit" : "Choose asset for deposit"
          }
          onChange={(tokenAddress) => setActiveToken(tokenAddress)}
          activeTokenAddress={activeToken.address}
          tokens={
            // TODO: Remove check for Sepolia chain after testnet period.
            isLidoSepolia
              ? [
                  {
                    tokenConfig: sharesToken,
                    tokenBalance: sharesTokenBalance?.value,
                  },
                ]
              : [
                  {
                    tokenConfig: baseToken,
                    tokenBalance: baseTokenBalance?.value,
                  },
                  {
                    tokenConfig: sharesToken,
                    tokenBalance: sharesTokenBalance?.value,
                  },
                ]
          }
          joined={true}
        />
      }
      transactionPreview={
        <OpenShortPreview
          hyperdrive={hyperdrive}
          tokenIn={activeToken}
          costBasis={traderDeposit}
          shortSize={amountOfBondsToShortAsBigInt}
          spotRateAfterOpen={spotRateAfterOpen}
          curveFee={curveFee}
        />
      }
      disclaimer={(() => {
        if (traderDeposit && !!amountOfBondsToShortAsBigInt) {
          return (
            <div className="flex flex-col gap-4">
              {!hasEnoughBalance ? (
                <p className="text-center text-sm text-error">
                  Insufficient balance
                </p>
              ) : null}
              <p className="text-center text-sm text-neutral-content">
                You pay{" "}
                <strong>
                  {formatBalance({
                    balance: traderDeposit || 0n,
                    decimals: activeToken.decimals,
                    includeCommas: true,
                    places: activeToken.places,
                  })}{" "}
                  {activeToken.symbol}
                </strong>{" "}
                in exchange for the yield on{" "}
                <strong>
                  {formatBalance({
                    balance: amountOfBondsToShortAsBigInt,
                    decimals: activeToken.decimals,
                    includeCommas: true,
                    places: activeToken.places,
                  })}{" "}
                  {baseToken.symbol}
                </strong>{" "}
                deposited into{" "}
                <strong>{sharesToken.extensions.shortName}</strong> for{" "}
                <strong>
                  {convertMillisecondsToDays(
                    Number(hyperdrive.poolConfig.positionDuration * 1000n),
                  )}{" "}
                  days.
                </strong>{" "}
              </p>
              <p className="text-center text-sm text-neutral-content">
                {hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
                  ? `When closing your Short position, you can choose to receive back either ${baseToken.symbol} or ${sharesToken.symbol}.`
                  : `When closing your Short position, you'll receive ${sharesToken.symbol}.`}
              </p>
            </div>
          );
        }
        if (!!amountOfBondsToShortAsBigInt && !hasEnoughLiquidity) {
          return (
            <p className="text-center text-sm text-error">
              Insufficient liquidity
            </p>
          );
        }
      })()}
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={hyperdrive.address}
              token={activeToken}
              amountAsBigInt={paddedTraderDepositForAllowance}
              amount={formatUnits(
                paddedTraderDepositForAllowance || 0n,
                activeToken.decimals,
              )}
            />
          );
        }
        if (openShortStatus === "loading") {
          return <LoadingButton label="Opening Short" variant="primary" />;
        }
        return (
          <button
            disabled={!openShort || !hasEnoughBalance}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              openShort?.();
              onOpenShort?.(e);
            }}
          >
            Open Short
          </button>
        );
      })()}
    />
  );
}
