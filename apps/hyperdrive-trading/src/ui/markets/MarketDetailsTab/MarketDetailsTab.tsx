import { ReactElement, ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";

/**
 * Layout component for the LongsTab, ShortsTab, and LpTab
 */
export function MarketDetailsTab({
  positions,
  transactionForm,
  transactionFormHeading,
}: {
  positions: ReactNode;
  transactionForm: ReactNode;
  transactionFormHeading: string;
}): ReactElement {
  return (
    <div className="mt-2 flex flex-col gap-10">
      <div className="flex flex-col gap-16 lg:flex-row">
        {/* positions and faq tabs */}
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex flex-col">{positions}</div>
        </div>

        {/* transaction form */}
        <div className="max-w-sm">
          <h5 className="mb-3 font-bold">{transactionFormHeading}</h5>
          <Well>{transactionForm}</Well>
        </div>
      </div>
    </div>
  );
}
