import { ReactElement } from "react";

export function TokenPicker({
  tokens,
  activeToken,
  onChange,
}: {
  tokens: string[];
  activeToken: string;
  onChange: (token: string) => void;
}): ReactElement {
  return (
    <select
      className="daisy-join-item daisy-select flex h-12 items-center border border-neutral-content/30 bg-base-100"
      onChange={(e) => onChange(e.target.value)}
      value={activeToken}
    >
      {tokens.map((token) => (
        <option key={token}>{token}</option>
      ))}
    </select>
  );
}
