import { useSearchParams } from "react-router-dom";

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
        [...currentFlags, flagName].join(","),
      );
      setSearchParams(newSearchParams);
    },

    disableFlag: () => {
      // Create a new search params so we retain all existing search params
      const newSearchParams = new URLSearchParams(searchParams);
      searchParams.set(
        "feature_flags",
        currentFlags.filter((name) => name !== flagName).join(","),
      );
      setSearchParams(newSearchParams);
    },
  };
}
