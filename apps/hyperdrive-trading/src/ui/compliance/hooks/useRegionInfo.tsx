import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
} from "react";

const READONLY_REGIONS = ["us"];

interface RegionInfo {
  region?: string;
  isReadOnly?: boolean;
}

export function useRegionInfo(): RegionInfo {
  return useContext(RegionInfoContext);
}

const RegionInfoContext = createContext<RegionInfo>({});

// This provider checks the initial value of the "region" query parameter in the
// URL and sets the region info accordingly. This is done through context to
// ensure the region info persists through route changes.
export function RegionInfoProvider({
  children,
}: PropsWithChildren): ReactElement {
  // Check the region from the URL
  const region = new URL(window.location.href).searchParams
    .get("region")
    ?.toLocaleLowerCase();

  const isReadOnly = !!region && READONLY_REGIONS.includes(region);

  // Stable object reference
  const value = useMemo(() => ({ region, isReadOnly }), [region, isReadOnly]);

  return (
    <RegionInfoContext.Provider value={value}>
      {children}
    </RegionInfoContext.Provider>
  );
}
