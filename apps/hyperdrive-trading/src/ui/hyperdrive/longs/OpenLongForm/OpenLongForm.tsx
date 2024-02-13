import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
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
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
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

  const appConfig = useAppConfig();

  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { activeToken, activeTokenBalance, setActiveToken } = useActiveToken({
    account,
    defaultActiveToken: baseToken.address,
    tokens: [baseToken, sharesToken],
  });

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = activeToken.address !== ETH_MAGIC_NUMBER;

  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeToken.decimals,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    requiresAllowance,
    allowance: activeTokenAllowance,
    amount: amountAsBigInt,
  });

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

  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: hyperdrive.address,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    asBase: activeToken.address === baseToken.address,
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

  const hasEnoughBalance = getHasEnoughBalance({
    balance: activeTokenBalance,
    amount: amountAsBigInt,
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={activeToken.symbol}
          token={
            <TokenPicker
              tokens={[baseToken, sharesToken]}
              activeTokenAddress={activeToken.address}
              onChange={(tokenAddress) => {
                setActiveToken(tokenAddress);
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
        !!amountAsBigInt && !hasEnoughBalance ? (
          <p className="text-center text-sm text-error">Insufficient balance</p>
        ) : undefined
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
        }

        if (!hasEnoughBalance) {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Open Long
            </button>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenButton
              spender={hyperdrive.address}
              token={activeToken}
              isApprovalRequired={requiresAllowance}
              tokenBalance={activeTokenBalance}
              amountAsBigInt={amountAsBigInt}
              amount={amount}
            />
          );
        }

        return (
          <button
            disabled={!openLong || openLongStatus === "loading"}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={() => openLong?.()}
          >
            Open Long
          </button>
        );
      })()}
    />
  );
}

function getHasEnoughAllowance({
  allowance,
  amount,
  requiresAllowance,
}: {
  allowance: bigint | undefined;
  amount: bigint | undefined;
  requiresAllowance: boolean;
}): boolean {
  // You technically have enough allowance if none is required by the token
  // standard (eg: eth shim token doesn't require allowance) or you're trying
  // to spend 0 tokens
  if (!amount || !requiresAllowance) {
    return true;
  }

  // If you're trying to spend a non-zero amount, and we don't know your current
  // token allowance yet, then you don't have enough allowance.
  if (!allowance) {
    return false;
  }

  // Otherwise, you have enough allowance if it's greater than or equal to the amount you want to spend
  return allowance >= amount;
}
