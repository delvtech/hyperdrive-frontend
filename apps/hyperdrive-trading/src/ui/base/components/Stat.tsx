import { ReactElement } from "react";

interface StatProps {
  label: string;
  value: string;
  className?: string;
}

export function Stat({ label, value, className }: StatProps): ReactElement {
  return (
    <div className={className}>
      <p className="mb-1 whitespace-nowrap font-dm-sans text-hyper-blue-300">
        {label}
      </p>
      <p className="font-bold whitespace-nowrap font-dm-sans text-hyper-blue-100">
        {value}
      </p>
    </div>
  );
}
