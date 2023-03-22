import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import { NumericInput } from "src/ui/base/NumericInput/NumericInput";
import { AssetIcon } from "src/ui/token/AssetIcon";

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
    ? `Available to deposit: ${formatBalance(balanceOf.formatted, 2)} ${
        tokenMetadata?.symbol
      }`
    : undefined;

  return (
    <NumericInput
      value={value}
      maxValue={balanceOf?.formatted}
      primaryLabel="Borrow"
      icon={
        // TODO: Don't hardcode this to dai
        <AssetIcon assetId="dai" />
      }
      placeholderText="0"
      secondaryLabel={availableToDepositLabel}
      onChange={onChange}
    />
  );
}
