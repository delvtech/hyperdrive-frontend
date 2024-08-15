import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export interface Tab<TabId extends string> {
  id: TabId;
  onClick: () => void;
  label: string;
  content: ReactNode;
}
export function TabsTwo<TabId extends string>({
  tabs,
  activeTabId,
}: {
  tabs: Tab<TabId>[];
  activeTabId: TabId;
}): ReactElement {
  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lg text-clip">
      {tabs.map(({ id, onClick, label }) => (
        <input
          key={id}
          className={classNames(
            "daisy-tab font-chakraPetch",

            {
              "daisy-tab-active border-b-2 !border-b-primary/40 pb-1":
                activeTabId === id,
              "opacity-80 hover:opacity-100": activeTabId !== id,
            },
          )}
          aria-label={label}
          onChange={onClick}
          checked={activeTabId === id}
          type="radio"
          role="tab"
        />
      ))}
      <div
        role="tabpanel"
        className={classNames(
          "daisy-tab-content flex max-h-lvh max-w-full overflow-x-auto border",
        )}
      >
        {tabs.find(({ id }) => id === activeTabId)?.content}
      </div>
    </div>
  );
}
