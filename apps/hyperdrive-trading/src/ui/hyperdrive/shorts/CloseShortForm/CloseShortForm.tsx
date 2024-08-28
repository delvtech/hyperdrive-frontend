import { adjustAmountByPercentage, OpenShort } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TransactionViewOld } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

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
  const appConfig = useAppConfig();

  const { address: account } = useAccount();
  const defaultItems = [];
  const baseToken = findBaseToken({
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
      (window as any)[`${short.assetId}`].close();
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
    <TransactionViewOld
      tokenInput={
        <TokenInput
          name="shorts"
          inputLabel="Amount to redeem"
          token={`hy${baseToken?.symbol}`}
          value={amount ?? ""}
          maxValue={
            short ? formatUnits(short.bondAmount, hyperdrive.decimals) : ""
          }
          stat={
            short
              ? `Balance: ${formatBalance({
                  balance: short.bondAmount,
                  decimals: hyperdrive.decimals,
                  places: baseToken?.places,
                })}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      setting={
        withdrawTokenChoices.length > 1 ? (
          <TokenPicker
            tokens={withdrawTokenChoices}
            activeTokenAddress={activeWithdrawToken.address}
            onChange={(tokenAddress) => setActiveWithdrawToken(tokenAddress)}
            label="Choose withdrawal asset"
          />
        ) : undefined
      }
      transactionPreview={
        <div className="flex flex-col gap-3 px-2 pb-2">
          <LabelValue
            label="You receive"
            value={
              <p className="font-bold">
                {amountOut
                  ? `${formatBalance({
                      balance: amountOut,
                      decimals: hyperdrive.decimals,
                      places: baseToken?.places,
                    })}`
                  : "0"}{" "}
                {activeWithdrawToken.symbol}
              </p>
            }
          />

          <LabelValue
            label="Pool fee"
            value={
              <p>
                {flatPlusCurveFee
                  ? `${formatBalance({
                      balance: flatPlusCurveFee,
                      decimals: hyperdrive.decimals,
                      // The default places value is not always precise enough to show the correct number of decimal places for positions that haven't matured.
                      places: 6,
                    })}`
                  : "0"}{" "}
                {activeWithdrawToken.symbol}
              </p>
            }
          />
        </div>
      }
      disclaimer={
        !!amountAsBigInt && isAmountLargerThanPositionSize ? (
          <p className="text-center text-error">Insufficient balance</p>
        ) : undefined
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectButton />;
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
