import { PropsWithChildren, ReactElement } from "react";

export function ModalHeader({
  heading,
  subHeading,
  children,
}: PropsWithChildren<{
  heading: string;
  subHeading: string;
}>): ReactElement {
  return (
    <div className="h-30 flex items-center bg-base-100 bg-[url('/sine-wave.svg')] bg-cover bg-no-repeat p-8 pb-6">
      <div className="flex w-full flex-col items-start text-left">
        <div>
          <h4 className="mb-1">{heading}</h4>
          <p className="text-sm text-neutral-content">{subHeading}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
