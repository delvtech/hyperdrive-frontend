import * as Tooltip from "@radix-ui/react-tooltip";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

export interface PoolStatProps {
  label: string;
  overlay?: ReactNode;
  value: ReactNode;
  isLoading?: boolean;
  isNew?: boolean;
  variant?: "default" | "gradient";
  action?: ReactNode;
}

export function PoolStat({
  label,
  value,
  overlay,
  isNew = false,
  variant = "default",
  isLoading = false,
  action,
}: PoolStatProps): ReactElement {
  let displayValue;
  if (isLoading) {
    displayValue = <Skeleton width={70} />;
  } else if (isNew) {
    displayValue = "✨New✨";
  } else {
    displayValue = value;
  }

  const poolStat = (
    <div className="flex shrink-0 flex-col items-center gap-1.5 sm:items-start">
      <div className={"text-neutral-content"}>{label}</div>
      <div
        className={classNames("font-dmMono text-h4 font-medium", {
          "gradient-text": variant === "gradient",
        })}
      >
        {displayValue}
      </div>
      {action}
    </div>
  );

  if (overlay) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger className="flex items-center whitespace-nowrap">
            {poolStat}
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="z-20 h-fit w-72 rounded-[0.6rem] bg-base-200 px-3 py-2 shadow-2xl"
              sideOffset={5}
              collisionPadding={12}
            >
              {overlay}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }

  return poolStat;
}
