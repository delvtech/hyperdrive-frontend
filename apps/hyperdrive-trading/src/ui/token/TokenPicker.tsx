import { ReactElement } from "react";

export function TokenSymbolPicker({
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
      className="daisy-join-item daisy-select flex h-12 items-center border border-neutral-content/30 bg-base-100 px-4"
      onChange={(e) => onChange(e.target.value)}
    >
      {tokens.map((token) => (
        <option key={token} selected={token === activeToken}>
          {token}
        </option>
      ))}
    </select>
  );
}
