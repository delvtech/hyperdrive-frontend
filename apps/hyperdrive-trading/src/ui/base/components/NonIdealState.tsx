import { ReactElement, ReactNode } from "react";

export function NonIdealState({
  heading,
  text = "Nothing to show",
  icon,
  action,
}: {
  icon?: ReactNode;
  heading?: string;
  text?: string;
  action?: ReactNode;
}): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-base-200 p-10 md:w-[750px]">
      {icon}
      <div className="flex flex-col gap-1 text-center">
        <p className="text-h6 font-bold">{heading}</p>
        <p className="text-lg">{text}</p>
      </div>
      {action}
    </div>
  );
}
