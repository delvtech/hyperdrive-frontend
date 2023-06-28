import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";
import assertNever from "assert-never";
import classNames from "classnames";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { PositionType } from "src/ui/hyperdrive/types";
import { MarketSelect } from "src/ui/markets/MarketSelect/MarketSelect";
import { OpenLongPositionForm } from "src/ui/trade/OpenLongPositionForm";
import { OpenShortPositionForm } from "src/ui/trade/OpenShortForm/OpenShortForm";

interface TradeSideBarProps {
  market: Hyperdrive;
}

export function TradeSideBar({ market }: TradeSideBarProps): ReactElement {
  const [position, setPosition] = useState<PositionType>("Long");

  return (
    <div className="flex flex-col gap-8">
      <h4 className="whitespace-nowrap font-akira text-h4 uppercase text-primary">
        Hyperdrive
      </h4>

      <MarketSelect markets={[market]} />

      {/* Position button group */}
      <div className="daisy-join w-full">
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

      {(() => {
        switch (position) {
          case "Long":
            return <OpenLongPositionForm market={market} />;
          case "Short":
            return <OpenShortPositionForm market={market} />;
          case "LP":
            return <div></div>;
          default:
            assertNever(position);
        }
      })()}
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
        "daisy-btn-ghost daisy-join-item daisy-btn flex-1",
        {
          "daisy-btn-active": active,
        },
      )}
    >
      {children}
    </button>
  );
}
