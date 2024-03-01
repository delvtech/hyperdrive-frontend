import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement, ReactNode } from "react";

interface StatProps {
  label: string;
  value: ReactNode;
  description?: string;
}

export function Stat({ label, value, description }: StatProps): ReactElement {
  return (
    <div
      data-tip={description}
      className="group daisy-tooltip flex cursor-help  flex-col items-start transition duration-150 ease-in-out"
    >
      <div className="mb-1 whitespace-nowrap text-h4 font-bold">{value}</div>
      {description ? (
        <p className="text-sm text-neutral-content">
          {label}
          <InformationCircleIcon className="group-hover:text-gray-500 ml-1 inline-block w-4 text-neutral-content opacity-0 transition duration-150 ease-in-out group-hover:opacity-100" />
        </p>
      ) : (
        <p className="text-sm text-neutral-content">{label}</p>
      )}
    </div>
  );
}
