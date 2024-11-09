import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export interface Tab<TabId extends string> {
  id: TabId;
  onClick: () => void;
  label: string;
  content: ReactNode;
}
export function Tabs<TabId extends string>({
  tabs,
  activeTabId,
}: {
  tabs: Tab<TabId>[];
  activeTabId: TabId;
}): ReactElement {
  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lg">
      {tabs.map(({ id, onClick, label }) => (
        <input
          key={id}
          className={classNames("daisy-tab font-chakraPetch text-h4", {
            "daisy-tab-active border-b-2 !border-b-primary/40 pb-1":
              activeTabId === id,
            "border-b-2 border-transparent pb-1 opacity-80 hover:opacity-100":
              activeTabId !== id,
          })}
          aria-label={label}
          onChange={onClick}
          checked={activeTabId === id}
          type="radio"
          role="tab"
        />
      ))}
      <div role="tabpanel" className={classNames("daisy-tab-content flex")}>
        {tabs.find(({ id }) => id === activeTabId)?.content}
      </div>
    </div>
  );
}
