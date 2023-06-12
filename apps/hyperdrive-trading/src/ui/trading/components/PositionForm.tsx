import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CircleStackIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { PositionType } from "src/ui/hyperdrive/types";
import { OpenLongPositionForm } from "src/ui/trading/components/OpenLongPositionForm";
import { OpenShortPositionForm } from "src/ui/trading/components/OpenShortPositionForm";
import { match } from "ts-pattern";

interface PositionFormProps {
  market: Hyperdrive;
  handleClose?: () => void;
}

export function PositionForm({
  market,
  handleClose,
}: PositionFormProps): ReactElement {
  const [position, setPosition] = useState<PositionType>("Long");

  return (
    <div className="flex flex-col gap-y-10">
      {/* Header */}
      <div className="flex items-center">
        <h3 className="text-xl mr-auto font-akira font-bold text-hyper-blue-100">
          Trade
        </h3>
        {handleClose && (
          <div>
            <XMarkIcon
              className="h-6 cursor-pointer stroke-hyper-blue-100 stroke-2  hover:opacity-50"
              onClick={handleClose}
            />
          </div>
        )}
      </div>

      {/* Position button group */}
      <div className="space-y-4">
        <div className="rounded-xs btn-group w-full border-hyper-blue-100">
          <PositionFormButton
            onClick={() => setPosition("Long")}
            active={position === "Long"}
          >
            <ArrowTrendingUpIcon className="mr-1 w-5" />
            Long
          </PositionFormButton>
          <PositionFormButton
            onClick={() => setPosition("Short")}
            active={position === "Short"}
          >
            <ArrowTrendingDownIcon className="mr-1 w-5" />
            Short
          </PositionFormButton>
          <PositionFormButton
            onClick={() => setPosition("LP")}
            active={position === "LP"}
          >
            <CircleStackIcon className="mr-1 w-4" />
            LP
          </PositionFormButton>
        </div>
      </div>

      {match(position)
        .with("Long", () => <OpenLongPositionForm market={market} />)
        .with("Short", () => <OpenShortPositionForm market={market} />)
        .with("LP", () => <div></div>)
        .exhaustive()}
    </div>
  );
}

interface PositionFormButtonProps extends PropsWithChildren {
  onClick: () => void;
  active?: boolean;
}

function PositionFormButton({
  onClick,
  children,
  active = false,
}: PositionFormButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        {
          "bg-hyper-blue-400": active,
          "hover:bg-hyper-blue-400": !active,
        },
        "border-1 btn flex-1 rounded-sm border-hyper-blue-400 bg-base-200 font-dm-sans normal-case",
      )}
    >
      {children}
    </button>
  );
}
