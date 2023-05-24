import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import { NumericInput } from "src/ui/base/NumericInput/NumericInput";
import { AssetBadge } from "src/ui/token/AssetBadge";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { parseUnits } from "viem";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ApproveDelegationButton } from "src/ui/loans/ApproveDelegationButton/ApproveDelegationButton";

interface BorrowInputProps {
  tokenAddress: Address;
  value?: string;
  onChange?: (newAmount: `${number}`) => void;
}

export function BorrowInput({
  tokenAddress,
  value,
  onChange,
}: BorrowInputProps): ReactElement {
  const { address: account } = useAccount();
  const { data: tokenMetadata } = useToken({
    address: tokenAddress,
  });
  const { data: balanceOf } = useBalance({
    token: tokenAddress,
    address: account,
  });

  const availableToDepositLabel = balanceOf
    ? `Available to borrow: ${formatBalance(balanceOf.formatted, 2)} ${
        tokenMetadata?.symbol
      }`
    : undefined;

  const amount = parseUnits(
    (value as `${number}`) || "0",
    tokenMetadata?.decimals || 18,
  );
  return (
    <div className="flex flex-col gap-4">
      <NumericInput
        value={value}
        maxValue={balanceOf?.formatted as `${number}`}
        primaryLabel="Borrow"
        icon={<AssetBadge address={tokenAddress} />}
        placeholderText="0"
        secondaryLabel={availableToDepositLabel}
        onChange={onChange}
      />
      {/* The action contract must be able to borrow against your variable debt
      token in order to take out the loan on your behalf */}
      <ApproveDelegationButton
        variableDebtTokenAddress={SparkGoerliAddresses.DAI_variableDebtToken}
        amount={amount}
        delegatee={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
      />
      {/* The action contract must be able to spend the asset you're borrowing
      in order to open a Hyperdrive short on your behalf */}
      <ApproveAllowanceButton
        tokenAddress={tokenAddress}
        amount={amount}
        spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
      />
    </div>
  );
}
