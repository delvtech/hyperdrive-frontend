import { ReactNode, ReactElement } from "react";

interface StatProps {
  title: string;
  value: string;
  description: ReactNode;
}

export function Stat({ title, value, description }: StatProps): ReactElement {
  return (
    <div className="daisy-stat text-center">
      <div className="daisy-stat-title">{title}</div>
      <div className="daisy-stat-value">{value}</div>
      <div className="daisy-stat-desc text-sm">{description}</div>
    </div>
  );
}
