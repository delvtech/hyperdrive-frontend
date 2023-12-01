import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface StatProps {
  label: string;
  value: ReactNode;
  description?: string;
}

export function Stat({ label, value, description }: StatProps): ReactElement {
  return (
    <div className="group">
      <div className="whitespace-nowrap text-h6">{value}</div>
      <div
        data-tip={description}
        // Future note: use before: to style the text inside the tooltip
        className={classNames(
          "daisy-tooltip flex items-center transition duration-150 ease-in-out",
          description ? "cursor-help" : "",
        )}
      >
        <p className="text-sm opacity-50">
          {label}
          <InformationCircleIcon className="ml-1 inline-block w-4 text-gray-400 opacity-0 transition duration-150 ease-in-out group-hover:text-gray-500 group-hover:opacity-100" />
        </p>
      </div>
    </div>
  );
}
