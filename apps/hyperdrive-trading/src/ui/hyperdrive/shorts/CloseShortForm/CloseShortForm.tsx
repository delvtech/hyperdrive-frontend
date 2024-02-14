import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { adjustAmountByPercentage, OpenShort } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseShortFormProps {
  hyperdrive: HyperdriveConfig;
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

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseToken.decimals,
  });

  const { amountOut, previewCloseShortStatus } = usePreviewCloseShort({
    hyperdriveAddress: short.hyperdriveAddress,
    maturityTime: short.maturity,
    shortAmountIn: amountAsBigInt,
    minAmountOut: 0n,
    destination: account,
    asBase: activeWithdrawToken.address === baseToken.address,
  });

  const closeShortAmountAfterSlippage =
    amountOut &&
    adjustAmountByPercentage({
      amount: amountOut,
      decimals: baseToken.decimals,
    });

  const { closeShort, isPendingWalletAction } = useCloseShort({
    hyperdriveAddress: hyperdrive.address,
    short,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: closeShortAmountAfterSlippage,
    destination: account,
    enabled: previewCloseShortStatus === "success",
    asBase: activeWithdrawToken.address === baseToken.address,
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Short closed"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  return (
    <TransactionView
      heading="Close short"
      tokenInput={
        <TokenInput
          name="shorts"
          token="Shorts"
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
        <TokenChoices
          label="Choose withdrawal asset"
          tokens={[
            {
              tokenConfig: baseToken,
              disabled:
                !hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
            },
            {
              tokenConfig: sharesToken,
            },
          ]}
          selectedTokenAddress={activeWithdrawToken.address}
          onTokenChange={(tokenAddress) => setActiveWithdrawToken(tokenAddress)}
        />
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
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeShort || isPendingWalletAction}
            onClick={() => {
              closeShort?.();
            }}
          >
            Close short
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}
