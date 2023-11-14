import { CheckIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { LP_CARDS_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";
export function FeatureFlagPicker(): ReactElement {
  const { isFlagEnabled, enableFlag, disableFlag } = useFeatureFlag(
    LP_CARDS_FEATURE_FLAG,
  );
  return (
    <div className="daisy-dropdown-end daisy-dropdown">
      <label tabIndex={0} className="daisy-btn-ghost rounded-btn daisy-btn">
        <Cog6ToothIcon className="h-4" /> Devtools
      </label>
      <ul
        tabIndex={0}
        className="daisy-dropdown-content daisy-menu rounded-box z-[1] mt-4 w-52 bg-base-100 p-2 shadow"
      >
        <li className="daisy-menu-title">Feature flags</li>
        <li className="">
          <button onClick={isFlagEnabled ? disableFlag : enableFlag}>
            {isFlagEnabled ? (
              <CheckIcon className="h-4 text-base-300" />
            ) : (
              <CheckIcon className="h-4 text-base-300/10" />
            )}
            {LP_CARDS_FEATURE_FLAG}
          </button>
        </li>
      </ul>
    </div>
  );
}
