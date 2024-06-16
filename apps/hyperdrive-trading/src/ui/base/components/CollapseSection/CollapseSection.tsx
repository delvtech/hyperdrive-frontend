import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { PropsWithChildren, ReactElement } from "react";

export function CollapseSection({
  heading,
  children,
}: PropsWithChildren<{
  heading: string;
}>): ReactElement {
  return (
    <div className="daisy-collapse justify-normal rounded-none text-sm">
      <input type="checkbox" className="min-h-0" />
      <div className=" daisy-collapse-title mb-3 min-h-0 p-0 font-medium">
        <div className="flex items-center gap-4">
          <span>{heading}</span>
          <span className="text-xs">
            {/* Click to expand */}
            <ChevronDownIcon className="h-4 focus:rotate-180 focus:transition" />
          </span>
        </div>
      </div>
      <div className="daisy-collapse-content space-y-2 px-0">{children}</div>
    </div>
  );
}
