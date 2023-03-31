import { ethers } from "ethers";
import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import Button from "src/ui/base/components/Button";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useOpenLong } from "src/ui/hyperdrive/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/hooks/usePreviewOpenLong";
import { TokenInput } from "src/ui/token/components/TokenInput";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { PositionOverviewWell } from "src/ui/trading/components/PositionOverviewWell";
import { useAccount, useBalance } from "wagmi";

interface OpenLongPositionFormProps {
  market: HyperdriveMarket;
}

export function OpenLongPositionForm({
  market,
}: OpenLongPositionFormProps): ReactElement {
  const { address: account } = useAccount();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: market.baseToken.decimals,
  });

  const { tokenAllowance, status: tokenAllowanceStatus } = useTokenAllowance({
    account,
    spender: market.address,
    tokenAddress: market.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: market.baseToken.address,
    spender: market.address,
    amount: ethers.constants.MaxUint256.toBigInt(),
  });

  const needsApproval =
    tokenAllowance && amountAsBigInt ? amountAsBigInt > tokenAllowance : false;

  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    market,
    baseAmount: amountAsBigInt,
    bondAmountOut: BigInt(1), // todo add slippage control
    destination: account,
    enabled: !needsApproval,
  });

  const { openLong } = useOpenLong({
    market,
    baseAmount: amountAsBigInt,
    // TODO: handle slippage
    bondAmountOut: BigInt(1),
    destination: account,
    enabled: openLongPreviewStatus === "success" && !needsApproval,
  });

  return (
    <>
      {/* You Pay Section */}
      <div className="space-y-4 text-hyper-blue-100 font-rubik">
        <h3 className="text-xl">You Pay</h3>
        <TokenInput
          token={market.baseToken}
          value={amount ?? ""}
          maxValue={baseTokenBalance?.formatted}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* New Position Section */}
      <div className="space-y-4 text-hyper-blue-100 font-rubik">
        <h3 className="text-xl">New Position</h3>
        <PositionOverviewWell
          market={market}
          costBasis={amountAsBigInt ?? 0n}
          claimableAtMaturity={longAmountOut ?? 0n}
        />
      </div>

      {needsApproval ? (
        // Approval button
        <Button
          disabled={!approve || tokenAllowanceStatus !== "success"}
          variant="Trade"
          className="w-full px-0 py-4 text-xl bg-[#FF9031]"
          onClick={() => approve?.()}
        >
          Approve {market.baseToken.symbol}
        </Button>
      ) : (
        // Trade button
        <Button
          disabled={!openLong}
          variant="Trade"
          className="w-full px-0 py-4 text-xl"
          onClick={() => openLong?.()}
        >
          Open Long
        </Button>
      )}
    </>
  );
}
