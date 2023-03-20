import { PropsWithChildren, ReactElement } from "react";

interface WellProps {}

export function Well({ children }: PropsWithChildren<WellProps>): ReactElement {
  return (
    <div className="rounded-lg border border-dawnAccent p-4">{children}</div>
  );
}
