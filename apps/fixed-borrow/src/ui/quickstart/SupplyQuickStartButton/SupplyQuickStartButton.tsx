import { ReactElement, useState } from "react";
import { Well } from "src/ui/base/Well/Well";
import { SupplyModal } from "src/ui/quickstart/SupplyQuickStartButton/SupplyModal";
import { Address } from "wagmi";

export function SupplyQuickStartButton({
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Well block onClick={() => setIsModalOpen(true)}>
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase text-secondaryText">
            {label}
          </span>
          <span className="text-h6 text-lightText">{stat}</span>
        </div>
      </Well>
      <SupplyModal
        tokenAddress={tokenAddress}
        amount={amount}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
