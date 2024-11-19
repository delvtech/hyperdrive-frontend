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
      <div className="flex items-center gap-1">
        <div className="font-chakraPetch text-h4">{leftElement}</div>
      </div>
      {rightElement}
    </div>
  );
}
