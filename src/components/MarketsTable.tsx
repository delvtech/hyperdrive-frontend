import { MarketData } from "hyperdrive/types";
import { useNavigate } from "react-router-dom";
import { formatBalance } from "utils";

interface MarketsTableProps {
  markets: MarketData[];
}

export function MarketsTable({ markets }: MarketsTableProps) {
  return (
    <table
      id="terms-table"
      className="text-left text-white border-separate border-spacing-y-4"
    >
      <thead>
        <th>Token</th>
        <th>Yield Source</th>
        <th>Fixed APR</th>
        <th>Variable APR</th>
        <th>LP APR</th>
        <th>TVL</th>
      </thead>

      <tbody>
        {markets.map((term) => (
          <MarketsTableRow
            token={term.token}
            yieldSource="Aave"
            fixedApr={5.0}
            variableApr={5.0}
            lpApr={10.0}
            tvl={1_000_000}
          />
        ))}
      </tbody>
    </table>
  );
}

function MarketsTableRow({
  token,
  yieldSource,
  fixedApr,
  variableApr,
  lpApr,
  tvl,
}: MarketData) {
  const push = useNavigate();

  return (
    <tr
      onClick={() => push("/term")}
      className="text-black bg-lean hover:bg-racing-green hover:cursor-pointer font-Retro"
    >
      <td>
        <div className="flex items-center gap-x-1">
          <img className="inline" src={token.logoUrl} height={24} width={24} />
          {token.symbol}
        </div>
      </td>
      <td>{yieldSource}</td>
      <td>{fixedApr}%</td>
      <td>{variableApr}%</td>
      <td>{lpApr}%</td>
      <td>${formatBalance(tvl)}</td>
    </tr>
  );
}
