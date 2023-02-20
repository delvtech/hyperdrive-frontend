function TermTableRow() {
  return (
    <tr className="text-black bg-lean hover:bg-racing-green hover:cursor-pointer font-Retro">
      <td>
        <div className="flex items-center gap-x-1">
          <img
            className="inline"
            src="/src/public/logos/usdc-logo.png"
            height={24}
            width={24}
          />
          USDC
        </div>
      </td>
      <td>Aave</td>
      <td>8.0%</td>
      <td>8.0%</td>
      <td>11.0%</td>
      <td>$1M</td>
    </tr>
  );
}

export function TermTable() {
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
        <TermTableRow />
        <TermTableRow />
        <TermTableRow />
        <TermTableRow />
      </tbody>
    </table>
  );
}
