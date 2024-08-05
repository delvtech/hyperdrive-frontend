import type { PropsWithChildren, ReactElement } from "react";

export function ModalHeader({
  heading,
  subHeading,
  children,
}: PropsWithChildren<{
  heading: string;
  subHeading: string;
}>): ReactElement {
  return (
    <div className="flex h-30 items-center bg-[url('/sine-wave.svg')] bg-base-100 bg-cover bg-no-repeat p-8 pb-6">
      <div className="flex w-full flex-col">
        <div>
          <h4 className="mb-1">{heading}</h4>
          <p className="text-neutral-content">{subHeading}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
