import { useSearchParams } from "react-router-dom";

/**
 * Custom hook for managing feature flags via URL search parameters.  It
 * provides a mechanism to check if a flag is enabled, and functions to enable
 * or disable the flag.
 *
 * @param flagName The name of the feature flag to manage.
 * @returns An object with:
 * - `isFlagEnabled`: a boolean indicating if the flag is currently enabled,
 * - `enableFlag`: a function to enable the flag, adding it to the URL search parameters,
 * - `disableFlag`: a function to disable the flag, removing it from the URL search parameters.
 */
export function useFeatureFlag(flagName: string): {
  isFlagEnabled: boolean;
  enableFlag: () => void;
  disableFlag: () => void;
} {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFlags = searchParams.get("feature_flags")?.split(",") || [];

  const isEnabled = currentFlags.includes(flagName);

  return {
    isFlagEnabled: isEnabled,
    enableFlag: () => {
      // Create a new search params so we retain all existing search params
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set(
        "feature_flags",
        [...new Set([...currentFlags, flagName])].join(","),
      );
      setSearchParams(newSearchParams);
    },

    disableFlag: () => {
      // Create a new search params so we retain all existing search params
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(
        "feature_flags",
        currentFlags.filter((name) => name !== flagName).join(","),
      );
      setSearchParams(newSearchParams);
    },
  };
}
