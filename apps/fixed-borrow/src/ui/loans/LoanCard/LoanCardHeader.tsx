import { ReactElement } from "react";
import { Stat } from "src/ui/base/Stat/Stat";
import { AssetIcon } from "src/ui/token/AssetIcon";

interface LoanCardHeaderProps {}

export function LoanCardHeader({}: LoanCardHeaderProps): ReactElement {
  return (
    <div className="flex w-full justify-between">
      <Stat
        icon={<AssetIcon assetId={"dai"} large />}
        text={"DAI"}
        subtext={"1 DAI = $1"}
        alignment="left"
      />
      <Stat text={"1.50%"} subtext={"Fixed Borrow APY"} alignment="right" />
    </div>
  );
}
