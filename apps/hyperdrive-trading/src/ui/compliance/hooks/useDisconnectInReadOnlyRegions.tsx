import { useState } from "react";
import toast from "react-hot-toast";
import { useIsReadOnlyRegion } from "src/ui/compliance/hooks/useIsReadOnlyRegion";
import { useDisconnect } from "wagmi";

export function useDisconnectInReadOnlyRegions(): void {
  const isReadOnly = useIsReadOnlyRegion();
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
}
