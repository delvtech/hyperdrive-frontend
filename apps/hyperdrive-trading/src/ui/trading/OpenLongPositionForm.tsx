import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { Button } from "src/ui/base/components/Button";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useOpenLong } from "src/ui/hyperdrive/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/hooks/usePreviewOpenLong";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { LongPositionOverviewWell } from "src/ui/trading/LongPositionOverviewWell";
import { useAccount, useBalance } from "wagmi";

interface OpenLongPositionFormProps {
  market: Hyperdrive;
}

export function OpenLongPositionForm({
  market,
}: OpenLongPositionFormProps): ReactElement {
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
    amount: ethers.constants.MaxUint256.toBigInt(),
  });

  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    market,
    baseAmount: amountAsBigInt,
    bondAmountOut: parseUnits("1", market.baseToken.decimals), // todo add slippage control
    destination: account,
    enabled: !needsApproval,
  });

  const { openLong, openLongTransactionStatus, openLongStatus } = useOpenLong({
    market,
    baseAmount: amountAsBigInt,
    // TODO: handle slippage
    bondAmountOut: BigInt(1),
    destination: account,
    enabled: openLongPreviewStatus === "success" && !needsApproval,
    onExecuted: () => {
      // reset local state after successful transaction
      setAmount(undefined);
    },
  });

  return (
    <div className="flex flex-col gap-10">
      {/* You Pay Section */}
      <div className="space-y-4 font-rubik text-hyper-blue-100">
        <h5>You Pay</h5>
        <TokenInput
          token={market.baseToken}
          value={amount ?? ""}
          maxValue={baseTokenBalance?.formatted}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* New Position Section */}
      <div className="space-y-4 font-rubik text-hyper-blue-100">
        <h5>Position preview</h5>
        <LongPositionOverviewWell
          hyperdrive={market}
          long={{
            bondAmount: longAmountOut || 0n,
            assetId: 0n,
            hyperdriveAddress: market.address,
            maturity: BigInt(
              Math.round((Date.now() + market.termLengthMS) / 1000),
            ),
          }}
        />
      </div>

      {account ? (
        needsApproval ? (
          // Approval button
          <Button
            disabled={!approve}
            variant="Work"
            size="lg"
            block
            onClick={() => approve?.()}
          >
            <h5>Approve {market.baseToken.symbol}</h5>
          </Button>
        ) : (
          // Trade button
          <Button
            disabled={
              !openLong ||
              openLongTransactionStatus === "loading" ||
              openLongStatus === "loading"
            }
            variant="Emerald"
            size="lg"
            block
            onClick={() => openLong?.()}
          >
            <h5>Open Long</h5>
          </Button>
        )
      ) : (
        <Button
          variant="Emerald"
          size="lg"
          block
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </Button>
      )}
    </div>
  );
}
