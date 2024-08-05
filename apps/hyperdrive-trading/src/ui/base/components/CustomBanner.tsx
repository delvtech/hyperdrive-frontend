import type { ReactNode } from "react";

export default function CustomBanner({
  icon,
  description,
}: {
  icon?: ReactNode;
  description: string;
}): JSX.Element {
  return (
    <div className="daisy-alert">
      {icon}
      <span>{description}</span>
    </div>
  );
}
