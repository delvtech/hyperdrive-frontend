import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";

interface StatWellProps {
  label: string;
  stat: string;
}

export function StatWell({ label, stat }: StatWellProps): ReactElement {
  return (
    <Well>
      <div className="flex flex-col items-center text-center">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h4 text-white">{stat}</span>
      </div>
    </Well>
  );
}
