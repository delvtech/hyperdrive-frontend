import type { ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";

function Tokens(): ReactNode {
  const { tokens = [] } = useBridgeTokens();
  if (!tokens) {
    return <div>Loading...</div>;
  }

  const tokenRows = tokens.map((token) => (
    <tr key={token.symbol}>
      <td>{token.name}</td>
      <td>{token.symbol}</td>
      <td>{token.decimals}</td>
      <td>
        <img
          width={30}
          height={30}
          src={token.logoURI!}
          alt={`${token.name} logo`}
          style={{ width: "30px", height: "30px" }}
        />
      </td>
    </tr>
  ));

  return (
    <Well>
      <table className="daisy-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Decimals</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>{tokenRows}</tbody>
      </table>
    </Well>
  );
}

export default Tokens;
