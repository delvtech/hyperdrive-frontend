import { adjustAmountByPercentage, Long } from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { MouseEvent, ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenChoice } from "src/ui/token/TokenPicker";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
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

  const defaultItems = [];
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  if (baseToken) {
    defaultItems.push(baseToken);
  }
  const sharesToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
  );
  if (sharesToken) {
    defaultItems.push(sharesToken);
  }

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.baseToken,
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
    asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
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
    asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
    enabled: previewCloseLongStatus === "success",
    onSubmitted: () => {
      (window as any)[`${long.assetId}`].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  const withdrawTokenChoices: TokenChoice[] = [];
  if (baseToken && hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
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

  const profitLoss = formatBalance({
    balance: (long.bondAmount || 0n) - (withdrawAmount || 0n),
    decimals: baseToken?.decimals || 18,
    places: 4,
  });

  const isPositiveChangeInValue =
    withdrawAmount && withdrawAmount > long.bondAmount;
  return (
    <TransactionView
      tokenInput={
        baseToken ? (
          <TokenInputTwo
            name={baseToken.symbol}
            inputLabel="Amount to redeem"
            token={`hy${baseToken.symbol}`}
            value={bondAmount ?? ""}
            maxValue={
              long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
            }
            onChange={(newAmount) => setAmount(newAmount)}
            bottomRightElement={`Balance: ${formatBalance({
              balance: long.bondAmount,
              decimals: hyperdrive.decimals,
              places: baseToken.places,
            })}`}
          />
        ) : null
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <PrimaryStat
            label="You receive"
            value={
              <div>
                {withdrawAmount
                  ? `${formatBalance({
                      balance: withdrawAmount,
                      decimals: hyperdrive.decimals,
                      places: baseToken?.places,
                    })}`
                  : "0"}{" "}
              </div>
            }
            valueClassName="flex items-end"
            valueUnit={
              <TokenPickerTwo
                tokens={withdrawTokenChoices}
                activeTokenAddress={activeWithdrawToken.address}
                onChange={(tokenAddress) =>
                  setActiveWithdrawToken(tokenAddress)
                }
              />
            }
            subValue="Select withdrawal asset"
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="Profit/Loss"
            tooltipContent="Profit/Loss since open, after closing fees."
            tooltipPosition="left"
            value={
              <div
                className={classNames("flex", {
                  "text-success": isPositiveChangeInValue,
                  // "text-error": !isPositiveChangeInValue && profitLoss !== "-0",
                })}
              >
                <span>{isPositiveChangeInValue ? "+" : "-"}</span>
                {withdrawAmount
                  ? `${profitLoss === "-0" ? "0" : profitLoss}`
                  : undefined}
              </div>
            }
            valueUnit={activeWithdrawToken.symbol}
            valueClassName="flex items-end"
            containerClassName="flex-1 items-end"
          />
        </div>
      }
      transactionPreview={
        <div className="flex flex-col gap-3.5 px-2">
          <CollapseSection
            heading={
              <div className="flex w-full items-center justify-between text-neutral-content">
                <p>Transaction Details</p>
                <div className="flex items-center gap-1">
                  <ChevronDownIcon className="ml-1 size-6" />
                </div>
              </div>
            }
          ></CollapseSection>
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
