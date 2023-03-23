import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import { NumericInput } from "src/ui/base/NumericInput/NumericInput";
import { AssetBadge } from "src/ui/token/AssetBadge";

interface BorrowInputProps {
  tokenAddress: Address;
  value?: string;
  onChange?: (newAmount: string | undefined) => void;
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
    <NumericInput
      value={value}
      maxValue={balanceOf?.formatted}
      primaryLabel="Borrow"
      icon={<AssetBadge address={tokenAddress} />}
      placeholderText="0"
      secondaryLabel={availableToDepositLabel}
      onChange={onChange}
    />
  );
}
