import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { parseUnits } from "src/base/parseUnits";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface AddLiquidityFormProps {
  market: Hyperdrive;
}

export function AddLiquidityForm({
  market,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: market.baseToken.decimals,
  });

  const { tokenAllowance } = useTokenAllowance({
    account,
    spender: market.address,
    tokenAddress: market.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: market.baseToken.address,
    spender: market.address,
    amount: MAX_UINT256,
  });

  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity({
      market,
      contribution: amountAsBigInt,
      // TODO: Add slippage control
      minAPR: parseUnits("0", market.baseToken.decimals),
      maxAPR: parseUnits("999", market.baseToken.decimals),
      destination: account,
      enabled: !needsApproval,
    });

  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    hyperdriveAddress: market.address,
    contribution: amountAsBigInt,
    minAPR: parseUnits("0", market.baseToken.decimals),
    maxAPR: parseUnits("999", market.baseToken.decimals),
    destination: account,
    enabled: addLiquidityPreviewStatus === "success" && !needsApproval,
  });

  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold">Add liquidity</h5>
      <TokenInput
        token={market.baseToken}
        value={amount ?? ""}
        maxValue={baseTokenBalance?.formatted}
        inputLabel="Amount to deposit"
        stat={
          baseTokenBalance
            ? `Balance: ${formatBalance({
                balance: baseTokenBalance?.value,
                decimals: market.baseToken.decimals,
                places: 4,
              })} ${market.baseToken.symbol}`
            : undefined
        }
        onChange={(newAmount) => setAmount(newAmount)}
      />

      {/* New Position Section */}
      <div className="mt-4 flex flex-col gap-6">
        <Well elevation="flat">
          <div className="space-y-4">
            <span className="text-h6 font-bold">Preview transaction</span>
            <AddLiquidityPreview
              hyperdrive={market}
              lpShares={lpSharesOut || 0n}
            />
          </div>
        </Well>

        <p className="text-center text-body">
          Please note: You can remove liquidity at any time, however if your
          liquidity is currently backing any open hy{market.baseToken.symbol}{" "}
          positions, you will receive additional Withdrawal Shares to redeem
          later.
        </p>

        {account ? (
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
              Approve {market.baseToken.symbol}
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
        )}
      </div>
    </div>
  );
}
