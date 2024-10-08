import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage, OpenShort } from "@delvtech/hyperdrive-viem";
import { MouseEvent, ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenChoice } from "src/ui/token/TokenPicker";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface CloseShortFormProps {
  hyperdrive: HyperdriveConfig;
  // TODO: Refactor this to only need the positionSize and maturity time
  short: OpenShort;
  onCloseShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseShortForm({
  hyperdrive,
  short,
}: CloseShortFormProps): ReactElement {
  const { address: account } = useAccount();
  const connectedChainId = useChainId();
  const defaultItems = [];
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    defaultItems.push(baseToken);
  }
  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    tokens: appConfig.tokens,
  });
  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    defaultItems.push(sharesToken);
  }

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: hyperdrive.decimals,
  });

  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: defaultItems,
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? hyperdrive.poolConfig.baseToken
      : hyperdrive.poolConfig.vaultSharesToken,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  // You can't close an amount that's larger than the position size
  const isAmountLargerThanPositionSize = !!(
    amountAsBigInt && amountAsBigInt > short.bondAmount
  );
  const { amountOut, flatPlusCurveFee, previewCloseShortStatus } =
    usePreviewCloseShort({
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      maturityTime: short.maturity,
      shortAmountIn: amountAsBigInt,
      asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
      enabled: !isAmountLargerThanPositionSize,
    });

  const minAmountOutAfterSlippage =
    amountOut &&
    adjustAmountByPercentage({
      amount: amountOut,
      percentage: parseUnits("1", activeWithdrawToken.decimals),
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeShort, closeShortStatus } = useCloseShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    maturityTime: short.maturity,
    bondAmountIn: amountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    enabled:
      previewCloseShortStatus === "success" && !isAmountLargerThanPositionSize,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
    onSubmitted: (hash) => {
      (window as any)[`${short.assetId}`]?.close();
    },
    onExecuted: (hash) => {
      setAmount("");
    },
  });

  const withdrawTokenChoices: TokenChoice[] = [];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: sharesToken,
    });
  }

  return (
    <TransactionView
      tokenInput={
        <TokenInputTwo
          name={baseToken.symbol}
          inputLabel="Amount to redeem"
          token={`hy${baseToken.symbol}`}
          value={amount ?? ""}
          maxValue={
            short ? formatUnits(short.bondAmount, hyperdrive.decimals) : ""
          }
          onChange={(newAmount) => setAmount(newAmount)}
          bottomRightElement={
            <div className="flex flex-col gap-1 text-xs text-neutral-content">
              {short
                ? `Balance: ${formatBalance({
                    balance: short.bondAmount,
                    decimals: hyperdrive.decimals,
                    places: baseToken?.places,
                  })}`
                : undefined}
            </div>
          }
        />
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <PrimaryStat
            label="You receive"
            value={
              <span className="text-h3 font-bold">
                {amountOut
                  ? `${formatBalance({
                      balance: amountOut,
                      decimals: hyperdrive.decimals,
                      places: baseToken?.places,
                    })}`
                  : "0"}{" "}
              </span>
            }
            valueUnit={activeWithdrawToken.symbol}
            valueContainerClassName="flex flex-row gap-2 items-end"
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="Pool fee"
            value={
              <span className="text-h3 font-bold">
                {flatPlusCurveFee
                  ? `${formatBalance({
                      balance: flatPlusCurveFee,
                      decimals: hyperdrive.decimals,
                      // The default places value is not always precise enough to show the correct number of decimal places for positions that haven't matured.
                      places: 4,
                    })}`
                  : "0"}{" "}
              </span>
            }
            valueUnit={activeWithdrawToken.symbol}
            valueContainerClassName="flex flex-row gap-2 items-end"
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
        if (!!amountAsBigInt && isAmountLargerThanPositionSize) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }
        if (closeShortStatus === "loading") {
          return <LoadingButton label="Closing Short" variant="primary" />;
        }
        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeShort || isAmountLargerThanPositionSize}
            onClick={(e) => {
              // prevent closing the modal until the user approves the transaction
              e.preventDefault();
              closeShort?.();
            }}
          >
            Close Short
          </button>
        );
      })()}
    />
  );
}
