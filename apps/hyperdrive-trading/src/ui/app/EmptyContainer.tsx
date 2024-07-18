import { PropsWithChildren, ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";

export function EmptyContainer({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center px-[2vh]">
      <CommonHeadTags />
      {children}
    </div>
  );
}
