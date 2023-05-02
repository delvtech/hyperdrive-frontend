import { ReactElement, ReactNode } from "react";

interface PageProps {
  header: ReactNode;
  content: ReactNode;
}

export default function Page({ header, content }: PageProps): ReactElement {
  return (
    <div className="col-span-2 grid">
      {header}
      <div className="flex min-h-[75vh] w-full justify-center py-[10vh] px-[4vw]">
        <div className="w-min">{content}</div>
      </div>
    </div>
  );
}
