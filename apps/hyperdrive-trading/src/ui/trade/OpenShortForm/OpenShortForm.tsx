import { useConnectModal } from "@rainbow-me/rainbowkit";
import { constants, ethers } from "ethers";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { Button } from "src/ui/base/components/Button";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useOpenShort } from "src/ui/hyperdrive/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/hooks/usePreviewOpenShort";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { OpenShortPreview } from "src/ui/trade/OpenShortPreview/OpenShortPreview";
import { useAccount, useBalance } from "wagmi";

interface OpenShortPositionFormProps {
  market: Hyperdrive;
}

export function OpenShortPositionForm({
  market,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

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

  const { openShort, openShortTransactionStatus, openShortSubmittedStatus } =
    useOpenShort({
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

  const openShortButton = () => {
    if (!account) {
      return (
        <Button
          variant="Crimson"
          size="lg"
          block
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </Button>
      );
    }

    if (hasEnoughBalance === true) {
      if (needsApproval) {
        return (
          <Button
            disabled={!approve}
            variant="Work"
            onClick={() => approve?.()}
          >
            <h5>Approve {market.baseToken.symbol}</h5>
          </Button>
        );
      } else {
        return (
          <Button
            disabled={
              !openShort ||
              openShortTransactionStatus === "loading" ||
              openShortSubmittedStatus === "loading"
            }
            variant="Crimson"
            size="lg"
            block
            onClick={() => openShort?.()}
          >
            <h5>Open Short</h5>
          </Button>
        );
      }
    } else {
      return (
        <Button variant="Crimson" size="lg" block onClick={() => {}}>
          <h5>Not enough {market.baseToken.symbol}</h5>
        </Button>
      );
    }
  };

  const current = new Date();
  const expiryDate = new Date(
    current.setMonth(
      current.getMonth() + convertMillisecondsToMonths(market.termLengthMS),
    ),
  );

  return (
    <>
      {/* You Pay Section */}
      <div className="space-y-4 text-base-content">
        <h5>Amount to short</h5>
        <TokenInput
          token={market.baseToken}
          value={amount ?? ""}
          onChange={(newAmount) => setAmount(newAmount)}
          showBalance={false}
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

      {openShortButton()}
    </>
  );
}
