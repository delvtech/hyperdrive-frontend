import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ReactElement, useState } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { TokenConfig } from "src/token/TokenConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { Address } from "viem";
import { useAccount, useBalance } from "wagmi";

interface OpenLongFormProps {
  hyperdrive: HyperdriveConfig;
}

type DepositTokenType = "baseToken" | "sharesToken";

export function OpenLongForm({
  hyperdrive: hyperdrive,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();

  const {
    activeToken,
    activeTokenBalance,
    activeTokenAllowance,
    isActiveTokenApprovalRequired,
  } = useActiveToken({
    hyperdrive,
    account,
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
    market: hyperdrive,
    baseAmount: amountAsBigInt,
  });

  const longAmountOutAfterSlippage =
    longAmountOut &&
    adjustAmountByPercentage({
      amount: longAmountOut,
      decimals: hyperdrive.baseToken.decimals,
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
          token={activeToken.symbol}
          value={amount ?? ""}
          maxValue={activeTokenBalance?.formatted}
          inputLabel="Amount to spend"
          stat={
            activeTokenBalance
              ? `Balance: ${formatBalance({
                  balance: activeTokenBalance?.value,
                  decimals: activeToken.decimals,
                  places: 4,
                })} ${hyperdrive.baseToken.symbol}`
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
              Math.round((Date.now() + hyperdrive.termLengthMS) / 1000),
            ),
          }}
        />
      }
      actionButton={
        account ? (
          !hasEnoughAllowance ? (
            // Approval button
            <button
              disabled={!approve}
              className="daisy-btn daisy-btn-circle daisy-btn-warning w-full"
              onClick={(e) => {
                // Do this so we don't close the modal
                e.preventDefault();
                approve?.();
              }}
            >
              <h5>Approve {activeToken.symbol}</h5>
            </button>
          ) : (
            // Trade button
            <button
              disabled={!openLong || openLongStatus === "loading"}
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

function getHasEnoughAllowance({
  isActiveTokenApprovalRequired,
  activeTokenAllowance,
  amount,
}: {
  isActiveTokenApprovalRequired: boolean;
  activeTokenAllowance: bigint | undefined;
  amount: bigint | undefined;
}) {
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

function useActiveToken({
  hyperdrive,
  account,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
}): {
  activeTokenType: DepositTokenType;
  activeToken: TokenConfig;
  activeTokenAllowance: bigint | undefined;
  activeTokenBalance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
  setActiveTokenType: (type: DepositTokenType) => void;
  isActiveTokenApprovalRequired: boolean;
} {
  const [activeTokenType, setActiveTokenType] =
    useState<DepositTokenType>("baseToken");

  const activeToken =
    activeTokenType === "baseToken"
      ? hyperdrive.baseToken
      : hyperdrive.sharesToken;

  const { data: activeTokenBalance } = useBalance({
    address: account,
    // Fetches the account's eth balance by setting `token` to undefined
    token:
      activeToken.address === ETH_MAGIC_NUMBER
        ? undefined
        : activeToken.address,
  });

  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress:
      // Eth doesn't require an allowance, so use undefined to turn this hook off
      activeToken.address === ETH_MAGIC_NUMBER
        ? undefined
        : activeToken.address,
  });

  // All tokens besides ETH require you to check that there is sufficient allowance
  const isActiveTokenApprovalRequired =
    activeToken.address !== ETH_MAGIC_NUMBER;

  return {
    activeToken,
    activeTokenType,
    activeTokenAllowance,
    setActiveTokenType,
    activeTokenBalance,
    isActiveTokenApprovalRequired,
  };
}
