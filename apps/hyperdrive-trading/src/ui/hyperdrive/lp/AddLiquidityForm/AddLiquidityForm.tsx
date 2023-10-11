import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { parseUnits } from "src/base/parseUnits";
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
    <div className="flex flex-col gap-10">
      <div className="text-base-content">
        <h5>Add liquidity</h5>
        <div className="flex flex-col items-start">
          <p>Earn trading fees when users open long or shorts</p>
          <Link
            className="flex cursor-pointer flex-row items-center text-sm"
            to={
              "https://www.notion.so/delv-tech/LP-Profitability-0acf6928b88c4a33875221aa15ca62d2?pvs=4"
            }
          >
            Learn More
            <ArrowTopRightOnSquareIcon className="ml-1" width={12} />
          </Link>
        </div>
      </div>
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
      <div className="space-y-4 text-base-content">
        <h5>Position preview</h5>
        <AddLiquidityPreview hyperdrive={market} lpShares={lpSharesOut || 0n} />
      </div>

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
  );
}
