import { ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";
import { useChains } from "src/ui/bridge/hooks/useChains";

function Chains(): ReactNode {
  const { chains } = useChains();
  if (!chains) {
    return <div>Loading...</div>;
  }

  const chainRows = chains.map((chain) => (
    <tr key={chain.chainID}>
      <td>{chain.name}</td>
      <td>{chain.chainID}</td>
      <td>{chain.chainType}</td>
      <td>
        <img
          width={30}
          height={30}
          src={chain.logoURI}
          alt={`${chain.name} logo`}
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
            <th>Chain ID</th>
            <th>Chain Type</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>{chainRows}</tbody>
      </table>
    </Well>
  );
}

export default Chains;
