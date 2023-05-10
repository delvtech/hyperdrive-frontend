import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { useAccount, Address, useBalance } from "wagmi";

export function SupplyStatWell({
  tokenAddress,
  amount,
  label,
  stat,
}: {
  tokenAddress: Address;
  amount: bigint;
  label: string;
  stat: string;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: balanceOf } = useBalance({
    token: tokenAddress,
    address: account,
  });
  const { supply } = useSupplyCollateral(tokenAddress, amount, account);
  return (
    <div className="flex w-full flex-col gap-2">
      {/* The action contract must be able to spend your collateral in order to
      deposit it into Spark on your behalf */}
      {amount ? (
        <ApproveAllowanceButton
          tokenAddress={tokenAddress}
          amount={balanceOf?.value.toBigInt()}
          spender={SparkGoerliAddresses.pool}
        />
      ) : null}
      <StatWell
        label={label}
        stat={stat}
        onClick={supply ? () => supply() : undefined}
      />
    </div>
  );
}
