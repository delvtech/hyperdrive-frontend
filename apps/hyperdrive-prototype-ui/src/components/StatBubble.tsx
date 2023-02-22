import { ReactElement } from "react";

interface StatBubbleProps {
  label: string;
  value: string;
}

export function StatBubble({ label, value }: StatBubbleProps): ReactElement {
  return (
    <div className="w-48 px-8 text-white border-2 border-solid rounded stat place-items-center border-racing-green">
      <div className="stat-title">{label}</div>
      <div className="text-sm stat-value font-Retro">{value}</div>
    </div>
  );
}
