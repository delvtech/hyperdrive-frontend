import { PropsWithChildren, ReactElement } from "react";

interface WellProps {}

export function Well({ children }: PropsWithChildren<WellProps>): ReactElement {
  return (
    <div className="rounded-lg bg-midnight p-4 ring-1 ring-dawnAccent">
      {children}
    </div>
  );
}
