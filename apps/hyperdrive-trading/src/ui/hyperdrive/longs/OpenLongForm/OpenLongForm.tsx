import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { MutationStatus } from "@tanstack/react-query";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import ApproveTokenButton from "src/ui/token/ApproveTokenButton";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { useAccount } from "wagmi";

interface OpenLongFormProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenLongForm({
  hyperdrive: hyperdrive,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();

  const {
    activeToken,
    activeTokenBalance,
    activeTokenAllowance,
    isActiveTokenApprovalRequired,
    setActiveTokenType,
  } = useActiveToken({
    hyperdrive,
    account,
  });
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { approve } = useTokenApproval({
    tokenAddress: activeToken.address,
    spender: hyperdrive.address,
    amount: MAX_UINT256,
    enabled: isActiveTokenApprovalRequired,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeToken.decimals,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    isActiveTokenApprovalRequired,
    activeTokenAllowance,
    amount: amountAsBigInt,
  });

  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    hyperdriveAddress: hyperdrive.address,
    baseAmount: amountAsBigInt,
  });

  const longAmountOutAfterSlippage =
    longAmountOut &&
    adjustAmountByPercentage({
      amount: longAmountOut,
      decimals: activeToken.decimals,
    });

  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: hyperdrive.address,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Long opened"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={activeToken.symbol}
          token={
            <TokenPicker
              tokens={[baseToken.symbol, sharesToken.symbol]}
              activeToken={activeToken.symbol}
              onChange={function (token: string): void {
                if (token === sharesToken.symbol) {
                  setActiveTokenType("sharesToken");
                } else {
                  setActiveTokenType("baseToken");
                }
                setAmount("0");
              }}
            />
          }
          value={amount ?? ""}
          maxValue={activeTokenBalance?.formatted}
          inputLabel="Amount to spend"
          stat={
            activeTokenBalance
              ? `Balance: ${formatBalance({
                  balance: activeTokenBalance?.value,
                  decimals: activeToken.decimals,
                  places: 4,
                })} ${activeToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <OpenLongPreview
          hyperdrive={hyperdrive}
          long={{
            bondAmount: longAmountOut || 0n,
            assetId: 0n,
            baseAmountPaid: amountAsBigInt || 0n,
            maturity: BigInt(
              Math.round(
                (Date.now() +
                  Number(hyperdrive.poolConfig.positionDuration * 1000n)) /
                  1000,
              ),
            ),
          }}
        />
      }
      disclaimer={
        !!amountAsBigInt &&
        !getHasEnoughBalance({ activeTokenBalance, amountAsBigInt }) ? (
          <p className="text-center text-sm text-error">Insufficient balance</p>
        ) : undefined
      }
      actionButton={
        account ? (
          getHasEnoughBalance({ activeTokenBalance, amountAsBigInt }) ? (
            // Approval button
            <ApproveTokenButton
              hyperdrive={hyperdrive}
              activeToken={activeToken}
              isActiveTokenApprovalRequired={isActiveTokenApprovalRequired}
              activeTokenBalance={activeTokenBalance}
              amountAsBigInt={amountAsBigInt}
              amount={amount}
            />
          ) : (
            // Open Long button
            <button
              disabled={getIsOpenLongButtonDisabled({
                openLong,
                activeTokenBalance,
                amountAsBigInt,
                openLongStatus,
              })}
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
              onClick={() => openLong?.()}
            >
              Open Long
            </button>
          )
        ) : (
          <ConnectWalletButton />
        )
      }
    />
  );
}

function getIsOpenLongButtonDisabled({
  openLong,
  activeTokenBalance,
  amountAsBigInt,
  openLongStatus,
}: {
  openLong: (() => void) | undefined;
  activeTokenBalance: { formatted: string; value: bigint } | undefined;
  amountAsBigInt: bigint | undefined;
  openLongStatus: MutationStatus;
}): boolean {
  if (!openLong || openLongStatus === "loading") {
    return true;
  }

  return !getHasEnoughBalance({ activeTokenBalance, amountAsBigInt });
}

function getHasEnoughBalance({
  activeTokenBalance,
  amountAsBigInt,
}: {
  activeTokenBalance: { formatted: string; value: bigint } | undefined;
  amountAsBigInt: bigint | undefined;
}) {
  // The trade isn't valid if you have no balance or no amount specified to
  // trade
  if (!activeTokenBalance || !amountAsBigInt) {
    return false;
  }

  // You can't spend more than your current balance either
  if (
    activeTokenBalance &&
    amountAsBigInt &&
    activeTokenBalance.value < amountAsBigInt
  ) {
    return false;
  }

  return true;
}

export function getHasEnoughAllowance({
  isActiveTokenApprovalRequired,
  activeTokenAllowance,
  amount,
}: {
  isActiveTokenApprovalRequired: boolean;
  activeTokenAllowance: bigint | undefined;
  amount: bigint | undefined;
}): boolean {
  // You technically have enough allowance if none is needed, or you're trying
  // to spend 0 of the token
  if (!isActiveTokenApprovalRequired || !amount) {
    return true;
  }

  // If you're trying to spend a non-zero amount, and we don't know your current
  // token allowance yet, then you don't have enough allowance.
  if (!activeTokenAllowance) {
    return false;
  }

  // Otherwise, you have enough allowance if it's greater than or equal to the amount you want to spend
  return activeTokenAllowance >= amount;
}
