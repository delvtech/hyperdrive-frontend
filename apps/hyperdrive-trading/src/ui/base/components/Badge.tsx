import type { PropsWithChildren, ReactElement } from "react";

export function Badge({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="daisy-badge daisy-badge-neutral daisy-badge-lg py-4">
      {children}
    </div>
  );
}
