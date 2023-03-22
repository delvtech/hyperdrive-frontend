import { ReactElement } from "react";

interface StatProps {
  label: string;
  value: string;
}

export function Stat({ label, value }: StatProps): ReactElement {
  return (
    <div>
      <p className="mb-1 whitespace-nowrap font-quantico text-giga-blue-200">
        {label}
      </p>
      <p className="whitespace-nowrap font-rubik font-bold text-off-white">
        {value}
      </p>
    </div>
  );
}
