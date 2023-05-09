import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { Stat } from "src/ui/base/Stat/Stat";
import { AssetIcon } from "src/ui/token/AssetIcon";

interface LoanCardHeaderProps {}

export function LoanCardHeader({}: LoanCardHeaderProps): ReactElement {
  return (
    <div className="flex w-full justify-between">
      <Stat
        icon={<AssetIcon address={SparkGoerliAddresses.DAI_token} size="lg" />}
        stat="DAI"
        label="1 DAI = $1"
        alignment="left"
      />
      <Stat stat="1.50%" label="Fixed Borrow APY" alignment="right" />
    </div>
  );
}
