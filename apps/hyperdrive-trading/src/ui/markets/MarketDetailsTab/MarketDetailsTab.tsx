import { ReactElement, ReactNode } from "react";

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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col px-8">
          {/* positions and faq tabs */}
          <div className="flex flex-col">{positions}</div>
        </div>

        {/* <div className="flex w-[1px] bg-base-200 shrink-0" /> */}

        {/* transaction form */}
        <div className="max-w-sm bg-base-200 p-6">
          <h5 className="mb-3 font-bold">{transactionFormHeading}</h5>
          {transactionForm}
        </div>
      </div>
    </div>
  );
}
