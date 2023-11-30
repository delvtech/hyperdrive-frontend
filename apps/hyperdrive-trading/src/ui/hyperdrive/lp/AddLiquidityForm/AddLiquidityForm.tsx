import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { parseUnits } from "src/base/parseUnits";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: Hyperdrive;
}

export function AddLiquidityForm({
  hyperdrive,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: hyperdrive.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.baseToken.decimals,
  });

  const { tokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress: hyperdrive.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: hyperdrive.baseToken.address,
    spender: hyperdrive.address,
    amount: MAX_UINT256,
  });

  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity({
      market: hyperdrive,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", hyperdrive.baseToken.decimals),
      maxAPR: parseUnits("999", hyperdrive.baseToken.decimals),
      destination: account,
      enabled: !needsApproval,
    });

  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    hyperdriveAddress: hyperdrive.address,
    contribution: amountAsBigInt,
    minAPR: parseUnits("0", hyperdrive.baseToken.decimals),
    maxAPR: parseUnits("999", hyperdrive.baseToken.decimals),
    destination: account,
    enabled: addLiquidityPreviewStatus === "success" && !needsApproval,
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
          token={hyperdrive.baseToken}
          value={amount ?? ""}
          maxValue={baseTokenBalance?.formatted}
          inputLabel="Amount to deposit"
          stat={
            baseTokenBalance
              ? `Balance: ${formatBalance({
                  balance: baseTokenBalance?.value,
                  decimals: hyperdrive.baseToken.decimals,
                  places: 4,
                })} ${hyperdrive.baseToken.symbol}`
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
        "Note: You can withdraw liquidity at any time. If you're backing open positions, you'll receive Withdrawal Shares for later redemption."
      }
      actionButton={
        account ? (
          needsApproval ? (
            // Approval button
            <button
              disabled={!approve}
              className="daisy-btn-warning daisy-btn"
              onClick={(e) => {
                // Do this so we don't close the modal
                e.preventDefault();
                approve?.();
              }}
            >
              Approve {hyperdrive.baseToken.symbol}
            </button>
          ) : (
            // Trade button
            <button
              disabled={!addLiquidity || addLiquidityStatus === "loading"}
              className="daisy-btn-primary daisy-btn"
              onClick={() => addLiquidity?.()}
            >
              Add liquidity
            </button>
          )
        ) : (
          <button
            className="daisy-btn-primary daisy-btn"
            onClick={() => openConnectModal?.()}
          >
            Connect wallet
          </button>
        )
      }
    />
  );
}
