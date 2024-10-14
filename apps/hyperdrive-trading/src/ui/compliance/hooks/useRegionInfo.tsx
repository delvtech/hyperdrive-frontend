import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useDisconnect } from "wagmi";

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

  // If the region is in the read-only list, set isReadOnly to true
  const isReadOnly = !!region && READONLY_REGIONS.includes(region);

  // Force disconnect if in read-only region
  const { connectors, disconnect } = useDisconnect();
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  if (isReadOnly && connectors.length && !isDisconnecting) {
    setIsDisconnecting(true);
    disconnect(
      {},
      {
        onSuccess: () =>
          toast.error(
            <span className="flex flex-col">
              <span className="text-error">Readonly Mode</span>
              <span className="text-neutral-content">
                Wallet connections are disabled in your country or region.
              </span>
            </span>,
            { id: "read-only-region-toast" },
          ),
        onError: (error) => console.error("Error disconnecting wallet:", error),
        onSettled: () => setIsDisconnecting(false),
      },
    );
  }

  // Stable object reference
  const value = useMemo(() => ({ region, isReadOnly }), [region, isReadOnly]);

  return (
    <RegionInfoContext.Provider value={value}>
      {children}
    </RegionInfoContext.Provider>
  );
}
