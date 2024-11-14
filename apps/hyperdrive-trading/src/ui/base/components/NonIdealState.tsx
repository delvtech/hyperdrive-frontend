import { ReactElement, ReactNode } from "react";

export function NonIdealState({
  heading,
  text = "Nothing to show",
  icon,
  action,
}: {
  icon?: ReactNode;
  heading?: string;
  text?: ReactNode;
  action?: ReactNode;
}): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {icon}
      <div className="flex flex-col gap-1.5 text-center">
        <h5 className="gradient-text font-medium">{heading}</h5>
        <div className="text-neutral-content">{text}</div>
      </div>
      {action}
    </div>
  );
}
