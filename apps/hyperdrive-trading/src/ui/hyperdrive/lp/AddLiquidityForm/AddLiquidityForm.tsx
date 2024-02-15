import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { parseUnits } from "src/base/parseUnits";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import ApproveTokenButton from "src/ui/token/ApproveTokenButton";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { useAccount } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
}

export function AddLiquidityForm({
  hyperdrive,
}: AddLiquidityFormProps): ReactElement {
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

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeToken.decimals,
  });

  const requiresAllowance = activeToken.address !== ETH_MAGIC_NUMBER;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
    enabled: requiresAllowance,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    requiresAllowance,
    allowance: activeTokenAllowance,
    amount: amountAsBigInt,
  });
  const hasEnoughBalance = getHasEnoughBalance({
    balance: activeTokenBalance?.value,
    amount: amountAsBigInt,
  });

  const isPreviewEnabled = hasEnoughAllowance && hasEnoughBalance;
  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity({
      hyperdriveAddress: hyperdrive.address,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", baseToken.decimals),
      maxAPR: parseUnits("999", baseToken.decimals),
      minLpSharePrice: parseUnits("0", baseToken.decimals),
      asBase: activeToken.address === baseToken.address,
      destination: account,
      enabled: isPreviewEnabled,
    });

  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    hyperdriveAddress: hyperdrive.address,
    contribution: amountAsBigInt,
    minLpSharePrice: parseUnits("0", baseToken.decimals),
    minAPR: parseUnits("0", baseToken.decimals),
    maxAPR: parseUnits("999", baseToken.decimals),
    destination: account,
    enabled: addLiquidityPreviewStatus === "success" && isPreviewEnabled,
    asBase: activeToken.address === baseToken.address,
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Liquidity added"
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
          inputLabel="Amount to deposit"
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
        <AddLiquidityPreview
          hyperdrive={hyperdrive}
          lpShares={lpSharesOut || 0n}
        />
      }
      disclaimer={
        !!amountAsBigInt && !hasEnoughBalance ? (
          <p className="text-center text-sm text-error">Insufficient balance</p>
        ) : null
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
              Add Liquidity
            </button>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenButton
              spender={hyperdrive.address}
              token={activeToken}
              tokenBalance={activeTokenBalance}
              amountAsBigInt={amountAsBigInt}
              amount={amount}
            />
          );
        }

        return (
          <button
            disabled={!addLiquidity || addLiquidityStatus === "loading"}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={() => addLiquidity?.()}
          >
            Add liquidity
          </button>
        );
      })()}
    />
  );
}
