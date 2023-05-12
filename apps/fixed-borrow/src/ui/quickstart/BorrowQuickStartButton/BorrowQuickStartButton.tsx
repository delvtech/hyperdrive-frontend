import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import { useAccount, Address } from "wagmi";

export function BorrowQuickStartButton({
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
  return (
    <Well block onClick={() => {}}>
      <div className="flex items-center justify-between">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h6 text-lightText">{stat}</span>
      </div>
    </Well>
  );
}
