import { ReadRegistry } from "@delvtech/hyperdrive-js";
import { useMemo } from "react";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useDrift } from "src/ui/drift/useDrift";

export function useReadRegistry(chainId: number): ReadRegistry | undefined {
  const { registries } = useAppConfigForConnectedChain();
  const drift = useDrift();
  return useMemo(
    () =>
      drift
        ? new ReadRegistry({
            address: registries[chainId],
            drift,
          })
        : undefined,
    [drift, registries, chainId],
  );
}
