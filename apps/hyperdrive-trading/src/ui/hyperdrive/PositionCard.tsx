import { ReactElement, ReactNode } from "react";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/ChecklistItem";
import { Well } from "src/ui/base/components/Well/Well";

interface Props {
  title: string;
  subtitle: string;
  description?: string;
  icon: ReactNode;
  checklist: string[];
  emphasized?: boolean;
}

export function PositionCard({
  title,
  subtitle,
  description,
  icon,
  checklist,
  emphasized,
}: Props): ReactElement {
  return (
    <Well elevation={emphasized ? "elevated" : "flat"}>
      <div className="flex h-full w-[300px] flex-col justify-between gap-2 p-3">
        {icon}
        <p className="text-h5 font-bold">{title}</p>
        <p className="font-bold">{subtitle}</p>
        <p className="daisy-label-text">{description}</p>
        <div className="mt-4 ml-4 flex flex-col gap-2 ">
          {checklist.map((item, idx) => (
            <ChecklistItem key={idx} checked readOnly>
              {item}
            </ChecklistItem>
          ))}
        </div>
      </div>
    </Well>
  );
}
