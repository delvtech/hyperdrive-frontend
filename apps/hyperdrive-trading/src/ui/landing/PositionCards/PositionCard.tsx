import type { ReactElement, ReactNode } from "react";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Well } from "src/ui/base/components/Well/Well";

interface Props {
  title: ReactNode;
  subtitle: string;
  icon: ReactNode;
  checklist: string[];
}

export function PositionCard({
  title,
  subtitle,
  icon,
  checklist,
}: Props): ReactElement {
  return (
    <Well>
      <div className="flex w-[290px] flex-col p-3 md:w-[325px]">
        <div className="mb-8 flex w-12 justify-center rounded-lg bg-gray-600 p-4">
          {icon}
        </div>
        <h4 className="mb-6 font-medium">{title}</h4>
        <p className="text-p2 mb-8 opacity-80">{subtitle}</p>
        <div className="flex flex-col gap-6 opacity-80">
          {checklist.map((item, idx) => (
            <ChecklistItem key={idx} checked readOnly variant="success">
              {item}
            </ChecklistItem>
          ))}
        </div>
      </div>
    </Well>
  );
}
