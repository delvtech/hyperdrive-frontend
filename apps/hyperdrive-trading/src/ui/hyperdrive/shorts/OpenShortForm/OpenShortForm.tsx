import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { Well } from "src/ui/base/components/Well/Well";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
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

  const { poolInfo } = usePoolInfo(market.address);
  const { baseAmountIn, status: openShortPreviewStatus } = usePreviewOpenShort({
    market,
    amountBondShorts: amountAsBigInt,
    minSharePrice: poolInfo?.sharePrice,
    maxBaseAmountIn: MAX_UINT256, // todo add slippage control
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
    amount: MAX_UINT256,
  });

  const needsApproval = tokenAllowance
    ? baseAmountIn && baseAmountIn > tokenAllowance
    : true;

  const { openShort, openShortSubmittedStatus } = useOpenShort({
    hyperdriveAddress: market.address,
    amountBondShorts: amountAsBigInt,
    minSharePrice: poolInfo?.sharePrice,
    // TODO: handle slippage
    maxBaseAmountIn: MAX_UINT256,
    destination: account,
    enabled: openShortPreviewStatus === "success" && !needsApproval,
    onExecuted: () => {
      // reset local state after successful transaction
      setAmount(undefined);
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold">Short hy{market.baseToken.symbol}</h5>
      <TokenInput
        token={{
          symbol: `hy${market.baseToken.symbol}`,
          address: "0x0",
          decimals: 18,
          name: "Bonds",
        }}
        inputLabel="Amount to short"
        value={amount ?? ""}
        onChange={(newAmount) => setAmount(newAmount)}
      />

      {/* New Position Section */}
      <div className="mt-4 flex flex-col gap-6">
        <Well elevation="flat">
          <div className="space-y-4">
            <span className="text-h6 font-bold">Preview transaction</span>
            <OpenShortPreview
              market={market}
              costBasis={baseAmountIn ?? 0n}
              shortSize={amountAsBigInt}
            />
          </div>
        </Well>

        <p className="text-center text-body">
          Please note: When you short hy{market.baseToken.symbol} you earn the
          variable rate on the equivalent amount of {market.baseToken.symbol}{" "}
          deposited in the yield source.
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
              <h5>Approve {market.baseToken.symbol}</h5>
            </button>
          ) : (
            // Open short button
            <button
              disabled={
                !hasEnoughBalance ||
                !openShort ||
                openShortSubmittedStatus === "loading"
              }
              className="daisy-btn-accent daisy-btn"
              onClick={() => openShort?.()}
            >
              Short hy{market.baseToken.symbol}
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
    </div>
  );
}
