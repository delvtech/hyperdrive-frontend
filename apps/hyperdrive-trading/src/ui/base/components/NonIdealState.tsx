import { ReactElement } from "react";

export function NonIdealState(): ReactElement {
  return (
    <div className="rounded-b-lg bg-base-200 p-10 text-center">
      <p className="text-lg">Nothing to show.</p>
    </div>
  );
}
