interface ReceiptProps {
  data: Record<string, string | number>;
}

export function Receipt({ data }: ReceiptProps) {
  const entries = Object.entries(data);

  return (
    <div className="flex flex-col w-full text-white gap-y-2">
      {entries.map(([key, value]) => {
        return (
          <div className="flex" key={`${key}-${value}`}>
            <span>{key}</span>
            <span className="ml-auto font-bold">{value}</span>
          </div>
        );
      })}
    </div>
  );
}
