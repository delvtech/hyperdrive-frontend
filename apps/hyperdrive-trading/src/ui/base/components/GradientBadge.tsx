import { PropsWithChildren, ReactElement } from "react";

export function GradientBadge({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="daisy-badge bg-accent/20 py-3">
      <div className="gradient-text">{children}</div>
    </div>
  );
}
