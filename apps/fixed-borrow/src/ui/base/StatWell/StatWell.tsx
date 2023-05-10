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
    <Well interactive={!!onClick} onClick={onClick}>
      <div className="flex flex-col items-center text-center">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h6 font-bold text-lightText">{stat}</span>
      </div>
    </Well>
  );
}
