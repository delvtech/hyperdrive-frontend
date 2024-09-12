import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement } from "react";
import { Stat, StatProps } from "src/ui/base/components/Stat";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";

export interface MultiStatProps extends StatProps {
  id: string;
}

export function MultiStat({
  stats,
  activeStatId,
  onTabChange,
}: {
  stats: MultiStatProps[];
  onTabChange: (stat: MultiStatProps) => void;
  activeStatId: string;
}): ReactElement {
  const { activeItem, setActiveItemId } = useActiveItem({
    items: stats,
    idField: "id",
    defaultActiveItemId: stats.find((stat) => activeStatId === stat.id)
      ?.id as string,
  });

  return (
    <button
      className="flex flex-col gap-2"
      onClick={() => {
        // if the active item isn't the last one, go to the next item
        const currentStatIndex = stats.findIndex((i) => i.id === activeItem.id);
        let nextStat = stats[0];
        if (currentStatIndex !== stats.length - 1) {
          nextStat = stats[currentStatIndex + 1];
        }
        setActiveItemId(nextStat.id);
        onTabChange(nextStat);
      }}
    >
      <Stat
        label={
          <div className="flex flex-col gap-1">
            {/* Implements the same label as the Stat component, but adds the
            tab buttons below the label. This is done so that the tabs can be
            centered under the label, not the whole Stat element */}
            {activeItem.description ? (
              <p
                data-tip={activeItem.description}
                className={classNames(
                  `group daisy-tooltip cursor-help text-start text-sm text-neutral-content before:z-40 before:max-w-56 before:p-2 before:text-start`,
                  {
                    "daisy-tooltip-top": activeItem.tooltipPosition === "top",
                    "daisy-tooltip-bottom":
                      activeItem.tooltipPosition === "bottom",
                    "daisy-tooltip-left": activeItem.tooltipPosition === "left",
                    "daisy-tooltip-right":
                      activeItem.tooltipPosition === "right",
                  },
                )}
              >
                {activeItem.label}
                <InformationCircleIcon className="ml-1 hidden w-4 text-neutral-content opacity-0 transition duration-150 ease-in-out group-hover:text-gray-500 group-hover:opacity-100 lg:inline-block" />
              </p>
            ) : (
              <p className="self-start text-sm text-neutral-content">
                {activeItem.label}
              </p>
            )}

            <div
              className={classNames("flex items-center justify-center gap-2", {
                "pr-4": !!activeItem.description,
              })}
            >
              {stats.map(({ id }) => {
                return (
                  <div
                    key={id}
                    className={classNames(
                      "transition-all hover:opacity-90",
                      id === activeItem.id
                        ? "scale-150 text-base-content"
                        : "text-neutral-content hover:scale-125",
                    )}
                  >
                    •
                  </div>
                );
              })}
            </div>
          </div>
        }
        value={activeItem.value}
      />
    </button>
  );
}
