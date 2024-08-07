import { PropsWithChildren, ReactElement, ReactNode } from "react";

export function CollapseSection({
  heading,
  children,
  onClick,
}: PropsWithChildren<{
  heading: ReactNode;
  onClick?: () => void;
}>): ReactElement {
  return (
    <div className="daisy-collapse justify-normal rounded-none text-sm">
      <input onClick={onClick} type="checkbox" className="min-h-0" />
      <div className="daisy-collapse-title mb-3 min-h-0 p-0 font-medium">
        <div className="flex items-center gap-4">{heading}</div>
      </div>
      <div className="daisy-collapse-content space-y-2 px-0">{children}</div>
    </div>
  );
}
