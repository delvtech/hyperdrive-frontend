import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import { NumericInput } from "src/ui/base/NumericInput/NumericInput";
import { AssetBadge } from "src/ui/token/AssetBadge";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";

interface SupplyInputProps {
  tokenAddress: Address;
  value?: string;
  onChange?: (newAmount: string | undefined) => void;
}

export function SupplyInput({
  tokenAddress,
  value,
  onChange,
}: SupplyInputProps): ReactElement {
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
    <div className="flex flex-col gap-4">
      <NumericInput
        value={value}
        maxValue={balanceOf?.formatted}
        primaryLabel="Supply"
        icon={<AssetBadge address={tokenAddress} />}
        placeholderText="0"
        secondaryLabel={availableToDepositLabel}
        onChange={onChange}
      />
      <ApproveAllowanceButton
        tokenAddress={tokenAddress}
        amount={parseBigInt(value || "0", tokenMetadata?.decimals)}
        spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
      />
    </div>
  );
}
