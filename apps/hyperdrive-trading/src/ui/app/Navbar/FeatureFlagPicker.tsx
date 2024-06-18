import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
export function FeatureFlagPicker(): ReactElement {
  return (
    <div className="daisy-dropdown daisy-dropdown-end">
      <label tabIndex={0} className="daisy-btn daisy-btn-ghost rounded-btn">
        <Cog6ToothIcon className="h-4" /> Devtools
      </label>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li className="daisy-menu-title">Feature flags</li>
        {/* Place your feature flag menu items here, eg:  */}
        {/* <FeatureFlagMenuItem flagName="name-here">
        Menu Item Name here
        </FeatureFlagMenuItem> */}
        <FeatureFlagMenuItem flagName="throw-error">
          Throw Test Error
        </FeatureFlagMenuItem>
      </ul>
    </div>
  );
}

function FeatureFlagMenuItem({
  flagName,
  children,
}: {
  flagName: string;
  children: string;
}) {
  const { isFlagEnabled, enableFlag, disableFlag } = useFeatureFlag(flagName);
  return (
    <li>
      <button onClick={isFlagEnabled ? disableFlag : enableFlag}>
        {children}
        {isFlagEnabled ? (
          <div className="daisy-badge daisy-badge-primary daisy-badge-sm">
            On
          </div>
        ) : (
          <div className="daisy-badge daisy-badge-ghost daisy-badge-sm">
            Off
          </div>
        )}
      </button>
    </li>
  );
}
