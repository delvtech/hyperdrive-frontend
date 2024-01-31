import { ReactElement, ReactNode } from "react";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Well } from "src/ui/base/components/Well/Well";

interface Props {
  title: ReactNode;
  subtitle: string;
  icon: ReactNode;
  checklist: string[];
  emphasized?: boolean;
}

export function PositionCard({
  title,
  subtitle,
  icon,
  checklist,
  emphasized,
}: Props): ReactElement {
  return (
    <Well outlined={emphasized}>
      <div className="flex w-[290px] flex-col p-3 md:w-[330px]">
        <div className="mb-8 flex w-12 justify-center rounded-lg bg-gray-600 p-4">
          {icon}
        </div>
        <p className="mb-6 text-h4 font-bold">{title}</p>
        <p className="text-p2 mb-8 text-neutral-content">{subtitle}</p>
        <div className="flex flex-col gap-6">
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
