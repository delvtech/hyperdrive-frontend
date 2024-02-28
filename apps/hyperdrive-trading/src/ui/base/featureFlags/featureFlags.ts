import { useLocalStorage } from "react-use";

/**
 * Custom hook for managing feature flags via local storage.  It
 * provides a mechanism to check if a flag is enabled, and functions to enable
 * or disable the flag.
 *
 * @param flagName The name of the feature flag to manage.
 * @returns An object with:
 * - `isFlagEnabled`: a boolean indicating if the flag is currently enabled,
 * - `enableFlag`: a function to enable the flag, adding it to local storage
 * - `disableFlag`: a function to disable the flag, removing it from local storage
 */
export function useFeatureFlag(flagName: string): {
  isFlagEnabled: boolean;
  enableFlag: () => void;
  disableFlag: () => void;
} {
  const [existingFlags, setFlags] = useLocalStorage<string[]>(
    "feature_flags",
    [],
  );

  const isFlagEnabled = existingFlags?.includes(flagName);

  return {
    isFlagEnabled: !!isFlagEnabled,
    enableFlag: () => {
      setFlags([...new Set([...(existingFlags || []), flagName])]);
    },

    disableFlag: () => {
      setFlags((existingFlags || []).filter((flag) => flag !== flagName));
    },
  };
}
