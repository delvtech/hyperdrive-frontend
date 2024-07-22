import { PropsWithChildren, ReactElement } from "react";

export function EmptyContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center px-[2vh]">
      {children}
    </div>
  );
}
