import { adjustAmountByPercentage, Long } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
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
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

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
  const { address: account } = useAccount();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
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

  const {
    amount: bondAmount,
    amountAsBigInt: bondAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  // Preview the amount of base or shares they get back from closing their long.
  const {
    amountOut: withdrawAmount,
    flatPlusCurveFee,
    previewCloseLongStatus,
  } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: bondAmountAsBigInt,
    asBase: activeWithdrawToken.address === baseToken.address,
  });

  const minAmountOutAfterSlippage =
    withdrawAmount &&
    adjustAmountByPercentage({
      amount: withdrawAmount,
      percentage: parseUnits("1", activeWithdrawToken.decimals),
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
    onSubmitted: () => {
      (window as any)[`${long.assetId}`].close();
    },
    onExecuted: () => {
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

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: sharesToken,
    });
  }

  return (
    <TransactionView
      disclaimer={
        <>
          <p className="text-center text-xs text-neutral-content">
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
      tokenInput={
        <TokenInput
          name={baseToken.symbol}
          inputLabel="Amount to redeem"
          token={`hy${baseToken.symbol}`}
          value={bondAmount ?? ""}
          maxValue={
            long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
          }
          stat={`Balance: ${formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.decimals,
            places: baseToken.places,
          })}`}
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
        <div className="flex flex-col gap-6 px-2 pb-2">
          <div className="flex flex-col gap-3">
            <LabelValue
              label="You receive"
              value={
                <p className="font-bold">
                  {withdrawAmount
                    ? `${formatBalance({
                        balance: withdrawAmount,
                        decimals: baseToken.decimals,
                        places: baseToken.places,
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
                        decimals: 18,
                        // The default places value is not always precise enough to show the correct number of decimal places for positions that haven't matured.
                        places: 4,
                      })}`
                    : "0"}{" "}
                  {activeWithdrawToken.symbol}
                </p>
              }
            />
          </div>
        </div>
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectButton />;
        }
        if (closeLongStatus === "loading") {
          return <LoadingButton label="Closing Long" variant="primary" />;
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
