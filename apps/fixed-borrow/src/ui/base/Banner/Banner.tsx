import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
}

export function Banner({ children }: BannerProps): ReactElement {
  return (
    <div className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-pinkSlipBurst-start via-pinkSlip to-pinkSlipBurst-end p-[1px]">
      <div className="flex w-full items-center justify-center rounded-md bg-midnight/95 py-3 px-4">
        <span className="bg-gradient-to-r from-pinkSlipBurst-start to-pinkSlipBurst-end bg-clip-text text-transparent">
          {children}
        </span>
      </div>
    </div>
  );
}
