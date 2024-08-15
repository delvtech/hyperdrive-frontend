import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalOpenLongsValue } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { useAccount } from "wagmi";

export function TotalOpenLongsValue({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { totalOpenLongsValue } = useTotalOpenLongsValue({
    account,
    longs: openLongs,
    enabled: openLongsStatus === "success",
    hyperdrive,
  });
  return (
    <p>
      Total Value:{" "}
      {formatBalance({
        balance: totalOpenLongsValue || 0n,
        decimals: 18,
        places: 4,
      })}{" "}
    </p>
  );
}
