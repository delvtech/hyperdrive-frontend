import { ReactElement } from "react";
import Chains from "src/ui/bridge/components/Chains/Chains";
import TokenBalances from "src/ui/bridge/components/TokenBalances/TokenBalances";
import Tokens from "src/ui/bridge/components/Tokens/Tokens";

export function Bridge(): ReactElement {
  return (
    <div className="m-6 flex flex-col space-y-6">
      <TokenBalances />
      <Tokens />
      <Chains />
    </div>
  );
}

export default Bridge;
