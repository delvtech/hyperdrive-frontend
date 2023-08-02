import { useConnectModal } from "@rainbow-me/rainbowkit";
import { constants, ethers } from "ethers";
import { ReactElement } from "react";
import { Hyperdrive, Token } from "src/appconfig/types";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface OpenShortPositionFormProps {
  market: Hyperdrive;
}

export function OpenShortForm({
  market,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { maxShort } = useMaxShort(market);

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: market.baseToken.decimals,
  });

  const { baseAmountIn, status: openShortPreviewStatus } = usePreviewOpenShort({
    market,
    amountBondShorts: amountAsBigInt,
    maxBaseAmountIn: constants.MaxUint256.toBigInt(), // todo add slippage control
    destination: account,
  });

  const hasEnoughBalance =
    baseTokenBalance && (baseAmountIn ?? 0n) <= baseTokenBalance.value;

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
    ? baseAmountIn && baseAmountIn > tokenAllowance
    : true;

  const { openShort, openShortSubmittedStatus } = useOpenShort({
    market,
    amountBondShorts: amountAsBigInt,
    // TODO: handle slippage
    maxBaseAmountIn: constants.MaxUint256.toBigInt(),
    destination: account,
    enabled: openShortPreviewStatus === "success" && !needsApproval,
    onExecuted: () => {
      // reset local state after successful transaction
      setAmount(undefined);
    },
  });

  const current = new Date();
  const expiryDate = new Date(current.getTime() + market.termLengthMS);
  const bondToken = {
    symbol: "Bonds",
    address: "0x0",
    decimals: 18,
    name: "Bonds",
  } as Token;

  return (
    <div className="flex flex-col gap-10">
      {/* You Pay Section */}
      <div className="space-y-4 text-base-content">
        <h5>Amount to short</h5>
        <TokenInput
          token={bondToken}
          value={amount ?? ""}
          maxValue={maxShort?.formatted}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* New Position Section */}
      <div className="space-y-4 text-base-content">
        <h5>Position preview</h5>
        <OpenShortPreview
          market={market}
          costBasis={baseAmountIn ?? 0n}
          amountShort={amountAsBigInt ?? 0n}
          expiryDate={expiryDate}
        />
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
            <h5>Approve {market.baseToken.symbol}</h5>
          </button>
        ) : (
          // Trade button
          <button
            disabled={
              !hasEnoughBalance ||
              !openShort ||
              openShortSubmittedStatus === "loading"
            }
            className="daisy-btn-accent daisy-btn"
            onClick={() => openShort?.()}
          >
            Open Short
          </button>
        )
      ) : (
        <button
          className="daisy-btn-secondary daisy-btn"
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </button>
      )}
    </div>
  );
}
