interface StatBubbleProps {
  label: string;
  value: string;
}

export function StatBubble({ label, value }: StatBubbleProps) {
  return (
    <div className="px-8 text-white border-2 border-solid rounded w-fit stat place-items-center border-racing-green">
      <div className="stat-title">{label}</div>
      <div className="stat-value text-md">{value}</div>
    </div>
  );
}
