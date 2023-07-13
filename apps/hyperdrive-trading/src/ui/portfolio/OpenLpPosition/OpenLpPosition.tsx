import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { useLpPosition } from "src/ui/hyperdrive/lp/hooks/useLpPosition";
import { useAccount } from "wagmi";

interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
}

export function OpenLpPosition({
  hyperdrive,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const { lpPosition } = useLpPosition({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  console.log("lpPosition", lpPosition);

  // TODO:
  return <Well>Under construction</Well>;
}
