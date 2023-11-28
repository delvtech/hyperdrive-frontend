import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useAccount } from "wagmi";

export default function TestPage(): JSX.Element {
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(
    "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
  );
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getOpenLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("short positions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const { data: lpShares } = useQuery({
    queryKey: makeQueryKey("lp shares", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getLpShares({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const { data: withdrawalShares } = useQuery({
    queryKey: makeQueryKey("withdrawalShares", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getWithdrawalShares({ account })
      : undefined,
    enabled: queryEnabled,
  });

  console.log({
    longs,
    shorts,
    lpShares,
    withdrawalShares,
  });

  return <div>Test</div>;
}
