import { adjustAmountByPercentage, Long } from "@delvtech/hyperdrive-viem";
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
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoice, TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface CloseLongFormProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
  onCloseLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseLongForm({
  hyperdrive,
  long,
  onCloseLong,
}: CloseLongFormProps): ReactElement {
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

  const {
    amount: bondAmount,
    amountAsBigInt: bondAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  // Preview the amount of base or shares they get back from closing their long.
  const { amountOut: withdrawAmount, previewCloseLongStatus } =
    usePreviewCloseLong({
      hyperdriveAddress: hyperdrive.address,
      maturityTime: long.maturity,
      bondAmountIn: bondAmountAsBigInt,
      minOutput: parseUnits("0", baseToken.decimals),
      destination: account,
      asBase: activeWithdrawToken.address === baseToken.address,
    });

  const minAmountOutAfterSlippage =
    withdrawAmount &&
    adjustAmountByPercentage({
      amount: withdrawAmount,
      percentage: 1n,
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeLong, closeLongStatus } = useCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: bondAmountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    asBase: activeWithdrawToken.address === baseToken.address,
    enabled: previewCloseLongStatus === "success",
    onSubmitted: (hash) => {
      (window as any)[`${long.assetId}`].close();
      toast.success(
        <CustomToastMessage
          message="Close Long pending"
          link={makeTransactionURL(hash, chainId)}
        />,
      );
    },
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Long closed"
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
      disclaimer={
        <>
          <p className="text-center text-sm text-neutral-content">
            Note: 1 hy{baseToken.symbol} is always worth 1 {baseToken.symbol} at
            maturity, however its value may fluctuate before maturity based on
            market activity.
          </p>
          {previewCloseLongStatus === "error" ? (
            <p className="text-center text-error">
              Insufficient liquidity: There is not enough liquidity in the pool
              to close your long position at this time. You may either add more
              funds to the pool or wait for the liquidity to improve.
            </p>
          ) : undefined}
        </>
      }
      heading="Close long"
      tokenInput={
        <TokenInput
          name={baseToken.symbol}
          token={`hy${baseToken.symbol}`}
          value={bondAmount ?? ""}
          maxValue={
            long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
          }
          stat={`Balance: ${formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.decimals,
            places: 4,
          })}`}
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
              {withdrawAmount
                ? `${formatBalance({
                    balance: withdrawAmount,
                    decimals: baseToken.decimals,
                    places: 8,
                  })}`
                : "0"}{" "}
              {activeWithdrawToken.symbol}
            </p>
          }
        />
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectButton />;
        }
        if (closeLongStatus === "loading") {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Closing Long
              <div className="daisy-loading daisy-loading-spinner" />
            </button>
          );
        }
        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeLong}
            onClick={(e) => {
              closeLong?.();
              onCloseLong?.(e);
            }}
          >
            <span>Close Long</span>
          </button>
        );
      })()}
    />
  );
}
