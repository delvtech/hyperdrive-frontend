import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import { NumericInput } from "src/ui/base/NumericInput/NumericInput";
import { AssetBadge } from "src/ui/token/AssetBadge";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";

interface BorrowInputProps {
  tokenAddress: Address;
  value?: string;
  onChange?: (newAmount: string) => void;
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

  return (
    <div className="flex flex-col gap-4">
      <NumericInput
        value={value}
        maxValue={balanceOf?.formatted}
        primaryLabel="Borrow"
        icon={<AssetBadge address={tokenAddress} />}
        placeholderText="0"
        secondaryLabel={availableToDepositLabel}
        onChange={onChange}
      />
      <ApproveAllowanceButton
        tokenAddress={tokenAddress}
        amount={parseBigInt(value || "0", tokenMetadata?.decimals)}
        spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
        spenderLabel="aaveFixedBorrowAction"
      />
      <ApproveAllowanceButton
        tokenAddress={tokenAddress}
        amount={parseBigInt(value || "0", tokenMetadata?.decimals)}
        spender={HyperdriveGoerliAddresses.makerDsrHyperdrive}
        spenderLabel="makerDsrHyperdrive"
      />
    </div>
  );
}
