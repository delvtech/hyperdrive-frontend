import { ReactElement, useState } from "react";
import { Well } from "src/ui/base/Well/Well";
import { RepayModal } from "src/ui/quickstart/RepayQuickStartButton/RepayModal";
import { Address } from "wagmi";

export function RepayQuickStartButton({
  tokenAddress,
  label,
  stat,
}: {
  tokenAddress: Address;
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
      <RepayModal
        tokenAddress={tokenAddress}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
