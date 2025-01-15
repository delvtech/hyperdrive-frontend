import { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";

export function NoWalletConnected(): ReactElement {
  return (
    <PositionContainer className="my-28">
      <NonIdealState
        heading="No wallet connected"
        action={<ConnectWalletButton />}
      />
    </PositionContainer>
  );
}
