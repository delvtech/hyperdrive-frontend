import { adjustAmountByPercentage, OpenShort } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { makeTransactionURL } from "src/blockexplorer/makeTransactionUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoice, TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
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
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: [baseToken, sharesToken],
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : sharesToken.address,
  });

  const { address: account } = useAccount();
  const chainId = useChainId() as SupportedChainId;
  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseToken.decimals,
  });

  // You can't close an amount that's larger than the position size
  const isAmountLargerThanPositionSize = !!(
    amountAsBigInt && amountAsBigInt > short.bondAmount
  );
  const { amountOut, previewCloseShortStatus } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: short.maturity,
    shortAmountIn: amountAsBigInt,
    minAmountOut: 0n,
    destination: account,
    asBase: activeWithdrawToken.address === baseToken.address,
    enabled: !isAmountLargerThanPositionSize,
  });

  const minAmountOutAfterSlippage =
    amountOut &&
    adjustAmountByPercentage({
      amount: amountOut,
      percentage: 1n,
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeShort, isPendingWalletAction } = useCloseShort({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: short.maturity,
    bondAmountIn: amountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    enabled:
      previewCloseShortStatus === "success" && !isAmountLargerThanPositionSize,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
    onExecuted: (hash) => {
      setAmount("");
      toast.loading(
        <CustomToastMessage
          message="Short closed"
          link={makeTransactionURL(hash, chainId)}
        />,
      );
    },
  });
  const withdrawTokenChoices: TokenChoice[] = [{ tokenConfig: sharesToken }];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    withdrawTokenChoices.unshift({ tokenConfig: baseToken });
  }

  return (
    <TransactionView
      heading="Close short"
      tokenInput={
        <TokenInput
          name="shorts"
          token={`hy${baseToken.symbol}`}
          value={amount ?? ""}
          maxValue={
            short ? formatUnits(short.bondAmount, baseToken.decimals) : ""
          }
          stat={
            short
              ? `Balance: ${formatBalance({
                  balance: short.bondAmount,
                  decimals: hyperdrive.decimals,
                  places: 4,
                })}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      setting={
        withdrawTokenChoices.length > 1 ? (
          <TokenChoices
            label="Choose withdrawal asset"
            tokens={withdrawTokenChoices}
            selectedTokenAddress={activeWithdrawToken.address}
            onTokenChange={(tokenAddress) =>
              setActiveWithdrawToken(tokenAddress)
            }
          />
        ) : undefined
      }
      transactionPreview={
        <LabelValue
          label="You receive"
          value={
            <p className="font-bold">
              {amountOut
                ? `${formatBalance({
                    balance: amountOut,
                    decimals: baseToken.decimals,
                    places: 8,
                  })}`
                : "0"}{" "}
              {activeWithdrawToken.symbol}
            </p>
          }
        />
      }
      disclaimer={
        !!amountAsBigInt && isAmountLargerThanPositionSize ? (
          <p className="text-center text-error">Insufficient balance</p>
        ) : undefined
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={
              !closeShort ||
              isPendingWalletAction ||
              isAmountLargerThanPositionSize
            }
            onClick={() => {
              closeShort?.();
            }}
          >
            Close Short
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}
