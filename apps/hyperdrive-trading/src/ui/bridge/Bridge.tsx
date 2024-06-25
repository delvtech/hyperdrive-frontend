import { ReactElement } from "react";
import Chains from "src/ui/bridge/Chains/Chains";
import TokenBalances from "src/ui/bridge/TokenBalances/TokenBalances";
import Tokens from "src/ui/bridge/Tokens/Tokens";

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
