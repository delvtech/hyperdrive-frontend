import { ReactElement } from "react";

interface StatProps {
  label: string;
  value: string;
}

export function Stat({ label, value }: StatProps): ReactElement {
  return (
    <div>
      <p className="mb-1 whitespace-nowrap font-quantico text-hyper-blue-300">
        {label}
      </p>
      <p className="font-bold whitespace-nowrap font-rubik text-hyper-blue-100">
        {value}
      </p>
    </div>
  );
}
