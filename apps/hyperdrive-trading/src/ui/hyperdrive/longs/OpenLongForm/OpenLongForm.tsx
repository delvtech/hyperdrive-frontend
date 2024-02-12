import {
  EmptyExtensions,
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
} from "@hyperdrive/appconfig";
import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { MutationStatus } from "@tanstack/react-query";
import { ReactElement, useState } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
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
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
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
    activeTokenType,
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
    asBase: activeTokenType === "baseToken",
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
              onChange={(token) => {
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
          // Only show the approve button if the trade would be valid
          !hasEnoughAllowance &&
          getHasEnoughBalance({ activeTokenBalance, amountAsBigInt }) ? (
            // Approval button
            <button
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
  activeToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
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
  const appConfig = useAppConfig();
  const [activeTokenType, setActiveTokenType] =
    useState<DepositTokenType>("baseToken");

  const activeToken =
    activeTokenType === "baseToken"
      ? findBaseToken({
          baseTokenAddress: hyperdrive.baseToken,
          tokens: appConfig.tokens,
        })
      : findYieldSourceToken({
          yieldSourceTokenAddress: hyperdrive.sharesToken,
          tokens: appConfig.tokens,
        });

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
