import { ReactElement } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { parseUnits } from "src/base/parseUnits";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
}

export function AddLiquidityForm({
  hyperdrive,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();

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

  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  console.log("fixedAPR", fixedAPR?.formatted);
  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity({
      market: hyperdrive,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", hyperdrive.baseToken.decimals),
      maxAPR: parseUnits("999", hyperdrive.baseToken.decimals),
      minLpSharePrice: poolInfo?.lpSharePrice,
      destination: account,
      enabled: !needsApproval,
    });

  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    hyperdriveAddress: hyperdrive.address,
    contribution: amountAsBigInt,
    minLpSharePrice: poolInfo?.lpSharePrice,
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
          name={hyperdrive.baseToken.name}
          token={hyperdrive.baseToken.symbol}
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
      actionButton={
        account ? (
          needsApproval ? (
            // Approval button
            <button
              disabled={!approve}
              className="daisy-btn daisy-btn-circle daisy-btn-warning w-full disabled:bg-warning disabled:text-base-100 disabled:opacity-30"
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
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
              onClick={() => addLiquidity?.()}
            >
              Add liquidity
            </button>
          )
        ) : (
          <ConnectWalletButton />
        )
      }
    />
  );
}
