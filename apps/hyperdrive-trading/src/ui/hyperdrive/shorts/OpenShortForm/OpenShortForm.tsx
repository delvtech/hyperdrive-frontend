import { ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface OpenShortPositionFormProps {
  hyperdrive: Hyperdrive;
}

export function OpenShortForm({
  hyperdrive,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: hyperdrive.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.baseToken.decimals,
  });

  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { baseAmountIn, status: openShortPreviewStatus } = usePreviewOpenShort({
    market: hyperdrive,
    amountBondShorts: amountAsBigInt,
  });

  const hasEnoughBalance =
    baseTokenBalance && (baseAmountIn ?? 0n) <= baseTokenBalance.value;

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
    ? baseAmountIn && baseAmountIn > tokenAllowance
    : true;

  const { openShort, openShortSubmittedStatus } = useOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountBondShorts: amountAsBigInt,
    minSharePrice: poolInfo?.sharePrice,
    // TODO: handle slippage
    maxBaseAmountIn: MAX_UINT256,
    destination: account,
    enabled: openShortPreviewStatus === "success" && !needsApproval,
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Short opened"
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
          token={{
            symbol: `hy${hyperdrive.baseToken.symbol}`,
            address: "0x0",
            decimals: 18,
            name: "Bonds",
          }}
          inputLabel="Amount to short"
          value={amount ?? ""}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <OpenShortPreview
          market={hyperdrive}
          costBasis={baseAmountIn ?? 0n}
          shortSize={amountAsBigInt}
        />
      }
      disclaimer={`Note: When you short hy${hyperdrive.baseToken.symbol} you earn the variable rate on the equivalent amount of ${hyperdrive.baseToken.symbol} deposited in the yield source.`}
      actionButton={
        account ? (
          needsApproval ? (
            // Approval button
            <button
              disabled={!approve}
              className="daisy-btn daisy-btn-circle daisy-btn-warning w-full"
              onClick={(e) => {
                // Do this so we don't close the modal
                e.preventDefault();
                approve?.();
              }}
            >
              <h5>Approve {hyperdrive.baseToken.symbol}</h5>
            </button>
          ) : (
            // Open short button
            <button
              disabled={
                !hasEnoughBalance ||
                !openShort ||
                openShortSubmittedStatus === "loading"
              }
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
              onClick={() => openShort?.()}
            >
              Short hy{hyperdrive.baseToken.symbol}
            </button>
          )
        ) : (
          <ConnectWalletButton />
        )
      }
    />
  );
}
