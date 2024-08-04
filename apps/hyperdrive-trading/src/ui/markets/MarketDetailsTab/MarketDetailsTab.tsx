import type { ReactElement, ReactNode } from "react";

/**
 * Layout component for the LongsTab, ShortsTab, and LpTab
 */
export function MarketDetailsTab({
  positions,
}: {
  positions: ReactNode;
}): ReactElement {
  return (
    <div className="flex w-full flex-col gap-10 xl:w-[1200px] xl:flex-row">
      <div className="flex min-w-0 flex-1 flex-col">
        {/* positions and faq tabs */}
        <div className="flex flex-col">{positions}</div>
      </div>
    </div>
  );
}
