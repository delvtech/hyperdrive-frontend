import { ReactElement } from "react";

interface ReceiptProps {
  data: Record<string, string | number | undefined>;
}

export function Receipt({ data }: ReceiptProps): ReactElement {
  const entries = Object.entries(data);

  return (
    <div className="flex flex-col w-full p-4 text-black gap-y-2 bg-lean bg-opacity-80">
      {entries.map(([key, value]) => {
        return (
          <div className="flex" key={`${key}-${value}`}>
            <span>{key}:</span>
            <span className="ml-auto font-bold">{value}</span>
          </div>
        );
      })}
    </div>
  );
}
