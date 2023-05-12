import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";

interface StatWellProps {
  label: string;
  stat: string;

  onClick?: () => void;
}

export function StatWell({
  label,
  stat,
  onClick,
}: StatWellProps): ReactElement {
  return (
    <Well block onClick={() => {}}>
      <div className="flex items-center justify-between">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h6 text-lightText">{stat}</span>
      </div>
    </Well>
  );
}
