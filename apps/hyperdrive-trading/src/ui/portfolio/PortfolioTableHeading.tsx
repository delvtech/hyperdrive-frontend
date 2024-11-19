import { ReactElement, ReactNode } from "react";

export function PortfolioTableHeading({
  leftElement,
  rightElement,
}: {
  leftElement: ReactNode;
  rightElement: ReactNode;
}): ReactElement {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-chakraPetch text-h4">
        {leftElement}
      </div>
      {rightElement}
    </div>
  );
}
